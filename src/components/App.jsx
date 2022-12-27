import React from 'react';
import ContactForm from './ContactsForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactsList/ContactsList';
import style from './App.module.css';

const App = () => {

  return (
    <div className={style.container}>
      <h1>Phonebook</h1>
      <div className={style.wrapper}>
      <ContactForm />
      <Filter />
      </div>
      <ContactList/>
    </div>
  );
};

export default App;
