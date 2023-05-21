import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Scanner from "./qrscanner"
import { Link } from 'react-router-dom';

export default function ScanBox() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
        boxShadow: '0px 0px 10px 5px rgba(0,0,0,0.2)',
        padding: '10px',
      }}
    >
      <Typography variant="h5" component="div" gutterBottom>
        Scan Here!
      </Typography>
      <Scanner/>
      <Button sx={{ mt: 3 }} variant="contained" >
        <Link to="/profile">
        DONE
        </Link>
      </Button>
    </Box>
    );
}