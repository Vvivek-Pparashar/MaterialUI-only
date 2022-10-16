import {
  Box,
  Button,
  Grid,
  List,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Facebook, Twitter, Instagram, Send } from "@mui/icons-material";
import { Stack } from "@mui/system";

const Footer = () => {
  return (
    <Box
      sx={{
        background: "#323232",
        color: "white",
        p: { xs: 4, md: 10 },
        pt: 12,
        pb: 12,
        fontSize: { xs: "12px", md: "14px" },
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item md={6} lg={4}>
          <Typography variant="h6">About us</Typography>
          <Typography variant="caption2">
            Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor
            incididunt ut labor et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud.
          </Typography>

          <Box sx={{ mt: 4 }}>
            <Facebook sx={{ mr: 1 }} />
            <Twitter sx={{ mr: 1 }} />
            <Instagram />
          </Box>
        </Grid>
        <Grid item md={6} lg={2}>
          <Typography variant="h6">information</Typography>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                About Us
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Order Tracking
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Privacy &amp; Policy
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Terms &amp; Conditions
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={2}>
          <Typography variant="h6">my account</Typography>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Login
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                My Cart
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                My Account
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Wishlist
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={4}>
          <Typography variant="h6">Newsletter</Typography>
          <Stack>
            <TextField
              id="standard"
              variant="standard"
              label="Email address"
              color="primary"
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              sx={{ borderColor: "white" }}
            />
            <Button
              startIcon={<Send sx={{ color: "white" }} />}
              sx={{ mt: 4, mb: 4, backgroundColor: "#522C3D" }}
              variant="contained"
            >
              Subscribe
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
