import { AccountCircle } from '@mui/icons-material';
import MoreIcon from '@mui/icons-material/MoreVert';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar, Badge, IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import logo from '../../../images/logo.jpg';

const Header = () => {
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{ backgroundColor: '#182F59' }} position="static">
                <Toolbar>
                  <Avatar sx={{mr:1}} src={logo}/>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        TechForing
                  </Typography>
                  <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                  <IconButton
                    size="large"
                    color="inherit"
                  >
                    <Badge badgeContent={0} color="error">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                    size="large"
                    aria-label="show more"
                    aria-haspopup="true"
                    color="inherit"
                  >
                    <MoreIcon />
                  </IconButton>
                </Box>
              </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;