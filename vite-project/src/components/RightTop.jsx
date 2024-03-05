import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from '@mui/material/Button'
import DirectionsBoatFilledIcon from "@mui/icons-material/DirectionsBoatFilled";
import Link from '@mui/material/Link'
function RightTop() {
  return (
    <div>

        <Card  >
            <CardContent>

              
                <Grid container spacing={2} style={{ flexWrap: 'wrap' }}>
  <Grid item xs={8} md={4}>
    
  <Chip
                  label="RT"
                  style={{
                    background: "green",
                    color: "white",
                    borderRadius: "100%",
                    marginLeft: "10px",
          
                    height: "35px",
                  }}
                />

<Typography variant="h6" component="h4"  color="black" ml={2}>
                  4900-43433
                </Typography>
                <Typography variant="h6" component="h4" color="black"  ml={2}>
                HOTEL/TECH WORK SQUAD OFF
              </Typography>
                

    </Grid>


    <Grid item xs={4} md={6} >
    <Button
                variant="contained"
                startIcon={<DirectionsBoatFilledIcon />}
                style={{
                   marginLeft:'750px',
                  backgroundColor: "#33eaff",
                  color: "#2a3eb1",
                  borderRadius: "10px",
                }}
              >
                Lorem ipsum
              </Button>
   
    </Grid>
   
     
        
    

    
                </Grid>

                <Grid item xs={12} md={12}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '20px' }}>
                      <Typography variant="body1" style={{ color:'grey' }} >
                        Data Required
                      </Typography>
                      <Typography variant="body1" style={{ color:'grey' }} ml={3}>
                       Type
                      </Typography>
                      <Typography variant="body1"  style={{color:'grey'}} ml={3}>
                       Account Code
                      </Typography>
                    </Box>
                  </Grid>
                  <br />
                  
                  <Grid container spacing={1} style={{ flexWrap: 'wrap', width:'100%' }}>
                  <Grid item xs={8} md={4}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                      <Typography variant="body1" style={{ color:'black',fontWeight:'bold' }} >
                       10 Jul 2018
                      </Typography>
                      <Typography variant="body1" style={{ color:'black', fontWeight:'bold' }} ml={3}>
                     Services
                      </Typography>
                      <Typography variant="body1"  style={{color:'black',fontWeight:'bold'}} ml={3}>
                      5839380-HM-PAX ACCOMMODATION (LABOUR)
                      </Typography>
                      </Box>
                      </Grid>

                      <Grid item xs={4} md={6} >
                      
                    <Box  style={{display:"flex",  marginLeft:'500px' , justifyContent:'space-around'}}  >
                    <Link href="#">Link</Link>
                    <Link href="#">Link</Link>
                    </Box>
                      </Grid>
                    
                    
                  
                 </Grid>
             
            </CardContent>

       
        </Card>
    </div>
  );
}

export default RightTop;
