import React, { Component } from 'react'
import RunCircleOutlinedIcon from '@mui/icons-material/RunCircleOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';

const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));


export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link active" aria-current="page" href="/"> 
           <Tooltip title='Exercises' placement='top'>
                <RunCircleOutlinedIcon />
           </Tooltip>
         </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/create">
              <Tooltip title='Create Exercise'>
                <AddOutlinedIcon />  
              </Tooltip>
              </a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href='/edit:id'>
              <Tooltip title='Edit Exercise'>
                  <ModeEditOutlinedIcon />
              </Tooltip>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/user">
              <Tooltip title='Create User'>
                  <PersonAddOutlinedIcon/>
              </Tooltip>
              </a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
            </div>
        )
    }
}

export default Navbar
