// import { useSelector } from 'react-redux';
// import { getAuth } from 'redux/selectors';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  //   const { user, isLoading, isAuth, error, token } = useSelector(getAuth);

  return (
    <nav>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/signIn">Sign In</NavLink>
      <NavLink to="/signUp">Sign Up</NavLink>
    </nav>
  );
};
