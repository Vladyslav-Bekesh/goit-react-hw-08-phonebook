import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';
import ContactForm from 'components/ContactForm';
import Contacts from 'components/Contacts';

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
        <h1>Phonebook</h1>
        <br />
        <ContactForm />
        <br />
        <Contacts />
      </>
    </>
  );
}

