import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux'
import PersonIcon from '@material-ui/icons/Person'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    height:500,
  },
  card: {
    minWidth: 275,
  },
}));

export default props => {
  const messages = useSelector(appState => appState.chatReducer.messages.filter(message => message.room === props.room))
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h5" component="h2">
        Messages  
      </Typography>
      <Paper className={classes.root}>
        {messages.map((message, i) => (
          <div key={'message' + i} className={classes.card}>
            <PersonIcon />
            <Typography variant="h6" component="h3">
              {message.username}:
            </Typography>
            <Typography variant="body2" component="p">
              {message.text}
            </Typography>
          </div> 
        ))}
        
      </Paper>
    </div>
  );
}


