import { FormLabel } from 'components/StyledComponents/SC';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const filterHandler = e => {
    const filterValue = e.currentTarget.value;
    dispatch(setFilter(filterValue));
  };

  return (
    <FormLabel>
      Find contacts by name
      <input type="text" onChange={filterHandler} />
    </FormLabel>
  );
};

export default Filter;
