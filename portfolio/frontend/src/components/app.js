import React, { Component } from "react";
import { render } from "react-dom";
import { makeStyles } from '@material-ui/core/styles';
import Slideshow from './slideshow'
import getWindowDimensions from "./windowDimension";


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { green, yellow } from '@material-ui/core/colors';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        [theme.breakpoints.down('xs')]: {
            backgroundColor: yellow[500],
        },
        [theme.breakpoints.up('sm')]: {
            backgroundColor: theme.palette.secondary.main,
        },
        [theme.breakpoints.up('md')]: {
            backgroundColor: theme.palette.primary.main,
        },
        [theme.breakpoints.up('lg')]: {
            backgroundColor: green[500],
        },
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    outerGrid: {
        width: '100%',
        margin: '0',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    offset: theme.mixins.toolbar,
}));

function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <AppBar position="fixed">
            <Toolbar>
                {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton> */}
                <Button color="inherit">Login</Button>
                <Button color="inherit">Login</Button>
                <Button color="inherit">Login</Button>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
        <div className={classes.offset} />
    </div>
  );
}

export default function App() {
    const classes = useStyles();

    function Box () {
        return (
            <div className={classes.root}>
                <Grid container spacing={2} className={classes.outerGrid}>
                    <Grid item xs={12} wrap='nowrap'>
                        <Paper className={classes.paper}>xs=12</Paper>
                    </Grid>
                    <Grid item xs={6} wrap='nowrap'>
                        <Paper className={classes.paper}>xs=6</Paper>
                    </Grid>
                    <Grid item xs={6} wrap='nowrap'>
                        <Paper className={classes.paper}>xs=6</Paper>
                    </Grid>
                    <Grid item xs={3} wrap='nowrap'>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3} wrap='nowrap'>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3} wrap='nowrap'>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3} wrap='nowrap'>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }

    return (
        <>
            <ButtonAppBar></ButtonAppBar>
            <Box></Box>
            <Slideshow></Slideshow>
            {/* <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box> */}
        </>
    );
}
const appDiv = document.getElementById("app");
render(<App />, appDiv)

// window.addEventListener('resize', (e) => {
//     console.log(getWindowDimensions())
// })

// var path = require('path');
// const PICS_DIR = path.resolve(__dirname, "../../static/images/")
// console.log(PICS_DIR)
