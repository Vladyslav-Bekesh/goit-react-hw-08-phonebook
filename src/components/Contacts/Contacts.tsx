import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TContact } from '../../types/contacts';

import Title from '../Title/Title';
import ContactsList from '../ContactsList/ContactsList';
import Filter from '../Forms/FilterForm';

import * as selectors from '../../redux/selectors';
import { fetchContacts } from '../../redux/operations';

function Contacts() {
  const contacts = useSelector(selectors.selectContacts);
  const filter = useSelector(selectors.selectFilter);
  const error = useSelector(selectors.selectError);
  const isLoading = useSelector(selectors.selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts() as any);
  }, [dispatch]);

  const makeFilteredContacts = () => {
    return contacts.filter((contact: TContact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      {isLoading && <Title title={'Loading'} />}

      {contacts.length === 0 && !error && !isLoading && (
        <Title title="U haven't any friends" />
      )}
      {contacts.length !== 0 && <Filter />}

      {contacts.length !== 0 && filter === '' && (
        <ContactsList contacts={contacts} />
      )}

      {filter !== '' && makeFilteredContacts().length !== 0 && (
        <ContactsList contacts={makeFilteredContacts()} />
      )}

      {filter !== '' && makeFilteredContacts().length === 0 && (
        <Title title="No matches" />
      )}

      {error && <Title title={error} />}
    </>
  );
}

export default Contacts;
