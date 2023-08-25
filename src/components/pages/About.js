import React from 'react';
import { Box, Typography, Paper, Container, Button, Divider } from '@mui/material';

const About = () => {

    const handleTip = () => {
        // Here, you can redirect the user to your PayPal.me link or open a modal for tipping.
        window.location.href = "https://www.paypal.me/";
      };

  return (
    <Container>
      <Box mb={4}>
        <Box bgcolor={'#fafafa'} py={3} textAlign={'center'}>
        <Typography variant="h4" gutterBottom>
            Towards Prosperity
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          Our journey, our vision, and our commitment to Tanzania.
        </Typography>
        </Box>
        <Box my={3}>
            <Paper 
              src="https://res.cloudinary.com/dx3sjwzbr/image/upload/v1687812707/SVGS/About-Us_jbccb1.jpg" 
              alt="TajiriTZ Image" 
              sx={{ height: 300, width: '100%', backgroundSize: 'cover' }} 
            />
        </Box>
        <Box>
            <Typography variant="body1" paragraph>
              TajiriTZ was founded with the intent of offering unique insights, ideas, and strategies related to economics and investments for Tanzanians. We're passionate about ensuring every Tanzanian has the opportunity to learn, understand, and ultimately benefit from our country's economy.
            </Typography>
            <Typography variant="body1"paragraph>
              Our goal is to unlock doors of opportunity and knowledge for all, to provide accurate information, and to inspire entrepreneurship and investments. We believe that together, we can make a transformative impact on many lives, bringing about sustainable development in Tanzania.
            </Typography>
        </Box>
      </Box>

      <Box mb={4} bgcolor={'#fafafa'} py={3}>
        <Container>
        <Typography variant="h4" gutterBottom>
        Support TajiriTZ
        <Divider sx={{width: 100, py:1,}} />
        </Typography> 
        <Typography variant="body1" color="textSecondary" paragraph>
        Thank you for being a part of our TajiriTZ community! We're dedicated to providing you with insightful and actionable content about the Tanzanian economy.
        </Typography>
        <Typography variant="body2" color="textSecondary" paragraph>
        Producing high-quality content and maintaining this platform involves costs. If you've found our content valuable and would like to support us, consider leaving a tip. Your contributions help us continue our work and serve you better.
        </Typography>
        <Typography variant="body2" color="textSecondary" paragraph>
        No amount is too small, and every bit is appreciated. Remember, tipping is entirely optional but immensely appreciated.
        </Typography>
        <Button variant="outlined" color="primary" onClick={handleTip}>
        Leave a Tip
        </Button>
        </Container>
    </Box>
    </Container>
  );
}

export default About;
