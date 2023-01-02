import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';
import css from './UserMenu.module.css';
import { TbLogout } from 'react-icons/tb';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div
      className={css.wrapper}
      style={{
        display: 'flex',
        alignItems: 'baseline',
        gap: '12px',
        color: '#0D6EeD',
      }}
    >
      <p>{user.email}</p>
      <button
        style={{
          background: 'none',
          border: 'none',
        }}
        type="button"
        onClick={() => dispatch(logout())}
      >
        <TbLogout size="2em" color="#0D6EeD" />
      </button>
    </div>
  );
};
