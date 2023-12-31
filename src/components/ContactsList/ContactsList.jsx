import React from 'react';
import { deleteContact } from '../../redux/operations';
import { useDispatch } from 'react-redux';

import {
  ContactList,
  ContactItem,
  DeleteBtn,
  ContactName,
  ContactNumber,
  TextWrap,
} from './ContactsList.styled';

function ContactsList({ contacts }) {
  const dispatch = useDispatch();

  const handleClick = id => {
    dispatch(deleteContact(id));
  };

  return contacts.map(({ name, id, number }) => {
    return (
      <ContactList>
        <ContactItem key={id}>
          <TextWrap>
            <ContactName>{name}:</ContactName>
            <ContactNumber>{number}</ContactNumber>
          </TextWrap>

          <DeleteBtn
            type="DeleteBtn"
            onClick={() => {
              handleClick(id);
            }}
          >
            delete
          </DeleteBtn>
        </ContactItem>
      </ContactList>
    );
  });
}
export default ContactsList;
