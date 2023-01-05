import { AuthNav } from 'components/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.navigation}>
      <div className={css.navigation__wrapper}>
        <NavLink className={css.navigation__link} to="/">Home</NavLink>
        {isLoggedIn && (
          <NavLink className={css.navigation__link} to="/contacts">Contacts</NavLink>
        )}
      </div>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </nav>
  );
};
