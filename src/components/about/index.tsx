import React from 'react';
import { Grid, Typography } from '@mui/material';

const About = () => {
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
        <Typography>About Us.</Typography>
      </Grid>
    </Grid>
  );
};
export default About;
