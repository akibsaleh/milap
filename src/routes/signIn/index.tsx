import SignInForm from '@/components/Forms/SignInForm';
import { Box, Paper, Typography } from '@mui/material';

const SignIn = () => {
    return (
        <Box width='100%' height='100%' display='flex' flexGrow='1' justifyContent='center' alignItems='center' gap='1rem' padding='1rem 2rem' minHeight='100%' >
            <Box width='50%' height='100%' display='flex' justifyContent='center' alignItems='center'>
                <Paper elevation={2} sx={{
                    maxWidth: '400px',
                    width: '100%',
                    padding: '2rem 0 0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Typography variant='h2'>Glad to have you here.</Typography>
                    <Typography variant='body1'>Welcome back! Enter your details to continue</Typography>
                    <SignInForm />
                </Paper>
            </Box>
            <Box width='50%' height='100%'>
                <Box component='img' height='100%' width='100%' borderRadius='1rem' sx={{objectFit: 'cover'}} src='https://images.unsplash.com/photo-1553369728-15ec6971afaf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></Box>
            </Box>
        </Box>
    );
};

export default SignIn;