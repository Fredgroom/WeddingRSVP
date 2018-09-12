import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import AccountsUIWrapper from '../../imports/ui/accounts.js';

const styles = {
    root: {
      flexGrow: 1,
    },
    flex: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };
  
const MainLayout = (props) =>

    <div className='main-layout'>
        {(props.children)}

    <AppBar position="static" >
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            
          </IconButton>

          <Typography variant="title" color="inherit" >
          
          <Link to="/home">
          <Button color="inherit">
          Home</Button>
          </Link>
          
          
          <Link to="/about">
          <Button color="inherit">
          About
          </Button>
          </Link>
          
          <Link to="/rsvp">
          <Button color="inherit">
          Rsvp
          </Button>
            </Link>
            <Link to="/host">
          <Button color="inherit">
          Host
          </Button>
            </Link>

          </Typography>
          
          <AccountsUIWrapper />

         
          
        </Toolbar>
      </AppBar>
    </div>

export default withStyles(styles)(MainLayout);

