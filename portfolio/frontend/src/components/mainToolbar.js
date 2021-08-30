import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.light
    },
    toolBar: {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.light
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    offset: theme.mixins.toolbar,
}));

export default function MainToolbar() {
    const classes = useStyles();
        
    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="fixed">
                <Toolbar className={classes.toolBar}>
                </Toolbar>
            </AppBar>
            <div className={classes.offset} />
        </div>
    );
}
