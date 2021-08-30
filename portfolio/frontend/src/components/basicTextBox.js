import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 1500,
    color: theme.palette.primary.light,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',  
    alignItems: 'center',
    margin: 'auto',
  },
}))


export default function BasicTextBox({ text, variant, textJustify='center'}) {
    const classes = useStyles();

    return (
        <div className={classes.root}  style={{textAlign: textJustify}}>
            <Typography variant={variant} component="h2" gutterBottom>
                {text}
            </Typography>
        </div>
    )
}