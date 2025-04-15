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
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const BackgroundImageContainer = styled('div')({
  position: 'relative',
  width: '1400px', // control image size
  height: '900px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start', // move card to the start (left)
  backgroundImage: `url('/static/auth_page_image.jpg')`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  borderRadius: '16px',
  zIndex: 1,
  boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
  overflow: 'hidden',
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

const ContentStyle = styled(Card)(({ theme }) => ({
  width: '420px',
  marginLeft: theme.spacing(4), // spacing from the left inside image
  padding: theme.spacing(5),
  zIndex: 2,
  backgroundColor: 'transparent',
  color: 'white',
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[8],
}));

export default function Login() {
  const smUp = useResponsive('up', 'sm');

  const user = JSON.parse(localStorage.getItem('profile'));
  if (user && user.accessToken) {
    window.location.href = configData.DASHBOARD_URL;
  }

  return (
    <RootStyle>
      <HeaderStyle>
        <Box />
        {smUp && (
          <Typography variant="body2" sx={{ mt: { md: -2 }, color: 'white' }}>
            Don’t have an account?{' '}
            <Link variant="subtitle2" component={RouterLink} to="/register" sx={{ color: 'cyan' }}>
              Get started
            </Link>
          </Typography>
        )}
      </HeaderStyle>

      <BackgroundImageContainer>
        <ContentStyle>
          <Typography variant="h4" gutterBottom>
            Sign in
          </Typography>

          <Typography sx={{ color: 'white', mb: 5 }}>
            Enter your details below.
          </Typography>

          <LoginForm />

          {!smUp && (
            <Typography variant="body2" align="center" sx={{ mt: 3, color: 'white' }}>
              Don’t have an account?{' '}
              <Link variant="subtitle2" component={RouterLink} to="/register" sx={{ color: 'cyan' }}>
                Get started
              </Link>
            </Typography>
          )}
        </ContentStyle>
      </BackgroundImageContainer>
    </RootStyle>
  );
}
