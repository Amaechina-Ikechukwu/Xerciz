import React, { Component } from 'react'
import RunCircleOutlinedIcon from '@mui/icons-material/RunCircleOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import { Link } from 'react-router-dom';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import "tailwindcss/tailwind.css"
import { CollectionIcon, PencilIcon, PlusCircleIcon, UserCircleIcon } from '@heroicons/react/outline'

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
                {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        
         <div class=' rounded-md p-0.5 hover:bg-gray-600  '>
           <Tooltip title='Exercises'>
        <li class="nav-item"><a class="nav-link active" aria-current="page" href="/">
        
             
                <CollectionIcon class='w-5 h-5 text-gray-500 hover:text-gray-100' />
           
         </a>
        </li> 
        </Tooltip>
        </div>
        <div class=' rounded-md p-0.5 hover:bg-red-400  '>
        <Tooltip title='Create Exercise'>
        <li class="nav-item">
          <a class="nav-link" href="/create">
              
                <PlusCircleIcon class='w-5 h-5 text-gray-500 hover:text-gray-100' />  
              
              </a>
        </li>
        </Tooltip>
</div>

       
          <div class=' rounded-md p-0.5 hover:bg-green-400  '>
        <Tooltip title='Edit Exercise'>
        <li class="nav-item">
          <a class="nav-link" href="/edit:id">
              
                <PencilIcon class='w-5 h-5 text-gray-500 hover:text-gray-100' />  
              
              </a>
        </li>
        </Tooltip>
</div>
        
<div class=' rounded-md p-0.5 hover:bg-blue-400'>
        <Tooltip title='Exercise User'>
        <li class="nav-item">
          <a class="nav-link" href="/user">
              
                <UserCircleIcon class='w-5 h-5 text-gray-500 hover:text-gray-100' />  
              
              </a>
        </li>
        </Tooltip>
</div>
       
      </ul>
    </div>
  </div>
</nav> */}

<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">ExcerTracker</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">    <div class=' rounded-md p-0.5 hover:bg-gray-600  '>
           <Tooltip title='Exercises'>
        <li class="nav-item"><a class="nav-link active" aria-current="page" href="/">
        
             
                <CollectionIcon class='w-5 h-5 text-gray-500 hover:text-gray-100' />
           
         </a>
        </li> 
        </Tooltip>
        </div></Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">       <div class=' rounded-md p-0.5 hover:bg-red-400  '>
        <Tooltip title='Create Exercise'>
        <li class="nav-item">
          <a class="nav-link" href="/create">
              
                <PlusCircleIcon class='w-5 h-5 text-gray-500 hover:text-gray-100' />  
              
              </a>
        </li>
        </Tooltip>
</div></Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link"><div class=' rounded-md p-0.5 hover:bg-blue-400'>
        <Tooltip title='Exercise User'>
        <li class="nav-item">
          <a class="nav-link" href="/user">
              
                <UserCircleIcon class='w-5 h-5 text-gray-500 hover:text-gray-100' />  
              
              </a>
        </li>
        </Tooltip>
</div></Link>
          </li>
        </ul>
        </div>
      </nav>
            </div>
        )
    }
}

export default Navbar
