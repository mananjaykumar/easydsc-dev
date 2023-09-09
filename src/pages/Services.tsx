import React from 'react';
import { Stack, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

const Services = () => {
  const location = useLocation();
  return (
    <Stack textAlign='center' p={2}>
      <Typography fontSize={18}>welcome to {location.pathname.split('/')[2]}</Typography>
    </Stack>
  );
};

export default Services;
