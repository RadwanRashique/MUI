import React from 'react';


import Grid from '@mui/material/Grid';
import RightBar from '../components/RightBar';
import SearchCard from '../components/SearchCard';

import Box from '@mui/material/Box';
import Orders from '../components/orders';

function MainPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <SearchCard />
          <Orders/>
        </Grid>
        <Grid item xs={12} md={8}>
       <RightBar/>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainPage;
