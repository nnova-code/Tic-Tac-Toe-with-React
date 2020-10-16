import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function Restart({onClick, variant}) {
  const classes = useStyles();

    return (
      <div className={classes.root} >
      <Button 
      variant={variant}
      color="primary" 
      onClick={onClick}
      >
        Play again
      </Button>
      </div>
    );
  }

export default Restart;


