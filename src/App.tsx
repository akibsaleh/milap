// import './App.css';

import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { authService } from './appwrite/auth';
import { logOut, login } from './store/features/authSlice';
// import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { themeSettings } from './theme';
import { Box, CssBaseline } from '@mui/material';
import { BrowserRouter, Outlet } from 'react-router-dom';

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  const [loading, setLoading] = React.useState<boolean>(true);
  const dispatch = useDispatch();

  React.useEffect(() => {
    authService
      .getCurrentUSer()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logOut());
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  // return !loading ? (
  //   <div className="min-h-screen h-full flex flex-col items-center justify-between">
  //     <Header />
  //     <main>Main</main>
  //     <Footer />
  //   </div>
  // ) : (
  //   <p>No User</p>
  // );
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box
            width="100%"
            height="100%"
            padding="0rem 2rem">
            {loading ? <Outlet /> : <p>Loading</p>}
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
