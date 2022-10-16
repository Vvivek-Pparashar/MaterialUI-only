import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import products from "./Data";
import CardComp from "./CardComp";
import { Typography } from "@mui/material";

const data_item = products.map((e) => {
  return (
    <Grid item xs={4} sx={{ display: "flex", justifyContent: "center", m: 0, p:0 }}>
      <CardComp
        key={e.id}
        name={e.name}
        price={e.price}
        description={e.description}
        image={e.image}
      />
    </Grid>
  );
});

export default function RowAndColumnSpacing() {
  return (
    <Box
      sx={{
        width: "80%",
        m: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" sx={{ mt: 3, mb: 3 }}>
        Our Products
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {data_item}
      </Grid>
    </Box>
  );
}
