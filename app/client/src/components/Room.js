import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { setLogout } from '../actions/login.actions'
import Messages from './Messages'
import Chat from './Chat'
import { join } from '../actions/chat.actions'
import { Link } from 'react-router-dom'

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

  useEffect(() => {
    join(props.match.params.roomname)
  }, [props.match.params.roomname])

  function handleLogout(e) {
    e.preventDefault()
    setLogout()
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="md">
        <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleLogout}
            className={classes.submit}
          >
            Sign Out
        </Button>
        <Link to="/foobar">foobar</Link>
        <Link to="/general">general</Link>
        <Messages room={props.match.params.roomname} />
        <Chat room={props.match.params.roomname}/>
      </Container>
    </div>
  );
}
