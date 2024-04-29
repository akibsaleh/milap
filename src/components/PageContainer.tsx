import { Box } from '@mui/material';
import { styled } from '@mui/system';

const PageContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '1560px',
  margin: '0 auto',
  padding: '0 0 1.25rem'
});

export default PageContainer;
