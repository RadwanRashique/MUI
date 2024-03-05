import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsBoatFilledIcon from "@mui/icons-material/DirectionsBoatFilled";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TuneIcon from "@mui/icons-material/Tune";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Chip from '@mui/material/Chip'
function SearchCard() {
  return (
    <>
      <Card style={{ width: "100%", height: "150px", backgroundColor:"#f9fbe7" }} sx={{ padding: "20px" }}  >
        <cardContent>
          <Box style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="contained"
              size="small"
              color="inherit"
              startIcon={<DirectionsBoatFilledIcon />}
              sx={{ borderRadius: "20px" }}
              endIcon={<SearchIcon />}
              disableRipple
            >
              My Responsibilities
            </Button>
            <Button
              variant="contained"
              style={{width:'200px',padding:"10px",display:'flex',justifyContent:'space-between'}}
              color="inherit"
              sx={{ borderRadius: "20px" }}
              endIcon={<KeyboardArrowDownIcon  />}
            >
              Po
            </Button>
            <Chip
     
      avatar={<TuneIcon style={{color:'green'}} />}
      style={{ backgroundColor: 'black', color: '#76ff03', width:'50px',height:'50px',borderRadius:'60px' }}
     
    />
              
           
          </Box>
          
          <Box style={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              id="standard-basic"
              label="Enter copy id"
              variant="standard"
              sx={{ marginRight: 2 }}
            />
            <TextField
              id="standard-basic"
              label="Enter order id"
              variant="standard"
              
            />
          </Box>

          <Grid
            containerSpacing={2}
            display="flex"
            justifyContent="space-between"
          >
            <Grid item xs={6} sx={{marginRight:'90px'}}>
              <Button size="small" variant="text" style={{ color: "black", fontWeight: 'bold', borderBottom: '2px solid #000000' }} endIcon={<KeyboardArrowDownIcon />}>
                Sort
              </Button>
              <Button size="small" variant="text" style={{ color: "black", fontWeight: 'bold', borderBottom: '2px solid #000000',marginLeft:'20px'   }} endIcon={<KeyboardArrowDownIcon />}>
                Group By
              </Button>

              
              
            </Grid>
            <Grid item xs={6}  >
            <Button size="small" variant="text" style={{ color: "black",   fontWeight: 'bold', borderBottom: '2px solid #000000'  }}>
              Clear
            </Button>
            <Button size="small" variant="text" style={{ color: "black", fontWeight: 'bold' , borderBottom: '2px solid #000000',marginLeft:'20px'  }}>
              Search
            </Button>
            </Grid>
          </Grid>
        </cardContent>
      </Card>
    </>
  );
}

export default SearchCard;
