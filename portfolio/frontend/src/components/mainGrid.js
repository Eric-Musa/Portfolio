import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const cellHeight = '40px'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: "#FFF",
        backgroundColor: theme.palette.secondary.main,
        height: cellHeight,
        overflow: "hidden",
        whiteSpace: "nowrap",
        [theme.breakpoints.down('xs')]: {
            fontSize: "1.0rem"
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: "1.4rem"
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "1.8rem"
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: "2.2rem"
        },
    },
    whitePaper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: "#000",
        backgroundColor: theme.palette.primary.dark,
        height: cellHeight,
        overflow: "hidden",
        whiteSpace: "nowrap",
        [theme.breakpoints.down('xs')]: {
            fontSize: "1.0rem"
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: "1.4rem"
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "1.8rem"
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: "2.2rem"
        },
    },
    outerGrid: {
        width: '100%',
        overflow: 'auto',
        margin: '0',
    },
}));


// function allocateRowCells1 (xs, rows) {
//     const factors = [...Array(xs + 1).keys()].filter(i => xs % i === 0)
//     // based on:
//     // const factors = number => [...Array(number + 1).keys()].filter(i=>number % i === 0);
//     // by `Guy` on https://stackoverflow.com/questions/22130043/trying-to-find-factors-of-a-number-in-js/43802308
//     const rowCells = []
//     for (let i=0; i<rows; i++) {
//         const rng = Math.random() * xs
//         let shortestDiff = xs
//         let closestFactor = -1
//         for (let j=0; j<factors.length; j++) {
//             const factor = factors[j]
//             const diff = Math.abs(rng - factor)
//             if (diff < shortestDiff) {shortestDiff = diff; closestFactor = factor}
//         }
//         rowCells.push(closestFactor)
//     }
//     return rowCells
// }

function allocateRowCells (xs, rows, keyWords) {

    function allocateRow (xs, validSizes=[1, 2, 3, 4, 5], validCells=[3, 4, 5]) {
        let allocation = []
        let count = 0
        while (allocation.reduce((acc, cur) => (acc + cur), 0) != xs) {
            allocation = []
            const nCells = validCells[Math.floor(Math.random() * validCells.length)]
            for (let i=0; i<nCells; i++) {
                allocation.push(validSizes[Math.floor(Math.random() * validSizes.length)])
            }
            count++;
            // if (count > 100) {break}
        }
        // console.log(count, allocation)
        const finalAlloc = []
        for (let i=0; i<allocation.length; i++) {
            finalAlloc.push([allocation[i], keyWords[Math.floor(Math.random()*keyWords.length)]])
        }
        return finalAlloc
    }
    
    const rowCells = []
    for (let i=0; i<rows; i++) {
        rowCells.push(allocateRow(xs))
    }

    return rowCells
}


// function GridRow ({ nCells, outerXs, cellHeightVar=0.} ) {
//     const classes = useStyles();

//     const cellSizes = []
//     for (let i=0; i<nCells; i++) {cellSizes.push(outerXs/nCells)}
//     // console.log(nCells, outerXs, cellSizes)
//     return (
//         <>
//             {cellSizes.map((cellXs, i)=>(
//                 <Grid item xs={cellXs} wrap='nowrap'>
//                     <Paper className={classes.paper}>text</Paper>
//                 </Grid>
//             ))}
//         </>
//     )
// }


function GridRow ({ cellSizes, cellHeightVar=0., cellWidthvar=0.} ) {
    const classes = useStyles();
    return (
        <>
            {cellSizes.map(([cellXs, keyWord], i)=>{
                const hideCell = (cellXs == 1) ? true : 
                    (Math.random() < Math.pow(1/cellXs, 1.5) ? true : false)
                return (
                    <Grid item xs={cellXs} wrap='nowrap'>
                        <Paper className={hideCell ? classes.whitePaper : classes.paper}>
                        {hideCell ? '' : keyWord}</Paper>
                    </Grid>
                )
            })}
        </>
    )
}


export default function MainGrid ({ keyWords, rows}) {
    const classes = useStyles();
    const xs = 12;
    const rowCells = allocateRowCells(xs, rows, keyWords)
    console.log('rowcells', rowCells)
    
    return (
        <div className={classes.root}>
            <Grid container spacing={2} className={classes.outerGrid}>
                {rowCells.map((nCells, i) => (
                    <GridRow cellSizes={nCells} outerXs={xs}></GridRow>
                ))}
            </Grid>
        </div>
    );
}
