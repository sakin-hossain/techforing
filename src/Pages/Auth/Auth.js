import { Box, Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';


const Auth = () => {
    const [active, setActive] = useState('signIn');

    const ColorButton = styled(Button)(() => ({
        backgroundColor: "#182F59",
        padding: "10px 24px",
        width: "200px",
        margin: "0 auto",
        '&:hover': {
          backgroundColor: "#182F59",
        },
      }));
    return (
        <Box>
            <Grid sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 1,
          m: 1,
        }} container spacing={5}>
                <Grid item xs={12} md={6}>
                    <Box sx={{textAlign:"center"}}>
                        <ButtonGroup sx={{mb:3}} disableElevation variant="contained">
                            <ColorButton onClick={()=>{setActive('signUp')}} variant="contained">Sign Up</ColorButton>
                            <ColorButton onClick={()=>{setActive('signIn')}} variant="contained">Sign In</ColorButton>
                        </ButtonGroup>
                    </Box>
                    {
                        active === 'signUp' && <SignUp/>
                    }
                    {
                        active === 'signIn' && <SignIn/>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography color="green" variant='h1'>Tech <br /> Foring</Typography>
                    <i>Shaping Tomorrow's Cybersecurity</i>
                    <Typography sx={{mt:5, color:"#3A3C63"}} variant="h3">Welcome to TechForing</Typography>
                    <Typography sx={{color:"#415785"}} variant='p'>An applicant can register only once. <br />Registered applicant, please login with your Credentials bu entering email and password.</Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Auth;