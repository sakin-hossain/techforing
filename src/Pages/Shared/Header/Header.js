import { AccountCircle } from '@mui/icons-material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar, Badge, IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.jpg';
const Header = () => {
    
    const {user,logout} = useAuth();

    const ColorButton = styled(Button)(() => ({
      backgroundColor: "#182F59",
      padding: "10px 24px",
      '&:hover': {
        backgroundColor: "#182F59",
      },
    }));
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{ backgroundColor: '#182F59' }} position="static">
                <Toolbar>
                  <Avatar sx={{mr:1}} src={logo}/>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        TechForing
                  </Typography>
                  <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Typography variant='span' sx={{mt:1.5}}>{user.email}</Typography>
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
                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    color="inherit"
                  >
                    <Link to="/createJobs">
                      <AddCircleIcon sx={{color:"white", mt:.5}}/>
                    </Link>
                  </IconButton>
                  <ColorButton type='submit' variant="contained" onClick={logout}>Log Out</ColorButton>
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