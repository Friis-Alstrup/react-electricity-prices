import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import { GitHub } from "@mui/icons-material";

export default function Navbar() {
  return (
    <Box>
      <AppBar className="navbar" position="static">
        <Container maxWidth="lg">
          <Toolbar sx={{ padding: 0 }}>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              El-priser
            </Typography>
            <Button
              href="https://github.com/Friis-Alstrup/react-electricity-prices"
              target="_blank"
              variant="outlined"
              color="secondary"
              startIcon={<GitHub />}
            >
              Github
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
