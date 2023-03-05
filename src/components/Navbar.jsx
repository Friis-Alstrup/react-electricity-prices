import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/system';

export default function Navbar() {
  return (
    <Box>
      <AppBar className="navbar" position="static">
        <Container maxWidth="lg">
            <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h6" component="div">
                Hvad koster strømmen?
            </Typography>
            </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
