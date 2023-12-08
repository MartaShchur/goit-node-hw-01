
import {program} from "commander";
import * as contactsService from "./contacts.js";

// TODO: рефакторити

const invokeAction = async ({ action, id, ...data }) => {
  switch (action) {
    case 'list':
      // ...
      const listContacts = await contactsService.listContacts();
       return console.log(listContacts);
    case 'getById':
      // ... id
      const oneContact = await contactsService.getContactById(id);
      return console.log(getContact);
    case 'add':
      // ... name email phone
      const newContact = await contactsService.addContact(data);
      return console.log(newContact);
    case 'remove':
      // ... id
      const delContact = await contactsService.removeContact(id);
      return console.log(delContact);
    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

program
  .option('-a, --action <type>')
  .option('-i, --id <type>')
  .option('-n, --name <type>')
  .option('-e, --email <type>')
  .option('-p, --phone <type>');

program.parse();

const options = program.opts();

invokeAction(options);
