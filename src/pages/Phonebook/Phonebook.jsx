import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';
import ContactForm from 'components/Forms/ContactForm';
import Contacts from 'components/Contacts/Contacts';
import { Title } from './Phonebook.styled';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <>{isLoading && 'Request in progress...'}</>

      <>
        <Title>Phonebook</Title>
        <br />
        <ContactForm />
        <br />
        <Contacts />
      </>
    </>
  );
}
