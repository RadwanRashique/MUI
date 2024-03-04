import React from 'react'
import Typography from '@mui/material/Typography'
import Box from "@mui/material/Box";
import { Height, Margin, Padding } from '@mui/icons-material';
import Button  from '@mui/material/Button'
import Chip  from '@mui/material/Chip'
import Card from '@mui/material/Card'
import DirectionsBoatFilledIcon from "@mui/icons-material/DirectionsBoatFilled";
import CardContent from "@mui/material/CardContent";

function Orders() {
  return (
   <>
 
   <Box padding={2} display='flex'  width='90%' >
   <Typography variant="h6" >
  ORDERS
</Typography>
<Chip label="8" style={{color:'dark',borderRadius:'90%', marginLeft:'10px'}} />
   </Box>
   <Card  style={{ width: "90%", height: "100px", backgroundColor:'#e3f2fd' }} sx={{padding:'20px'}}>
   <cardContent>
    <Box>
    <Typography variant="h6" component="h2">
 4900-43433
</Typography>
    </Box>
 
<Typography variant="h6" component="h2">
 HOTEL/TECH WORK SQUAD OFF
</Typography>
<Button  variant="contained" startIcon={<DirectionsBoatFilledIcon/>}  style={{ backgroundColor: '#33eaff', color: '#2a3eb1' }}>
Lorem ipsum
</Button>
    </cardContent>
   
   </Card>
   <Card  style={{ width: "90%", height: "100px", backgroundColor:'#e3f2fd' , marginTop: '20px' }} sx={{padding:'20px'}}>
   <cardContent>
   <Typography variant="h6" component="h2">
 4900-43433
</Typography>
<Typography variant="h6" component="h2">
 HOTEL/TECH WORK SQUAD OFF
</Typography>
<Button  variant="contained" startIcon={<DirectionsBoatFilledIcon/>}  style={{ backgroundColor: '#33eaff', color: '#2a3eb1' }}>
Lorem ipsum
</Button>
    </cardContent>
   
   </Card>

   
   </>
  )
}

export default Orders