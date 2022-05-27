import React from 'react';
import { Link } from 'react-router-dom';
import {  AppBar, Typography } from '@material-ui/core';

import TechVerx from '../../images/main_title.png'; 
import usestyles from './styles';

const Navbar = () => {
    const classes =usestyles();
  return (
        <AppBar className={classes.appBar} position ="static" color = "inherit"> 
            <div className = {classes.brandContainer}>
                <Typography className={classes.heading} component={Link} to="/" variant="h2" align="center">  TechVerx </Typography>
                <img className={classes.image} src= {TechVerx} alt = "TechVerx" height = "60" />
            </div>
        </AppBar>
  );
};

export default Navbar;