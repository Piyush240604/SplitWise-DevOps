import { Link as RouterLink } from 'react-router-dom';

// @mui
import { styled } from '@mui/material/styles';
import { Card, Link, Container, Typography, Stack, Box } from '@mui/material';

import useResponsive from '../../theme/hooks/useResponsive';
import Logo from '../Logo';
import LoginForm from './LoginForm';

import configData from '../../config.json';

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  minHeight: '100vh',
  overflow: 'hidden',
  backgroundColor: 'theme.palette.background.default',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const BackgroundImage = styled('div')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '1000px', // Increase to make the image larger
  height: '700px',
  backgroundImage: `url('/static/auth_page_image.jpg')`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  zIndex: 1,
  borderRadius: '16px',
  filter: 'brightness(0.75)', // Optional: dim it a bit
});

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    padding: theme.spacing(7, 5, 0, 7),
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  width: '100%',
  zIndex: 2,
  position: 'relative',
  margin: 'auto',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 3),
}));

export default function Login() {
  const smUp = useResponsive('up', 'sm');

  const user = JSON.parse(localStorage.getItem('profile'));
  if (user && user.accessToken) {
    window.location.href = configData.DASHBOARD_URL;
  }

  return (
    <RootStyle>
      <BackgroundImage />

      <HeaderStyle>
        <Box />
        {smUp && (
          <Typography variant="h5" sx={{ mt: { md: -2 } }}>
            Don’t have an account?{' '}
            <Link variant="h5" component={RouterLink} to="/register">
              Get started
            </Link>
          </Typography>
        )}
      </HeaderStyle>


      <Container maxWidth="sm">
        <ContentStyle>
          <Typography variant="h2" gutterBottom sx={{ color: 'white' }}>
            Sign in
          </Typography>

          <Typography sx={{ color: 'white', mb: 5, fontSize: '23px', }}>
            Enter your details below.
          </Typography>

          <LoginForm />

          {!smUp && (
            <Typography variant="body2" align="center" sx={{ mt: 3, color: 'white', }}>
              Don’t have an account?{' '}
              <Link variant="subtitle2" component={RouterLink} to="/register">
                Get started
              </Link>
            </Typography>
          )}
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
