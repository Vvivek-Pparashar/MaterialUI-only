import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";

const CardComp = ({ key, price, name, image, description }) => {
  const [color, setColor] = useState("grey");
  const [show, setShow] = useState(false);

  const changeColor = () => {
    console.log("first");
    if (color == "grey") setColor("red");
    else setColor("grey");
  };

  const mouseEnter = () => {
    setShow(true);
  };

  const mouseOut = () => {
    setShow(false);
  };

  return (
    <Box
      sx={{
        m: 0,
        mb: 4,
        padding: "0px 0px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          backgroundColor: "#E7E7E7",
          cursor: "pointer",
          position: "relative",
        }}
        onMouseMove={mouseEnter}
        onMouseLeave={mouseOut}
      >
        <CardMedia component="img" image={image} alt={name} sx={{ mb: 4 }} />
        <Stack sx={{ position: "absolute", right: 0, top: 0, mr: 2, mt: 1 }}>
          <IconButton
            onClick={changeColor}
            sx={{ backgroundColor: "white", mb: 1 }}
          >
            <FavoriteIcon sx={{ color: { color } }} />
          </IconButton>
          {show && (
            <>
              <IconButton sx={{ backgroundColor: "white", mb: 1 }}>
                <ShareIcon />
              </IconButton>
              <IconButton sx={{ backgroundColor: "white" }}>
                <FitScreenIcon />
              </IconButton>
            </>
          )}
        </Stack>

        {show && (
          <Button
            variant="contained"
            sx={{
              width: "250px",
              position: "absolute",
              bottom: 0,
              left: "50%",
              transfrom: " translte",
              padding: "10px 30px",
              background: "#C6ACC9",
              transform: "translateX(-50%)",
              transition : "0.5s linear"
            }}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseEnter}
          >
            Add to Card
          </Button>
        )}
      </Card>

      <Typography variant="h6">{name}</Typography>
      <Typography variant="p">${price}</Typography>
    </Box>
  );
};

export default CardComp;
