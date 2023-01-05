/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Link } from 'react-router-dom';

import { Stack, Typography } from '@mui/material';
import theme from '../../theme';
import * as routes from '../../routes/constants';

export const Layout = ({ children }: any) => {
  return (
    <Stack
      direction='column'
      //   sx={{
      //     height: '100vh',
      //     width: '100vw',
      //     overflowY: 'hidden'
      //     overflowX: 'auto',
      //   }}
    >
      <Stack
        direction='row'
        sx={{
          //   backgroundColor: theme.palette.primary.main,
          backgroundColor: '#f1f1f1',
          padding: '20px',
          color: theme.palette.text.primary,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '16px',
        }}
      >
        <Stack>
          <Link
            to={routes.ROOT}
            style={{
              color: theme.palette.text.primary,
              textDecoration: 'none',
            }}
          >
            <Typography
              sx={{
                fontSize: '16px',
                '&:hover': {
                  color: theme.palette.primary.main,
                },
              }}
            >
              Udyam Services
            </Typography>
          </Link>
        </Stack>
        <Stack direction='row' spacing={2}>
          <Link
            to={routes.ABOUT_US}
            style={{
              color: theme.palette.text.primary,
              textDecoration: 'none',
            }}
          >
            <Typography
              sx={{
                fontSize: '16px',
                '&:hover': {
                  color: theme.palette.primary.main,
                },
              }}
            >
              About Us
            </Typography>
          </Link>
          <Link
            to={routes.CONTACT_US}
            style={{
              color: theme.palette.text.primary,
              textDecoration: 'none',
            }}
          >
            <Typography
              sx={{
                fontSize: '16px',
                '&:hover': {
                  color: theme.palette.primary.main,
                },
              }}
            >
              Contact Us
            </Typography>
          </Link>
          <Link
            to={routes.LOGIN}
            style={{
              color: theme.palette.text.primary,
              textDecoration: 'none',
            }}
          >
            <Typography
              sx={{
                fontSize: '16px',
                '&:hover': {
                  color: theme.palette.primary.main,
                },
              }}
            >
              Register/Login
            </Typography>
          </Link>
        </Stack>
      </Stack>
      <Stack flexGrow={1}>{children}</Stack>
    </Stack>
  );
};
