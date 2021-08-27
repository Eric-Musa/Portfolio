import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Instagram from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter';
import Facebook from '@material-ui/icons/Facebook';

import useWindowDimensions from './windowDimension';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        bottom: 0,
    },
    offset: {
        'min-height': '56px'   
    }  // theme.mixins.toolbar,
}));

export default function SocialMediaNavBar() {
    const [value, setValue] = React.useState('');
    const { height, width } = useWindowDimensions();
    const timer = useRef({timeoutID: null})
    const classes = useStyles();

    return (
        <>
            <div className={classes.offset}/>
            <div className={classes.root}>
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                        clearTimeout(timer.current.timeoutID)
                        timer.current.timeoutID = setTimeout(() => setValue(''), 1000)
                    }}
                    showLabels
                    // className={classes.root}
                    style={{
                    width: width,
                      position: 'fixed',
                      bottom: 0,
                    }}
                    >
                    <BottomNavigationAction label="LinkedIn" value='LinkedIn' icon={<LinkedIn />} />
                    <BottomNavigationAction label="Instagram" value='Instagram' icon={<Instagram />} />
                    <BottomNavigationAction label="Twitter" value='Twitter' icon={<Twitter />} />
                    <BottomNavigationAction label="Facebook" value='Facebook' icon={<Facebook />} />
                </BottomNavigation>
            </div>
        </>
    );
}