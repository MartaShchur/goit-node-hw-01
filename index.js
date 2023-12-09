
import {program} from "commander";
import * as contactService from "./contacts.js";

// TODO: рефакторити

const invokeAction = async ({ action, id, ...data }) => {
  switch (action) {
    case 'list':
      // ...
      listContacts = await contactService.getListContacts();
      console.log(listContacts);
      break;

    case 'get':
      // ... id
      oneContact = await contactService.getContactById(id);
      console.log(oneContact);
    break;

    case 'add':
      // ... name email phone
      newContact = await contactService.addContact(data);
      console.log(newContact);
    break;

    case 'remove':
      // ... id
      delContact = await contactService.removeContact(id);
      console.log(delContact);
    break;

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
