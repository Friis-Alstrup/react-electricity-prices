import React from "react";
import { Grid, LinearProgress, Typography } from "@mui/material";

export default function PriceProgressBar({ clock, price }) {
  const clockFormat = new Date(clock).getHours();
  const roundedPrice = Number(price).toFixed(2);
  const percentage = (price / 8) * 100;

  let color = "";

  if (roundedPrice < 1.0) {
    color = "success";
  } else if (roundedPrice >= 1.0 && roundedPrice < 1.5) {
    color = "warning";
  } else if (roundedPrice >= 1.5) {
    color = "error";
  }

  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      justifyContent="space-between"
    >
      <Grid
        item
        xs={2.5}
        sm={1.3}
        md={1}
        lg={1}
        sx={{ display: "flex", justifyContent: "start" }}
      >
        <Typography>Kl. {clockFormat}</Typography>
      </Grid>

      <Grid item xs={6.5} sm={9.4} md={10} lg={10}>
        <LinearProgress
          color={color}
          variant="determinate"
          value={percentage}
          sx={{ padding: "5px", borderRadius: "12px" }}
        />
      </Grid>

      <Grid
        item
        xs={3}
        sm={1.3}
        md={1}
        lg={1}
        sx={{ display: "flex", justifyContent: "end" }}
      >
        <Typography>{roundedPrice} kr</Typography>
      </Grid>
    </Grid>
  );
}
