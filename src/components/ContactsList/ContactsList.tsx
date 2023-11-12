import React from 'react';
import { deleteContact } from '../../redux/operations';
import { useDispatch } from 'react-redux';
import { TContacts } from '../../types/contacts';
import {
  ContactList,
  ContactItem,
  DeleteBtn,
  ContactName,
  ContactNumber,
  TextWrap,
} from './ContactsList.styled';

type TProps = {
  contacts: TContacts;
};
type THandleClick = (id: string) => void;

function ContactsList({ contacts }: TProps): any {
  const dispatch = useDispatch();

  const handleClick: THandleClick = (id: string) => {
    dispatch(deleteContact(id) as any);
  };

  return (
    <ContactList>
      {contacts.map(({ name, id, number }) => {
        return (
          <ContactItem key={id}>
            <TextWrap>
              <ContactName>{name}:</ContactName>
              <ContactNumber>{number}</ContactNumber>
            </TextWrap>

            <DeleteBtn
              type="button"
              onClick={() => {
                handleClick(id);
              }}
            >
              delete
            </DeleteBtn>
          </ContactItem>
        );
      })}
    </ContactList>
  );
}
export default ContactsList;
