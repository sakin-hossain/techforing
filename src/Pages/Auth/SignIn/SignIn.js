import { Alert, Box, CircularProgress, Container, Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const SignIn = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();
    
    const ColorButton = styled(Button)(() => ({
        backgroundColor: "#182F59",
        padding: "10px 24px",
        width: "200px",
        margin: "20px 10px",
        '&:hover': {
          backgroundColor: "#182F59",
        },
      }));
      const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
      const handleSubmit = event =>{
        loginUser(loginData.email, loginData.password, location, navigate);
        event.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate);
    }
    return (
        <div>
            <Box>
                <Container>
                <Box sx={{my:5, textAlign:"center"}}>
                    <Typography variant='h4'>Sign In</Typography>
                    <Typography variant='p'>Sign To see Jobs</Typography>
                </Box>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={3}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Emails"
                                name="email"
                                onSubmit={handleOnChange}
                            />
                            <TextField
                                required
                                fullWidth
                                id="password"
                                label="Password"
                                type="password"
                                name="password"
                                onSubmit={handleOnChange}
                            />
                            <Box sx={{textAlign:"center"}}>
                                <ColorButton type='submit' variant="contained" onClick={loginUser}>Sign In</ColorButton>
                                <ColorButton type='submit' variant="contained" onClick={handleGoogleSignIn}>Google Sign In</ColorButton>
                            </Box>
                        </Stack>
                    </form>
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Login successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Container>
            </Box>
        </div>
    );
};

export default SignIn;