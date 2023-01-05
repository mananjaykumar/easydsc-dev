import React from 'react';
import { Grid, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Grid
      container
      sx={{
        height: '100px',
      }}
    >
      <Grid
        item
        sx={{
          paddingTop: '50px',
          margin: '0 auto 0 auto',
        }}
      >
        <Typography>Notifications</Typography>
      </Grid>
    </Grid>
  );
};
export default Contact;
