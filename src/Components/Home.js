import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home__hero">
        <div className="home__hero__img"></div>
        <Container sx={{display:"flex", flexDirection: 'column', width : "50%" }}>
          <Typography variant="h6">Huge Collection</Typography>
          <Typography variant="h2">New Bags</Typography>
          <Typography variant="p">
            Torem ipsum dolor sit amet, consectetur adipisicing elitsed do
            eiusmo tempor incididunt ut labore et dolore magna
          </Typography>
        </Container>
      </div>
    </>
  );
};

export default Home;
