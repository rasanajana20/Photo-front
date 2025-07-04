import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import './contact.css';

function Contact() {
  return (
    <div className="contact_container">
      <h2>Contact Me</h2>

      <div className="details_contact">
        <Box component="form" sx={{ width: '100%' }}>
          <TextField
            id="outlined-name"
            label="Name"
            variant="outlined"
            fullWidth
          />
        </Box>
      </div>

      <div className="details_contact">
        <Box component="form" sx={{ width: '100%' }}>
          <TextField
            id="outlined-email"
            label="Email"
            variant="outlined"
            fullWidth
          />
        </Box>
      </div>

      <div className="details_contact">
        <Box component="form" sx={{ width: '100%' }}>
          <TextField
            id="outlined-subject"
            label="Subject"
            variant="outlined"
            fullWidth
          />
        </Box>
      </div>

      <div className="details_contact">
        <Box component="form" sx={{ width: '100%' }}>
          <TextField
            id="outlined-phone"
            label="Phone"
            variant="outlined"
            fullWidth
          />
        </Box>
      </div>

      <div className="details_contact">
        <Box component="form" sx={{ width: '100%' }}>
          <TextField
            id="outlined-message"
            label="Message"
            variant="outlined"
            multiline
            fullWidth
          />
        </Box>
      </div>

      <div className="contact_button">
        <Button variant="contained" color="primary">Submit</Button>
      </div>
    </div>
  );
}

export default Contact;
