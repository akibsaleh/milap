import { Box, useTheme } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    text: string,
    url: string
}
const NavMenuItem = ( props: Props ) => {
    const [ selected, setSelected ] = React.useState('home');
    const { palette } = useTheme();
    return (
        <Box sx={{ '&:hover': { color: palette.primary[100] } }}>
          <Link
            to={props.url}
            onClick={() => setSelected('home')}
            style={{
              fontSize: '1.2rem',
              fontWeight: 'medium',
              color: selected === 'home' ? 'inherit' : palette.grey[700],
              textDecoration: 'inherit',
            }}>
            {props.text}
          </Link>
        </Box>
    );
};

export default NavMenuItem;