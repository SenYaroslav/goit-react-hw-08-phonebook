// import { AuthNav } from 'components/AuthNav/AuthNav';
// import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { Navigation } from 'components/Navigation/Navigation';
// import { NavLink } from 'react-router-dom';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log('isLoggedIn >>', isLoggedIn);

  return (
    <header
      style={{
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        // maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <Navigation />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </header>
  );
};
