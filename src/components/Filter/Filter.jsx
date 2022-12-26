import style from './ContactsFilter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/actions';

export const Filter = () => {
    
  const dispatch = useDispatch();

  const onChange = e => {
    const value = e.target.value.toLowerCase();

    dispatch(setFilter(value));
  };

  return (
    <label>
      Find contacts by name
      <input className={style.filterInput} type="name" onChange={onChange} />
    </label>
  );
};
