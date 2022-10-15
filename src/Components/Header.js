import "../App.css";
import { useEffect, useState } from "react";
import {
  AppBar,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Tab,
  Tabs,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InputAdornment from "@mui/material/InputAdornment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";

import Divider from "@mui/material/Divider";

function Header() {
  useEffect(() => {
    document.title = "Vivek-Home";
  }, []);

  const [value, setValue] = useState(0)

  return (
    <div className="App">
      <AppBar sx={{ background: "white", position:"sticky", top: 0 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h4"
            sx={{ color: "#da697c", fontFamily: "'Comforter Brush', cursive" }}
          >
            My Bags
          </Typography>

          <Tabs value= {value}  onChange={(e, value)=>{setValue(value)}}>
            <Tab label="Home" />
            <Tab label="Categories" />
            <Tab label="Products" />
            <Tab label="About Us" />
            <Tab label="Contact Us" />
          </Tabs>

          <TextField
            label="Search Here"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          <List sx={{ display: "flex" }}>
            <ListItem sx={{ m: 0, p: 0 }} type="row">
              <ListItemButton
                sx={{
                  justifyContent: "center",
                  m: 0,
                  p: 0,
                }}
              >
                <ListItemIcon
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    m: 0,
                  }}
                >
                  <ShoppingCartIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>

            <Divider orientation="vertical" flexItem />

            <ListItem sx={{ m: 0, p: 0 }} type="row">
              <ListItemButton
                sx={{
                  justifyContent: "center",
                  m: 0,
                  p: 0,
                }}
              >
                <ListItemIcon
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    m: 0,
                    p: 0,
                  }}
                >
                  <FavoriteIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>

            <Divider orientation="vertical" flexItem />

            <ListItem sx={{ m: 0, p: 0 }} type="row">
              <ListItemButton
                sx={{
                  justifyContent: "center",
                  m: 0,
                  p: 0,
                }}
              >
                <ListItemIcon
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    m: 0,
                    p: 0,
                  }}
                >
                  <PersonIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
