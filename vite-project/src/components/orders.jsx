import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Height, Margin, Padding } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import DirectionsBoatFilledIcon from "@mui/icons-material/DirectionsBoatFilled";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import PushPinIcon from "@mui/icons-material/PushPin";
import AnchorIcon from "@mui/icons-material/Anchor";
function Orders() {
  return (
    <>
      <Box padding={2} display="flex" width="100%">
        <Typography variant="h6">ORDERS</Typography>
        <Chip
          label="8"
          style={{ color: "dark", borderRadius: "90%", marginLeft: "10px" }}
        />
      </Box>

<Box >

<Card
        style={{ width: "100%", height: "100px", backgroundColor: "#e3f2fd" }}
        sx={{ padding: "20px" }}
      >
        <cardContent>
          <Grid
            containerSpacing={2}
            display="flex"
            justifyContent="space-between"

          >
            <Grid item xs={8}>
              <Box>
                <Typography variant="h6" component="h4" color="green">
                  4900-43433
                </Typography>
              </Box>

              <Typography variant="h6" component="h4">
                HOTEL/TECH WORK SQUAD OFF
              </Typography>
              <Button
                variant="contained"
                startIcon={<DirectionsBoatFilledIcon />}
                style={{
                  backgroundColor: "#33eaff",
                  color: "#2a3eb1",
                  borderRadius: "10px",
                }}
              >
                Lorem ipsum
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Box style={{ display: "flex", alignItems:'center' ,justifyContent:"space-around", marginLeft:'10px'}}>
                <AnchorIcon/>
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
              </Box>
              <Typography
                variant="h6"
                component="h4"
                sx={{ textAlign: "right" }}
                color='grey'
              >
                consumables
              </Typography>
              <Typography
                variant="h6"
                component="h4"
                sx={{ textAlign: "right" }}
                color='grey'
              >
                25 Feb 2024
              </Typography>
            </Grid>
          </Grid>
        </cardContent>
      </Card>

      {/* card 2  */}
      <Card
        style={{
          width: "100%",
          height: "100px",
          backgroundColor: "#e3f2fd",
          marginTop: "20px",
        }}
        sx={{ padding: "20px" }}
      >
        <cardContent>
          <Grid
            containerSpacing={2}
            display="flex"
            justifyContent="space-between"
          >
            <Grid item xs={8}>
              <Box>
                <Typography variant="h6" component="h4"  color="green">
                  4900-43433
                </Typography>
              </Box>

              <Typography variant="h6" component="h4">
                HOTEL/TECH WORK SQUAD OFF
              </Typography>
              <Button
                variant="contained"
                startIcon={<DirectionsBoatFilledIcon />}
                style={{
                  backgroundColor: "#33eaff",
                  color: "#2a3eb1",
                  borderRadius: "10px",
                }}
              >
                Lorem ipsum
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Box style={{ display: 'flex', alignItems: 'center', justifyContent:"space-around", marginLeft:'10px' }}>
                <PushPinIcon />
                <AnchorIcon/>
                <Chip
                  label="RT"
                  style={{
                    background: "#ff9800",
                    color: "white",
                    borderRadius: "100%",
                    marginLeft: "10px",
          
                    height: "35px",
                  }}
                />
              </Box>
              <Typography
                variant="h6"
                component="h4"
                sx={{ textAlign: "right" }}
                color='grey'
              >
                Spares
              </Typography>
              <Typography
                variant="h6"
                component="h4"
                sx={{ textAlign: "right" }}
                color='grey'
              >
                4 sep 2020
              </Typography>
            </Grid>
          </Grid>
        </cardContent>
      </Card>





       {/* card 3  */}
       <Card
        style={{
          width: "100%",
          height: "100px",
          backgroundColor: "#e3f2fd",
          marginTop: "20px",
        }}
        sx={{ padding: "20px" }}
      >
        <cardContent>
          <Grid
            containerSpacing={2}
            display="flex"
            justifyContent="space-between"
          >
            <Grid item xs={8}>
              <Box>
                <Typography variant="h6" component="h4"  color="green">
                  4900-43433
                </Typography>
              </Box>

              <Typography variant="h6" component="h4">
                HOTEL/TECH WORK SQUAD OFF
              </Typography>
              <Button
                variant="contained"
                startIcon={<DirectionsBoatFilledIcon />}
                style={{
                  backgroundColor: "#33eaff",
                  color: "#2a3eb1",
                  borderRadius: "10px",
                }}
              >
                Lorem ipsum
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Box style={{ display: 'flex', alignItems: 'center', justifyContent:"space-around", marginLeft:'10px' }}>
                <PushPinIcon />
               
                <Chip
                  label="RT"
                  style={{
                    background: "#f4511e",
                    color: "white",
                    borderRadius: "100%",
                    marginLeft: "10px",
          
                    height: "35px",
                  }}
                />
              </Box>
              <Typography
                variant="h6"
                component="h4"
                sx={{ textAlign: "right" }}
                color='grey'
              >
                Services
              </Typography>
              <Typography
                variant="h6"
                component="h4"
                sx={{ textAlign: "right" }}
                color='grey'
              >
                12 Dec 2017
              </Typography>
            </Grid>
          </Grid>
        </cardContent>
      </Card>



       {/* card 4  */}
       <Card
        style={{
          width: "100%",
          height: "100px",
          backgroundColor: "#e3f2fd",
          marginTop: "20px",
        }}
        sx={{ padding: "20px" }}
      >
        <cardContent>
          <Grid
            containerSpacing={2}
            display="flex"
            justifyContent="space-between"
          >
            <Grid item xs={8}>
              <Box>
                <Typography variant="h6" component="h4"  color="green">
                  4900-43433
                </Typography>
              </Box>

              <Typography variant="h6" component="h4">
                HOTEL/TECH WORK SQUAD OFF
              </Typography>
              <Button
                variant="contained"
                startIcon={<DirectionsBoatFilledIcon />}
                style={{
                  backgroundColor: "#33eaff",
                  color: "#2a3eb1",
                  borderRadius: "10px",
                }}
              >
                Lorem ipsum
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Box style={{ display: 'flex', alignItems: 'center', justifyContent:"space-around", marginLeft:'10px' }}>
               
                <AnchorIcon/>
                <Chip
                  label="RT"
                  style={{
                    background: "#f4511e",

                    

                    color: "white",
                    borderRadius: "100%",
                    marginLeft: "10px",
          
                    height: "35px",
                  }}
                />
              </Box>
              <Typography
                variant="h6"
                component="h4"
                sx={{ textAlign: "right" }}
                color='grey'
              >
                Consumables
              </Typography>
              <Typography
                variant="h6"
                component="h4"
                sx={{ textAlign: "right" }}
                color='grey'
              >
                03 Aug 2019
              </Typography>
            </Grid>
          </Grid>
        </cardContent>
      </Card>

       {/* card 5  */}
       <Card
        style={{
          width: "100%",
          height: "100px",
          backgroundColor: "#e3f2fd",
          marginTop: "20px",
        }}
        sx={{ padding: "20px" }}
      >
        <cardContent>
          <Grid
            containerSpacing={2}
            display="flex"
            justifyContent="space-between"
          >
            <Grid item xs={8}>
              <Box>
                <Typography variant="h6" component="h4"  color="green">
                  4900-43433
                </Typography>
              </Box>

              <Typography variant="h6" component="h4">
                HOTEL/TECH WORK SQUAD OFF
              </Typography>
              <Button
                variant="contained"
                startIcon={<DirectionsBoatFilledIcon />}
                style={{
                  backgroundColor: "#33eaff",
                  color: "#2a3eb1",
                  borderRadius: "10px",
                }}
              >
                Lorem ipsum
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Box style={{ display: 'flex', alignItems: 'center', justifyContent:"space-around", marginLeft:'10px' }}>
                
                <Chip
                  label="RT"
                  style={{
                    background: "green",
                    color: "white",
                    borderRadius: "100%",
                    marginLeft: "90px",
          
                    height: "35px",
                  }}
                />
              </Box>
              <Typography
                variant="h6"
                component="h4"
                sx={{ textAlign: "right" }}
                color='grey'
              >
                Spares
              </Typography>
              <Typography
                variant="h6"
                component="h4"
                sx={{ textAlign: "right" }}
                color='grey'
              >
                11 Jul 2023
              </Typography>
            </Grid>
          </Grid>
        </cardContent>
      </Card>
</Box>
     
    </>
  );
}

export default Orders;
