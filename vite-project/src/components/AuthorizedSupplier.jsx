import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Rating from "@mui/material/Rating";

import FmdGoodIcon from "@mui/icons-material/FmdGood";
import PhoneIcon from "@mui/icons-material/Phone";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import StarIcon from '@mui/icons-material/Star';
function AuthorizedSupplier() {
  const AuthorizedInfoHeading = [
    "Date Authorized",
    "Authorized By",
    "Invoice Chased Date",
    "PO Chased Date",
    "PO Confirmed Date",
    "PO Ref No",
  ];
  const AuthorizedInfoContent = [
    "12 Jul 2019",
    "Jim Darren",
    "-",
    "-",
    "-",
    "-",
  ];

  const ConnectionAddress = [
    {
      icon: <FmdGoodIcon />,
      iconData: "1st Floor, Skypark, 8 Elliot place, G3 89P, G78 ",
    },
    {
      icon: <PhoneIcon />,
      iconData: "+44(0)145679344",
    },
    {
      icon: <PhoneAndroidIcon />,
      iconData: "+44(0)34567679344",
    },
    {
      icon: <MailOutlineIcon />,
      iconData: (
        <Link href="#" color="inherit">
          repairs@services.com
        </Link>
      ),
    },
  ];

  const value = 3.5;
  return (
    <>
      <Box>
        <Box style={{ display: "flex" }}>
          <Typography variant="h6" component="h4" ml={2}>
            AUTHORIZED SUPPLIER
          </Typography>
          <Button
            variant="contained"
            style={{
              backgroundColor: "grey",
              marginLeft: "15px",
              marginBottom: "10px",
            }}
          >
            Ref:708098PYU
          </Button>
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "15px",
          }}
        >
          {AuthorizedInfoHeading.map((data, index) => (
            <Typography
              key={index}
              style={{
                cursor: "pointer",

                paddingBottom: "4px",
                marginBottom: "8px",
                display: "inline-block",
                marginRight: "10px",
                marginLeft: "0px",
              }}
            >
              {data}
            </Typography>
          ))}
        </Box>

        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "15px",
          }}
        >
          {AuthorizedInfoContent.map((data, index) => (
            <Typography
              key={index}
              style={{
                cursor: "pointer",
                paddingBottom: "4px",
                marginBottom: "8px",
                display: "inline-block",
                marginRight: "10px",
                marginLeft: "0px",
              }}
            >
              {data}
            </Typography>
          ))}
        </Box>

        <Box>
          <Typography
            variant="body1"
            ml={2}
            style={{ color: "#3a4cb1", marginBottom: "4px" }}
          >
            <Link underline="none" href="#">
              Repairs(Riding Squads/ ManPower ){" "}
            </Link>
          </Typography>
          <Rating style={{ marginLeft: "10px" }}   emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />} value={value} readOnly></Rating>

          {ConnectionAddress.map((data, index) => (
            <Typography ml={1}>
              <Button
                key={index}
                variant="text"
                style={{ color: "green" }}
               
                startIcon={data.icon}
              
              >
                {data.iconData}
              </Button>
            </Typography>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default AuthorizedSupplier;
