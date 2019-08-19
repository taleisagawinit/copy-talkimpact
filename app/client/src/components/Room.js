import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { setLogout } from '../actions/login.actions'
import Messages from './Messages'
import Chat from './Chat'


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    borderWidth: 2,
    borderColor: "gray",
    borderStyle: "solid",
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: 'white',
  },

  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default props => {
  const classes = useStyles();

  function handleSubmit(e) {
    e.preventDefault()
    setLogout()
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="md">
        <form onSubmit={handleSubmit}>
          <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Out
            </Button>
          </form>
        <Messages room={props.match.params.roomname} />
        <Chat room={props.match.params.roomname}/>
      </Container>
    </div>
  );
}
