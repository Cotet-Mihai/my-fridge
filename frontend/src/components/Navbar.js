import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button} from '@mui/material';

function Navbar() {
    return (
        <AppBar position={'static'}>
            <Toolbar>
                <Typography variant={'h6'}>
                    My Fridge
                </Typography>

                <Box sx={{flexGrow: 1}}></Box>
                <Button sx={{color: 'inherit'}}>Adauga Produs</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;