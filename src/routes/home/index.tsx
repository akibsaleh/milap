import PageContainer from '@/components/PageContainer';
import { Typography, useTheme } from '@mui/material';
const Home = () => {
    const { palette } = useTheme();
    return (
        <PageContainer>
            <Typography variant='body1' color={palette.grey[100]} >
                This is Home
            </Typography>
        </PageContainer>
    );
};

export default Home;