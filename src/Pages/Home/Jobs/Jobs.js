import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from 'react';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        fetch('./jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data));
    }, []);

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
    return ( 
        <TableContainer component={Paper}>
            <Table sx={{maxWidth:"80vw"}}>
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
                        <TableBody>
                            <StyledTableRow key={job.id}>
                                <StyledTableCell component="th" scope="row" align='right'>{job.name}</StyledTableCell>
                                <StyledTableCell align='right'>Total</StyledTableCell>
                                <StyledTableCell align='right'>{job.vacancies}</StyledTableCell>
                                <StyledTableCell align='right'>{job.shift}</StyledTableCell>
                                <StyledTableCell align='right'>{job.type}</StyledTableCell>
                                <StyledTableCell align='right'>{job.postDate}</StyledTableCell>
                                <StyledTableCell align='right'>{job.expireDate}</StyledTableCell>
                                <StyledTableCell align='right'>{job.salary}</StyledTableCell>
                                <StyledTableCell align='right'>{job.status}</StyledTableCell>
                                <StyledTableCell align='right'>Action</StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                    )
                }
            </Table>
        </TableContainer>    
    );
};

export default Jobs;