import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/authOperation';
import { getAuth } from 'redux/selectors';
import { Avatar, Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { WelcomeDiv } from './WelcomeUser.styled';

export const WelcomeUser = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(getAuth);
  useEffect(() => {}, [user]);
  const logOutHandler = () => {
    dispatch(logOutUser());
  };
  return (
    <WelcomeDiv>
      <Avatar
        alt={user.name}
        src="https://mui.com/static/images/avatar/2.jpg"
      />
      <p>Welcome, {user.name}</p>
      <Button
        onClick={e => {
          logOutHandler();
        }}
        variant="contained"
        endIcon={<LogoutIcon />}
      />
    </WelcomeDiv>
  );
};
