import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EmailIcon from '@material-ui/icons/Email';

export default class ContactMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: '', name: '', email: '', open:false};
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  render() {
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          <EmailIcon />
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Contact Me</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="name-entry"
                name="name-entry"
                onChange={this.handleNameChange}
                label="Enter Your Name"
                type="name"
                required
                fullWidth
              />
              <TextField
                
                margin="dense"
                id="email-entry"
                name="email-entry"
                onChange={this.handleEmailChange}
                label="Enter Your Email"
                type="email"
                required
                fullWidth
              />
              <TextField
                
                margin="dense"
                id="message-entry"
                name="message-entry"
                onChange={this.handleMessageChange}
                label="Enter Your Message"
                type="message"
                required
                multiline="true"
                rows="3"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleSubmit} color="primary">
                Send
              </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }

  handleMessageChange(event) {
    this.setState({message: event.target.value})
  }

  handleNameChange(event) {
    this.setState({name: event.target.value})
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value})
  }

  handleClickOpen() {
    this.setState({open: true})
  }

  handleClose() {
    this.setState({open: false})
  }

  handleSubmit (event) {
    const templateId = 'template_LxtzciqY';
  
    this.sendFeedback(templateId, {message_html: this.state.message, from_name: this.state.name, from_email: this.state.email})
    this.handleClose();
  }
  
  sendFeedback (templateId, variables) {
    window.emailjs.send(
      'gmail', templateId,
      variables
      ).then(res => {
        console.log('Email successfully sent!')
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }
}