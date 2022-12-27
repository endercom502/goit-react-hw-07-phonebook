import { nanoid } from 'nanoid';
import React from 'react';
import { useContactsQuery, useAddContactMutation } from 'redux/services/contactsApi';

import style from './ContactForm.module.css';

const ContactForm = () => {
  const id = nanoid();

  const { data } = useContactsQuery();
  const [addContact] = useAddContactMutation();

  const addNewContact = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.name.value;
    const phone = form.phone.value;
    const normalizedName = name.toLowerCase();
    let nameOntheList = false;

    const newContact = {
      id: nanoid(),
      name: name,
      phone: phone,
    };

    data.forEach(contact => {
      if (contact.name.toLowerCase() === normalizedName) {
        alert(`${contact.name} is already in contacts`);
        nameOntheList = true;
      }
    });

    if (nameOntheList) return;

    addContact(newContact);
    form.reset();
  };

  return (
    <form className={style.form} onSubmit={addNewContact}>
      <label htmlFor={id} className={style.formText}>Name</label>
      
      <input
        className={style.formInput}
        id={id}
        type="text"
        name="name"
        placeholder ='Name'
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor={id} className={style.formText}>Phone</label>
      <input
        className={style.formInput}
        id={id}
        type="tel"
        name="phone"
        placeholder='Phone Number'
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={style.formBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;