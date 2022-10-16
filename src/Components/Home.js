import { Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home__hero">
        <div className="home__hero__img"></div>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
            m: 0,
            p: 0,
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: 1 }}>
            Huge Collection
          </Typography>
          <Typography variant="h2" sx={{ marginBottom: 4 }}>
            New Bags
          </Typography>
          <Typography variant="p" sx={{ marginBottom: 6 }}>
            Torem ipsum dolor sit amet, consectetur adipisicing elitsed do
            eiusmo tempor incididunt ut labore et dolore magna
          </Typography>
          <Button
            variant="contained"
            sx={{ padding: "10px 0", outline: "none", background:"#522C3D" }}
          >
            Shop Now
          </Button>
        </Container>
      </div>
    </>
  );
};

export default Home;
