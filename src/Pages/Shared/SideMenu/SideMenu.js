import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';
import account from '../../../images/sidebar/account.png';
import home from '../../../images/sidebar/home.png';
import jobs from '../../../images/sidebar/jobs.png';
import msg from '../../../images/sidebar/msg.png';
import Jobs from '../../Home/Jobs/Jobs';
import './SideMenu.css';

const SideMenu = () => {
    const [active, setActive] = useState('jobs');
    const sideMenu = {
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        left: "0px",
        width: "87px",
        height: "887px",
        boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.1)"
    }
    
    const navLogo = {
        width: "34px",
        height: "34px",
        margin: "15px 25px",
        padding:"10px 0",
        borderBottom: "2px solid gray"
    }
    return (
        <Box>
            <Grid container>
                <Grid item xs={3} md={1}>
                    <Box style={sideMenu}>
                        <img style={navLogo} src={home} alt='icon'/>
                        <img onClick={() => {setActive('jobs')}} style={navLogo} src={jobs} alt='icon'/>
                        <img style={navLogo} src={msg} alt='icon'/>
                        <img style={navLogo} src={account} alt='icon'/>
                    </Box>
                </Grid>
                <Grid item xs={9} md={11}>
                    <Box>
                        {active === 'jobs' && <Jobs/>}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SideMenu;