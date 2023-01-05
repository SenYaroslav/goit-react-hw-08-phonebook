import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div>
      <ul className={css.authNav__list} >
        <li>
          <NavLink className={css.authNav__link} to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink className={css.authNav__link} to="/login">Log In</NavLink>
        </li>
      </ul>
    </div>
  );
};
