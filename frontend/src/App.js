import React from 'react';
import Navbar from "./components/Navbar";
import BasicTable from "./components/Table";
import { Container, Button, Box, Typography } from '@mui/material';

function App() {
  return (
      <>
          <Navbar />
          <Container>
              <Box sx={{margin: 5, textAlign: 'center'}}>
                  <Typography variant={'h6'}>
                      Alimentele tale
                  </Typography>
              </Box>
              <BasicTable />
          </Container>
      </>
  );
}

export default App;
