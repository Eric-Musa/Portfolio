import React, { useEffect, useRef } from 'react';
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
    },  // theme.mixins.toolbar,
    botnav: {
        'backgroundColor': theme.palette.primary.dark,
    },
    icon: {
        'color': theme.palette.primary.light,
    }
}));

export default function SocialMediaNavBar() {
    const [value, setValue] = React.useState('');
    const { height, width } = useWindowDimensions();
    const timer = useRef({timeoutID: null})
    const classes = useStyles();

    useEffect(()=>{
        // console.log(value)
        switch(value) {
            case 'LinkedIn':
                window.open("https://www.linkedin.com/in/ericmusa/", "_blank")
                break;
            case 'Instagram':
                window.open("https://www.instagram.com/eric__mufasa/", "_blank")
                break;
            case 'Twitter':
                window.open("https://twitter.com/eric__musa", "_blank")
                break;
            case 'Facebook':
                window.open("https://facebook.com/ericmusa17", "_blank")
                break;
            default:
                // code block
            }
    }, [value])

    return (
        <>
            <div className={classes.offset}/>
            <div className={classes.root}>
                <BottomNavigation
                    className={classes.botnav}
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                        clearTimeout(timer.current.timeoutID)
                        timer.current.timeoutID = setTimeout(() => setValue(''), 1000)
                    }}
                    // showLabels
                    // className={classes.root}
                    style={{
                    width: width,
                      position: 'fixed',
                      bottom: 0,
                    }}
                    >
                    <BottomNavigationAction className={classes.botnav} label="LinkedIn" 
                        value='LinkedIn' icon={<LinkedIn className={classes.icon} />} />
                    <BottomNavigationAction className={classes.botnav} label="Instagram" 
                        value='Instagram' icon={<Instagram className={classes.icon} />} />
                    <BottomNavigationAction className={classes.botnav} label="Twitter" 
                        value='Twitter' icon={<Twitter className={classes.icon} />} />
                    <BottomNavigationAction className={classes.botnav} label="Facebook" 
                        value='Facebook' icon={<Facebook className={classes.icon} />} />
                </BottomNavigation>
            </div>
        </>
    );
}