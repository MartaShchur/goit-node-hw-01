
import {program} from "commander";
import * as contactService from "./contacts.js";

// TODO: рефакторити

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      // ...
      const listContacts = await contactService.getListContacts();
      return console.log(listContacts);

    case 'get':
      // ... id
      const oneContact = await contactService.getContactById(id);
      return console.log(oneContact);
  
    case 'add':
      // ... name email phone
      const newContact = await contactService.addContact(name, email, phone);
      return console.log(newContact);
   

    case 'remove':
      // ... id
      const delContact = await contactService.removeContact(id);
      return console.log(delContact);

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse();

const options = program.opts();

invokeAction(options);
