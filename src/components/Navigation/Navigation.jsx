import { AuthNav } from 'components/AuthNav/AuthNav';
import Nav from 'react-bootstrap/Nav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Nav
      variant="tabs"
      defaultActiveKey="/"
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        maxWidth: '1200px',
        height: '80px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'flex',
        }}
      >
        <Nav.Item>
          <Nav.Link href="/goit-react-hw-08-phonebook/">Home</Nav.Link>
        </Nav.Item>
        {isLoggedIn && (
          <Nav.Item>
            <Nav.Link href="/goit-react-hw-08-phonebook/contacts">
              Contacts
            </Nav.Link>
          </Nav.Item>
        )}
      </div>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Nav>
  );
};
