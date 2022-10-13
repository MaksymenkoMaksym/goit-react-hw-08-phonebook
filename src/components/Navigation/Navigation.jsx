// import { useSelector } from 'react-redux';
// import { getAuth } from 'redux/selectors';
import { NavLink } from 'react-router-dom';
import solution from 'assets/solutions.jpg';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  margin: 0 auto;
  justify-content: center;
  padding: 20px;
  background-image: url('${solution}');
      background-repeat: no-repeat;
    background-size: cover;
`;

const Link = styled(NavLink)`
  display: block;
  color: white;
  background-color: #364448;
  border-radius: 15px;
  padding: 10px;
  text-decoration: none;
  font-size: 36px;
  font-weight: 700;
`;
export const Navigation = () => {
  //   const { user, isLoading, isAuth, error, token } = useSelector(getAuth);

  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/phonebook">Phone book</Link>
      <Link to="/signIn">Sign In</Link>
      <Link to="/signUp">Sign Up</Link>
    </Nav>
  );
};
