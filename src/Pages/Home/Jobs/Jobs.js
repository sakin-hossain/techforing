import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [isdeleted, setIsDeleted] = useState(false);

    useEffect(()=>{
        fetch(`https://rocky-plains-09029.herokuapp.com/jobs`)
        .then(res => res.json())
        .then(data => setJobs(data));
    }, [isdeleted]);
    const handleDelete = id => {
      const proceed = window.confirm('Delete Job!Are you sure?');
      if (proceed) {
          axios.delete(`https://rocky-plains-09029.herokuapp.com/jobs/${id}`)
              .then(res => {
                  if (res.data.acknowledged) {
                      alert('Delete Successful!')
                      setIsDeleted(true);
                  }
              })
      }
  }

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      const infoStyle1={
        background:"#123068",
        width:"250px",
        margin:"20px",
        color:"white",
        padding:"10px 0"
      }
      const infoStyle2={
        background:"#0C2C53",
        width:"250px",
        margin:"20px",
        color:"white",
        padding:"10px 0"
      }
    return ( 
        <>
          <Box sx={{textAlign:"center"}}>
            <Grid container>
              <Grid style={infoStyle1} item xs={5} md={2}>
                <p>Total Active Job</p>
                <span>5</span>
              </Grid>
              <Grid style={infoStyle2} item xs={5} md={2}>
                <p>Interview Schedule</p>
                <span>200</span>
              </Grid>
              <Grid style={infoStyle1} item xs={5} md={2}>
                <p>New Hiring</p>
                <span>5</span>
              </Grid>
              <Grid item style={infoStyle2} xs={5} md={2}>
                <p>Total Applicant</p>
                <span>5</span>
              </Grid>
            </Grid>
          </Box>
          <TableContainer sx={{maxWidth:"85vw", mt:5}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="right">Post Name</StyledTableCell>
                        <StyledTableCell align="right">Total Applicant</StyledTableCell>
                        <StyledTableCell align="right">Vacancies</StyledTableCell>
                        <StyledTableCell align="right">Shift</StyledTableCell>
                        <StyledTableCell align="right">Type</StyledTableCell>
                        <StyledTableCell align="right">Post Date</StyledTableCell>
                        <StyledTableCell align="right">Expire Date</StyledTableCell>
                        <StyledTableCell align="right">Salary</StyledTableCell>
                        <StyledTableCell align="right">Status</StyledTableCell>
                        <StyledTableCell align="right">Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                {
                    jobs.map(job=>
                          <TableBody key={job._id}>
                              <StyledTableRow key={job._id}>
                                  <StyledTableCell component="th" scope="row" align='right'>{job.name}</StyledTableCell>
                                  <StyledTableCell align='right'>Total</StyledTableCell>
                                  <StyledTableCell align='right'>{job.vacancies}</StyledTableCell>
                                  <StyledTableCell align='right'>{job.shift}</StyledTableCell>
                                  <StyledTableCell align='right'>{job.type}</StyledTableCell>
                                  <StyledTableCell align='right'>{job.postDate}</StyledTableCell>
                                  <StyledTableCell align='right'>{job.expireDate}</StyledTableCell>
                                  <StyledTableCell align='right'>{job.salary}</StyledTableCell>
                                  <StyledTableCell align='right'>{job.status}</StyledTableCell>
                                  <StyledTableCell align='right'>
                                    <DeleteRoundedIcon onClick={() =>handleDelete
                                    (job._id)} sx={{color:"red"}}/>
                                    <EditRoundedIcon sx={{color:"lightgreen"}}/>
                                    <RemoveRedEyeRoundedIcon sx={{color:"gray"}}/>
                                  </StyledTableCell>
                              </StyledTableRow>
                          </TableBody>
                      )
                  }
              </Table>
              </TableContainer>
        </>    
    );
};

export default Jobs;