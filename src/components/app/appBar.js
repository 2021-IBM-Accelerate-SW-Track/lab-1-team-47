import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
root: {
    flexGrow: 1,
    backgroundColor: "#DBE6F6",
  
},
custom: {
    color: "#C5796D",
    fontWeight: "bold",
    fontFamily: "Georgia"
}
}));

export default function DenseAppBar() {
const classes = useStyles();

return (
    <div className={classes.root}>
    <AppBar position="static" color="inherit">
        <Toolbar variant="dense" className={classes.root}>
        <Typography variant="h6" className = {classes.custom}>
            To Do
        </Typography>
        </Toolbar>
    </AppBar>
    </div>
);
}