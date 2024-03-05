import React from 'react';


import Grid from '@mui/material/Grid';

import SearchCard from '../components/SearchCard';

import Box from '@mui/material/Box';
import Orders from '../components/orders';
import RightBar from './RightBar';

function MainPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
        <Grid item xs={4} md={4}>
          <SearchCard />
          <Orders/>
        </Grid>
      
      </Grid>

    </Box>
  );
}

export default MainPage;
