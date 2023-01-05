import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';
import css from './UserMenu.module.css';
import { TbLogout } from 'react-icons/tb';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <p className={css.user__email}>{user.email}</p>
      <button className={css.logout__btn} type="button" onClick={() => dispatch(logout())}>
        <TbLogout size="2em" color="#a7bcf5" />
      </button>
    </div>
  );
};
