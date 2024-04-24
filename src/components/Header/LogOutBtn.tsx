import React from 'react';
import { useDispatch } from 'react-redux';
import { authService } from '../../appwrite/auth';
import { logOut } from '../../store/features/authSlice';
import { Button } from '../ui/button';

const LogOutBtn = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    authService.logout().then((res) => {
      dispatch(logOut());
      console.log(res);
    });
  };
  return (
    <Button
      onClick={handleLogout}
      variant={'outline'}>
      Sign Out
    </Button>
  );
};

export default LogOutBtn;
