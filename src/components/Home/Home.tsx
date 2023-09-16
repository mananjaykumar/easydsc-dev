import React, { useState, useEffect } from 'react';
import { Button, Stack, CircularProgress, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Typed from 'react-typed';
import * as routes from '../../routes/constants';
import axios from 'axios';
import toast from 'react-hot-toast';

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/check`)
      .then(() => {
        toast.success('Backend Connection Established!');
        setLoading(false);
      })
      .catch(() => toast.error('Backend Connection Failed! Please try after sometime.'));
  }, []);

  if (loading) {
    return (
      <Stack
        sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <CircularProgress />
        <Typography fontSize={16}>Please Wait for the Backend Connection...</Typography>
      </Stack>
    );
  }
  return (
    <Stack
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
      }}
    >
      <Stack
        sx={{
          margin: '0 auto',
        }}
      >
        <Typed // Typed component from "react-typed"
          className='text-white text-2xl'
          strings={['Welcome to Unique Services Company.']}
          typeSpeed={100}
          loop={true}
          backSpeed={50}
        />
      </Stack>
      <Stack>
        <Typography>
          Feel free to checkout my another application: https://restaurant-ui-five.vercel.app/
        </Typography>
      </Stack>
      <Stack
        sx={{
          margin: '0 auto',
        }}
      >
        <Button
          variant='contained'
          sx={{
            borderRadius: '20px',
          }}
          onClick={() => navigate(routes.DASHBOARD)}
        >
          Get Started
        </Button>
      </Stack>
    </Stack>
  );
};

export default Home;
