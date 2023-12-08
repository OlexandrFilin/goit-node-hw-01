import { listContacts, getContactById, addContact , removeContact } from "./db/contacts.js";

const invoceAction = async ({ action, id,  name, email, phone }) => {
  switch (action) {
    case "list":
      const contactsList = await listContacts();
      console.log("contactsList", contactsList);
      break;
    case "get": {
      const contact = await getContactById(id);
      console.log("find  contact by id ", contact);
      break;
    }
    case "add": {
      const contact = await addContact({name, email, phone} );
      console.log("add contact in array", contact);
      break;
    }
    case "remove": {
      const contact = await removeContact(id);
      console.log("remove contact index array", contact);
      break;
    }
  }
};

//invoceAction({action:'list'});
//invoceAction({action:'get',id:'qdggE76Jtbfd9eWJHrssH'});
//invoceAction({action:'add',name:'Olexandr',email:'ajx@google.com',phone:"(050) 3631275"});
//invoceAction({action:'add',name:'Irina',email:'ira@google.com',phone:"(050) 4654324"});
invoceAction({ action: "remove", id: "rbWJgoau-P7Vv7_52NUqe" });
