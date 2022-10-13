import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import solution from 'assets/solutions.jpg';
import styled from 'styled-components';
import { getAuth } from 'redux/auth/selectorsAuth';

const Nav = styled.nav`
  display: flex;
  height: 10vh;
  gap: 20px;
  margin: 0 auto;
  padding-left: 100px;
    padding-right: 100px;
  justify-content: center;
  align-items: center;
  background-image: url('${solution}');
      background-repeat: no-repeat;
    background-size: cover;
`;

const Link = styled(NavLink)`
  display: block;
  height: max-content;
  color: white;
  background-color: #364448;
  border-radius: 15px;
  padding: 10px;
  text-decoration: none;
  font-size: 36px;
  font-weight: 700;
  &.active {
    background-color: pink;
  }
`;
export const Navigation = () => {
  const { isAuth } = useSelector(getAuth);

  return (
    <Nav>
      <Link to="/" end>
        Home
      </Link>
      {isAuth && <Link to="/phonebook">Phone book</Link>}
      <div style={{ display: 'flex', gap: '20px', marginLeft: 'auto' }}>
        <Link to="/signIn">Sign In</Link>
        <Link to="/signUp">Sign Up</Link>
      </div>
    </Nav>
  );
};
