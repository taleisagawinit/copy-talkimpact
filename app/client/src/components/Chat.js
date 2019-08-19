import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send"
import Button from "@material-ui/core/Button"
import { sendMessage } from '../actions/chat.actions'

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    alignItems: "center",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  submit: {
    // margin: theme.spacing(3, 0, 2),
    height: 55,
  },
}));

export default function OutlinedTextFields() {
  const classes = useStyles();
  const [message, setMessage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    sendMessage(message)
    setMessage('')
  }

  return (
    <form className={classes.container} onSubmit={handleSubmit} noValidate autoComplete="off">
      <TextField
        id="outlined-multiline-flexible"
        label="Multiline"
        multiline
        rowsMax="3"
        value={message}
        fullWidth
        onChange={e => setMessage(e.target.value)}
        className={classes.textField}
        margin="normal"
        variant="outlined"
        placeholder="Your message"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.submit}
        size="small"
        onClick={handleSubmit}
      >
      <SendIcon style={{ fontSize: 20 }}/>
      </Button>
    </form>
  );
}
