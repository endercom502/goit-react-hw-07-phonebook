import style from '../Filter/ContactsFilter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice.js';
import debounce from 'debounce';

export const Filter = () => {
    
  const dispatch = useDispatch();

  const onChange = debounce(e => {
  const value = e.target.value.toLowerCase();

  dispatch(setFilter(value));
    
  },1000);


  return (
    <label className={style.filterLabel}>
      Find contacts by name
      <input className={style.filterInput} type="name"   placeholder='Start typing...' onChange={onChange} />
    </label>
  );
};
