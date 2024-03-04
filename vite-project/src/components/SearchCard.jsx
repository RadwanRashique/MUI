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

function SearchCard() {
  return (
    <>
      <Card style={{ width: "25%", height: "150px" }} sx={{ padding: "20px" }}>
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
              color="inherit"
              sx={{ borderRadius: "20px" }}
              endIcon={<KeyboardArrowDownIcon />}
            >
              PO
            </Button>
            <Button
              variant="contained"
              color="inherit"
              sx={{ borderRadius: "50%" }}
              disableRipple
            >
              <TuneIcon />
            </Button>
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
            <Grid item xs={6}>
              <Button variant="text" style={{ color: "black" }} endIcon={<KeyboardArrowDownIcon />}>
                Sort
              </Button>
              <Button  
                style={{ color: "black" }}
                variant="text"
                sx={{ borderBottom: "0.5px solid black" }}

                endIcon={<KeyboardArrowDownIcon />}
              >
                Group By
              </Button>
              
            </Grid>

            <Button variant="text" style={{ color: "black" }}>
              Clear
            </Button>
            <Button variant="text" style={{ color: "black" }}>
              Search
            </Button>
          </Grid>
        </cardContent>
      </Card>
    </>
  );
}

export default SearchCard;
