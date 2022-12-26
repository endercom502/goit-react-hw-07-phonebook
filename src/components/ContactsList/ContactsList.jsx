import PropTypes from 'prop-types';
import style from './ContactsList.module.css';
import { getFilterValue, getContacts } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/actions';

export const ContactList = () => {
  
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );

  const toDelete = idToDelete => {
    return dispatch(deleteContact(idToDelete));
  };

  return (
    <div>
      {filteredContacts.length > 0 ? (
        <ul className={style.contactsList}>
          
          {filteredContacts.map(contact => {
            
            return (
              <li className={style.contactsItem} key={contact.id}>
                <span>{`${contact.name}: ${contact.number}`}</span>
                <button
                  type="button"
                  className={style.contactBtn}
                  onClick={() => toDelete(contact.id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <div>There's no results</div>
      )}
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};