import { UserEmail } from 'components/StyledComponents/SC';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { email } = useAuth().user;

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <UserEmail>{email}</UserEmail>
      <button type="button" onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
