// import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

export const AuthNav = () => {
  return (
    <div>
      <ul
        style={{
          display: 'flex',
          padding: '0',
          margin: '0',
          listStyle: 'none',
        }}
      >
        <li>
          <Nav.Item>
            <Nav.Link
              href="/goit-react-hw-08-phonebook/register"
              // eventKey="link-1"
            >
              Register
            </Nav.Link>
          </Nav.Item>
        </li>
        <li>
          <Nav.Item>
            <Nav.Link
              href="/goit-react-hw-08-phonebook/login"
              // eventKey="link-1"
            >
              Log In
            </Nav.Link>
          </Nav.Item>
        </li>
      </ul>
    </div>
  );
};
