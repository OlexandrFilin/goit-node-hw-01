import { listContacts, getContactById, addContact , removeContact } from "./db/contacts.js";
import { Command } from "commander";
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

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
    default:
      console.warn('\x1B[31m Unknown action type!');

  }
};
// console.log(argv)
invoceAction(argv);
