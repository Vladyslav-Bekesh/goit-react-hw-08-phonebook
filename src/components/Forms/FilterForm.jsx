import { useDispatch, useSelector } from 'react-redux';
import { handleFilterChange } from '../../redux/slicers/filterSlicer';

import * as selectors from '../../redux/selectors';

import { FormCss, FormLabelCss, FormInputCss } from './Forms.styled';
function Filter() {
  const contacts = useSelector(selectors.selectContacts);
  const filter = useSelector(selectors.selectFilter);

  const dispatch = useDispatch();

  const handleFilter = event => {
    dispatch(handleFilterChange(event.target.value));
  };

  return (
    <>
      {contacts.length > 0 && (
        <FormCss action="">
          <FormLabelCss>
            Enter name from contacts
            <FormInputCss
              type="text"
              name="filter"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={filter}
              onChange={handleFilter}
              required
            />
          </FormLabelCss>
        </FormCss>
      )}
    </>
  );
}

export default Filter;
