import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Alert, CircularProgress, Container, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const SignUp = () => {
    const {registerUser, isLoading, user, authError, handleGoogleSignIn} = useAuth();
    const [gender, setGender] = React.useState('');
    const [regData, setRegData] = React.useState({});
    
    const navigate = useNavigate();

    const handleOnChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newRegData = {...regData,  date, gender};
        newRegData[field] = value;
        setRegData(newRegData);
        console.log(regData.email, regData.password);
  };
  const handleSubmit = (event) => {
    if(regData.password !== regData.confirmPassword){
        alert("Password didn't match");
        return;
    }
    registerUser(regData.email, regData.password, navigate, regData);
    event.preventDefault();
}
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const handleDateChange = (newValue) => {
        setDate(newValue);
    }
  const [date, setDate] = React.useState(null);
  const ColorButton = styled(Button)(() => ({
    backgroundColor: "#182F59",
    padding: "10px 24px",
    margin:"0 10px",
    '&:hover': {
      backgroundColor: "#182F59",
    },
  }));
    return (
        <Box sx={{textAlign:"center"}}>
            <Container>
                <Box sx={{my:3}}>
                    <Typography variant='h4'>Sign Up</Typography>
                    <Typography variant='p'>Register To get A Job</Typography>
                </Box>
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <form onSubmit={handleSubmit}>
                        <TextField sx={{m:5}}
                            required
                            id="name"
                            label="Name"
                            name='name'
                            onSubmit={handleOnChange}
                        />
                        <TextField sx={{m:5}}
                            required
                            id="phone"
                            label="Phone"
                            name="phone"
                            onSubmit={handleOnChange}
                        /> <br />
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Date of Birth"
                            value={date}
                            name="date"
                            onChange={handleDateChange}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        </LocalizationProvider>
                        <FormControl>
                            <InputLabel sx={{width:"200px", mx:10}} id="gender">Gender</InputLabel>
                            <Select sx={{width:"200px", mx:10}}
                            labelId="gender"
                            id="gender"
                            value={gender}
                            name="gender"
                            label="Gender"
                            onChange={handleGenderChange}
                            >
                            <MenuItem value={"male"}>Male</MenuItem>
                            <MenuItem value={"female"}>Female</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField sx={{m:5}}
                            required
                            fullWidth
                            id="email"
                            label="Emails"
                            name="email"
                            onSubmit={handleOnChange}
                        />
                        <TextField sx={{mb:5, mx:5}}
                            required
                            id="password"
                            label="Password"
                            type="password"
                            name="password"
                            onSubmit={handleOnChange}
                        />
                        <TextField sx={{mb:5, mx:5}}
                            required
                            id="confirmPassword"
                            label="Confirm Password"
                            type="password"
                            name="confirmPassword"
                            onSubmit={handleOnChange}
                        />
                            <br />
                        <Box>
                            <ColorButton type='submit' variant="contained">Submit</ColorButton>
                            <ColorButton variant="contained" type='submit' onClick={handleGoogleSignIn}>Google Sign In</ColorButton>
                        </Box>
                    </form>
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Box>
            </Container>
        </Box>
    );
};

export default SignUp;