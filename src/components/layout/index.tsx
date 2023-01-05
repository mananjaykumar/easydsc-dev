/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react';
// import { Link } from 'react-router-dom';

// import { Stack, Typography } from '@mui/material';
// import theme from '../../theme';
// import * as routes from '../../routes/constants';

// export const Layout = ({ children }: any) => {
//   return (
//     <Stack
//       direction='column'
//       //   sx={{
//       //     height: '100vh',
//       //     width: '100vw',
//       //     overflowY: 'hidden'
//       //     overflowX: 'auto',
//       //   }}
//     >
//       <Stack
//         direction='row'
//         sx={{
//           //   backgroundColor: theme.palette.primary.main,
//           backgroundColor: '#f1f1f1',
//           padding: '20px',
//           color: theme.palette.text.primary,
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           fontSize: '16px',
//         }}
//       >
//         <Stack>
//           <Link
//             to={routes.ROOT}
//             style={{
//               color: theme.palette.text.primary,
//               textDecoration: 'none',
//             }}
//           >
//             <Typography
//               sx={{
//                 fontSize: '16px',
//                 '&:hover': {
//                   color: theme.palette.primary.main,
//                 },
//               }}
//             >
//               Udyam Services
//             </Typography>
//           </Link>
//         </Stack>
//         <Stack direction='row' spacing={2}>
//           <Link
//             to={routes.ABOUT_US}
//             style={{
//               color: theme.palette.text.primary,
//               textDecoration: 'none',
//             }}
//           >
//             <Typography
//               sx={{
//                 fontSize: '16px',
//                 '&:hover': {
//                   color: theme.palette.primary.main,
//                 },
//               }}
//             >
//               About Us
//             </Typography>
//           </Link>
//           <Link
//             to={routes.CONTACT_US}
//             style={{
//               color: theme.palette.text.primary,
//               textDecoration: 'none',
//             }}
//           >
//             <Typography
//               sx={{
//                 fontSize: '16px',
//                 '&:hover': {
//                   color: theme.palette.primary.main,
//                 },
//               }}
//             >
//               Contact Us
//             </Typography>
//           </Link>
//           <Link
//             to={routes.LOGIN}
//             style={{
//               color: theme.palette.text.primary,
//               textDecoration: 'none',
//             }}
//           >
//             <Typography
//               sx={{
//                 fontSize: '16px',
//                 '&:hover': {
//                   color: theme.palette.primary.main,
//                 },
//               }}
//             >
//               Register/Login
//             </Typography>
//           </Link>
//         </Stack>
//       </Stack>
//       <Stack flexGrow={1}>{children}</Stack>
//     </Stack>
//   );
// };
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  MenuItem,
  Menu,
  Stack,
  Avatar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import theme from '../../theme';
import * as routes from '../../routes/constants';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export const Layout = ({ children }: any) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const navigate = useNavigate();

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size='large' aria-label='show 4 new mails' color='inherit'>
          <Badge badgeContent={4} color='error'>
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton size='large' aria-label='show 17 new notifications' color='inherit'>
          <Badge badgeContent={17} color='error'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size='large'
          aria-label='account of current user'
          aria-controls='primary-search-account-menu'
          aria-haspopup='true'
          color='inherit'
        >
          <Avatar sx={{ backgroundColor: theme.palette.secondary.main }}>M</Avatar>
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Stack>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='open drawer'
              sx={{ mr: 2 }}
              onClick={() => {
                navigate(routes.ROOT);
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant='h6'
              noWrap
              component='div'
              sx={{ display: { xs: 'none', sm: 'block', cursor: 'pointer' } }}
              onClick={() => {
                navigate(routes.ROOT);
              }}
            >
              Udayam Services
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder='Search…' inputProps={{ 'aria-label': 'search' }} />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton
                size='large'
                aria-label='show 4 new mails'
                color='inherit'
                onClick={() => {
                  navigate(routes.MESSAGES);
                }}
              >
                <Badge badgeContent={4} color='error'>
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                size='large'
                aria-label='show 17 new notifications'
                color='inherit'
                onClick={() => {
                  navigate(routes.NOTIFICATIONS);
                }}
              >
                <Badge badgeContent={17} color='error'>
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size='large'
                edge='end'
                aria-label='account of current user'
                aria-controls={menuId}
                aria-haspopup='true'
                onClick={handleProfileMenuOpen}
                color='inherit'
              >
                <Avatar sx={{ backgroundColor: theme.palette.secondary.main }}>M</Avatar>
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size='large'
                aria-label='show more'
                aria-controls={mobileMenuId}
                aria-haspopup='true'
                onClick={handleMobileMenuOpen}
                color='inherit'
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
      <Stack flexGrow={1}>{children}</Stack>
    </Stack>
  );
};
