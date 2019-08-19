import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux'
import PersonIcon from '@material-ui/icons/Person'
import moment from 'moment'
import Linkify from 'react-linkify'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    height:500,
    overflow: "scroll",
  },
  card: {
    minWidth: 275,
  },
  image: {
    width: 200,
  }
}));

export default props => {
  const messages = useSelector(appState => appState.chatReducer.messages.filter(message => message.room === props.room))
  const classes = useStyles();

  // h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline","srOnly","inherit"]

  return (
    <div>
      <Typography variant="h5" component="h2">
        Messages  
      </Typography>
      <Paper className={classes.root}>
        {messages.map((message, i) => {
          const regex = /(https?:\/\/.*\.(?:png|jpg|gif))/i
          let img = ''
          if (regex.test(message.text)){
            const match = message.text.match(regex)
            img = <img className={classes.image} src={match[0]} alt={message.text} />
          }

          return (
            <div key={'message' + i} className={classes.card}>
              <Typography variant="h6" component="h3">
                <PersonIcon />{message.username}:
              </Typography>
              <Typography variant="body2" component="p">
                <Linkify>{message.text}</Linkify>
              </Typography>
              <Typography variant="caption" component="p">
                {moment(message.time).fromNow()}
              </Typography>
              {img ? <div >{img}</div> : ''}
            </div> 
          )
        })}
        
      </Paper>
    </div>
  );
}


