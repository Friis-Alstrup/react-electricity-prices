import React, { useState } from "react";
import { Container } from "@mui/system";
import Navbar from "./components/Navbar";
import "./assets/style.css";
import DayPaper from "./components/DayPaper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function getLatestSevenDates() {
  const dates = [];
  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const formattedDate = `${month}-${day}`;
    dates.unshift(formattedDate);
  }
  return dates;
}

export default function App() {
  const [region, setRegion] = useState("DK2");
  const latest7Days = getLatestSevenDates();

  const handleChange = (event) => {
    setRegion(event.target.value);
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <FormControl fullWidth sx={{ marginTop: "30px" }}>
          <InputLabel id="region-select-label">Vælg region</InputLabel>
          <Select
            labelId="region-select-label"
            id="region-select"
            value={region}
            label="Vælg region"
            onChange={handleChange}
          >
            <MenuItem value="DK2">Øst for Storebælt</MenuItem>
            <MenuItem value="DK1">Vest for Storebælt</MenuItem>
          </Select>
        </FormControl>
        <div className="date-cards">
          {latest7Days.map((day) => (
            <DayPaper key={day} date={day} year="2023" region={region} />
          ))}
        </div>
      </Container>
    </>
  );
}
