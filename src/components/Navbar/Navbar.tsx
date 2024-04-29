import {Box, Typography, useTheme } from '@mui/material';
import FlexBetween from '../FlexBetween';
import NavMenuItem from '../NavMenuItem';

type Props = object;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Navbar = (props: Props) => {
  const { palette } = useTheme();
  return (
    <Box width='100%' bgcolor={palette.grey[900]}>
      <FlexBetween
        mb={'0.25rem'}
        p="1rem 2rem" 
        maxWidth='1560px'
        width='100%'
        mx='auto'
        color={palette.grey[300]}>
        <FlexBetween gap="0.5rem">
          <img
            src="logo.webp"
            alt="Milap"
            width={32}
          />
          <Typography
            variant="h4"
            fontSize="24px"
            textTransform="uppercase"
            fontFamily="kanit"
            color={palette.grey[100]}
            letterSpacing="0.15rem">
            Milap
          </Typography>
        </FlexBetween>
        <FlexBetween gap="2rem">
          <NavMenuItem text='Home' url='/' />
          <NavMenuItem text='How It Works' url='/how-it-works' />
          <NavMenuItem text='About' url='/about' />
        </FlexBetween>
      </FlexBetween>
    </Box>
  );
};

export default Navbar;
