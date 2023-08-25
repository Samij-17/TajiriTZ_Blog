import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <Box 
      mt="auto"
      py={3}
      bgcolor="transparent"
      borderTop={1} 
      borderColor="divider"
    >
      <Container maxWidth="lg">
        <Box 
          display="flex" 
          flexDirection="column" 
          alignItems="center"
          spacing={2}
        >
          <Box 
            display="flex" 
            justifyContent="space-around" 
            width={200}
            mb={2}
          >
            <a href='/'>
            <InstagramIcon color="action"/>
            </a>
            <a href='/'>
            <FacebookIcon color="action" />
            </a>
            <a href='/'>
            <WhatsAppIcon color="action" />
            </a>
          </Box>
          <Typography variant="body2" color="textSecondary">
            © 2023 TajiriTZ
          </Typography>
          <Typography variant="caption" color="textSecondary">
            Created and Designed by Samiji
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
