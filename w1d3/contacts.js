const contacts = [];
const addContact = function(name, email) {
  // TODO: implement
  //  - Create a new contact object
  const newContact = {
    name: name,
    email: email
  }
  //  - Add the new contact object into the list of contacts
  contacts.push(newContact);
  //  - Return the new contact object
  return newContact;
}

const findContactByEmail = function(email) {
  // TODO: implement
  // contacts.forEach(function(element) {
  //   if (element.email === email){
  //     return element;
  //   }
  // }, this);

  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].email === email) {
      return contacts[i];
    }
  }
}

//TESTS
console.log(addContact('JJ', 'test@email.com').name === 'JJ');
console.log(addContact('Another Person', 'person@email.com').email === 'person@email.com');
console.log(addContact('Sally', 'sally@email.com').name === 'Sally');
console.log(findContactByEmail('test@email.com').name === 'JJ');
console.log(findContactByEmail('test@email.com').email === 'test@email.com');