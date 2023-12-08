import fs from 'fs/promises';
import { nanoid } from 'nanoid';
import path from 'path';
nanoid
const pathContacts = path.resolve('db','contacts.json');

export const  listContacts = async  ()=> {
 const data =  await fs.readFile(pathContacts);
 return JSON.parse(data);
}

export const  getContactById = async (id)=>{
    const contacts = await listContacts();
    const contact = contacts.find((item)=>item.id === id);
    return contact||null;
}
export const addContact = async (data)=>{
    let contacts = await listContacts();
    const contact = {id:nanoid(),...data} 
    contacts.push(contact) ;                       
    await fs.writeFile(pathContacts,JSON.stringify(contacts,null,"\t"));
    return contact;
}

export const removeContact = async (id)=>{
    let contacts = await listContacts();
    const delContIndex = contacts.findIndex((item)=>item.id === id);
     if (delContIndex === -1){
        return null;
     }
     const [delContact] =  contacts.splice(delContIndex,1);
     fs.writeFile(pathContacts,JSON.stringify(contacts,null,"\t"))
    return delContact||nul;
}