import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { green, yellow } from "@material-ui/core/colors";

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
}));

export default function MainGrid() {
    const classes = useStyles();

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
    );
}
