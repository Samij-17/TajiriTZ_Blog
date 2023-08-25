import React from 'react';
import { Box, Typography, Grid, TextField, Button, Container } from '@mui/material';

const Contact = () => {
  return (
    <Container>
    <Box mb={4}>
      <Box bgcolor={'#fafafa'} py={3}>
      <Typography variant="h5" gutterBottom align="center">
        Get in Touch
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" paragraph align="center">
        Whether you have a question or just want to say hello, we'd love to hear from you!
      </Typography>
      </Box>  

      <Grid container spacing={4} justifyContent="center" mt={1}>
        <Grid item xs={12} md={5}>
          <Box display="flex" flexDirection="column" height="100%">
            <Box mb={3}>
              <Typography variant="h6" color="textPrimary">
                Address:
              </Typography>
              <Typography variant="body1">
                Dar es salaam, Tanzania <br />
              </Typography>
            </Box>

            <Box mb={3}>
              <Typography variant="h6" color="textPrimary">
                Email:
              </Typography>
              <Typography variant="body1">
                muyabisamiji@gmail.com
              </Typography>
            </Box>

            <Box mb={3}>
              <Typography variant="h6" color="textPrimary">
                Phone:
              </Typography>
              <Typography variant="body1">
                +255 654 532 626
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={7}>
          <Box component="form" display="flex" flexDirection="column" gap={2.5}>
            <TextField 
              fullWidth 
              variant="outlined" 
              label="Name" 
              placeholder="Samij Pro"
            />
            <TextField 
              fullWidth 
              variant="outlined" 
              label="Email" 
              type="email" 
              placeholder="samijpro@example.com"
            />
            <TextField 
              fullWidth 
              variant="outlined" 
              label="Message" 
              multiline 
              rows={4} 
              placeholder="Your message here..."
            />
            <Button variant= "outlined" color="primary" type="submit" size="large">
              Submit
            </Button>
          </Box>
        </Grid>
        
      </Grid>
    </Box>
    </Container>
  );
}

export default Contact;
