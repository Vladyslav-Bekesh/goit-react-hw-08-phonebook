import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import * as selectors from '../../redux/selectors';

import {
  FormCss,
  FormLabelCss,
  FormInputCss,
} from './Forms.styled';

import { TextButton } from '../TextButton/TextButton';

function ContactForm() {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectors.selectContacts);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    newContact(name, number);
    resetForm();
  };

  const resetForm = () => {
    setNumber('');
    setName('');
  };

  const newContact = (name, phone) => {
    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const isDuplicate = contacts.some(contact => contact.name === trimmedName);

    if (isDuplicate) {
      alert('This contact is already in contacts');
    } else {
      const newContact = {
        name: trimmedName,
        number: trimmedPhone,
        id: nanoid(),
      };

      dispatch(addContact(newContact));
    }
  };

  const chekButtonActive = () => {
    if (name === '' || number === '') {
      return true;
    }
    return false;
  };
  return (
    <>
      <FormCss onSubmit={handleSubmit}>
        <FormLabelCss>
          Enter name
          <FormInputCss
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={handleChange}
            required
          />
        </FormLabelCss>

        <FormLabelCss>
          Enter number
          <FormInputCss
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={handleChange}
            required
          />
        </FormLabelCss>

        <TextButton
          type="submit"
          disabled={chekButtonActive()}
          text={'Add to contact'}
        />
      </FormCss>
    </>
  );
}

export default ContactForm;
