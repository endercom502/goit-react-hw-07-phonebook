import { nanoid } from 'nanoid';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addNewContact } from 'redux/actions';

import style from './ContactForm.module.css';

const ContactForm = () => {
  const id = nanoid();
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const addContact = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;
    const normalizedName = name.toLowerCase();
    let nameOntheList = false;

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    contacts.forEach(contact => {
      if (contact.name.toLowerCase() === normalizedName) {
        alert(`${contact.name} is already in contacts`);
        nameOntheList = true;
      }
    });

    if (nameOntheList) return;

    dispatch(addNewContact(newContact));
    form.reset();
  };

  return (
    <form className={style.form} onSubmit={addContact}>
      <label htmlFor={id}>Name</label>
      <input
        className={style.formInput}
        id={id}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor={id}>Phone</label>
      <input
        className={style.formInput}
        id={id}
        type="tel"
        name="number"
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