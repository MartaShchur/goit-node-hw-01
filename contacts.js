// contacts.js

import fs from "fs/promises";
import path from "path";
import { nanoid } from 'nanoid'

/*
 * Розкоментуй і запиши значення
 * const contactsPath = ;
 */

const contactsPath = path.resolve("movies", "movies.json");
// console.log(contactsPath);

const updateContacts = contacts => fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

// TODO: задокументувати кожну функцію
export const listContacts = async () => {
    // ...твій код. Повертає масив контактів.
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
};
// console.log(listContacts);

export const getContactById = async (id) => {
    // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
    const contacts = await listContacts();
    const result = contacts.find(item => item.id === id);
    return result || null;
};
// console.log(getContactById);

export const removeContact = async (id) => {
    // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
    const contacts = await listContacts();
    const indexContact = contacts.findIndex(item => item.id === id);
    if (indexContact === -1) {
        return null;
    }
    const [result] = contacts.splice(indexContact, 1);
    await updateContacts(contacts);
    return result;
};

export const addContact = async (data) => {
    // ...твій код. Повертає об'єкт доданого контакту.
    const contacts = await listContacts();
    const newContact = {
        id: nanoid(),
       ...data,
    };
    contacts.push(newContact);
    await updateContacts(contacts);
    return newContact;
};
// console.log(addContact);



