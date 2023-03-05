import React, { useEffect, useState } from "react";
import { Paper, Typography } from "@mui/material";
import LoadingSkeleton from "./LoadingSkeleton";
import PriceProgressBar from "./PriceProgressBar";

export default function DayPaper({ date, year, region }) {
  const [prices, setPrices] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://www.elprisenligenu.dk/api/v1/prices/" +
        year +
        "/" +
        date +
        "_" +
        region +
        ".json"
    )
      .then((res) => res.json())
      .then((result) => {
        setLoading(false);
        setPrices(result);
      });
  }, [region]);

  const fullDateFormat = new Date(`${new Date().getFullYear()}-${date}`);

  const day = fullDateFormat.getDate();
  const monthName = fullDateFormat.toLocaleString("default", { month: "long" });

  const formattedDate = `${day}. ${monthName}`;

  return (
    <Paper className="card" sx={{ width: "100%" }}>
      <Typography variant="h6">{formattedDate}</Typography>
      <div className="prices">
        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          prices
            .map(({ DKK_per_kWh, time_start }) => (
              <PriceProgressBar
                key={time_start}
                clock={time_start}
                price={DKK_per_kWh}
              />
            ))
            .reverse()
        )}
      </div>
    </Paper>
  );
}
