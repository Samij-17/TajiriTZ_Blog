import React, { useEffect, useState } from 'react'
import { Box, Container, Grid, Typography, TextField, Button, Divider, Paper } from '@mui/material'
import Post from '../Post'
import { Link } from 'react-router-dom';
import ArrowFowardIosIcon from '@mui/icons-material/ArrowForwardIos';

const HomePage = () => {
  const [posts, setPosts]= useState ([]);
  const [email, setEmail]= useState('');

useEffect(() => {
  fetch('http://localhost:5000/post').then(response => {
    response.json().then(posts => {
      setPosts(posts.slice(0, 3));
    })
  })
}, [])

const handleEmailSubmission= async (e) =>{
  e.preventDefault();
  try{
    const response= await fetch('http://localhost:5000/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: email})
    });

    const data= await response.json();

    if (data.success) {
      setEmail('');
      alert('Thank you for subscribing!')
    }else {
      alert('Something went wrong. Please try again.');
    }
  }catch(error){
    console.error("Error saving email", error);
  }
}

  return (
    <Container sx={{mb: 4}}>
      <Typography variant='h4'>Recent Updates</Typography>
      <Divider sx={{width: 100, py:1, mb: 1.5}} />
      <Box sx={{mb: 4}}>
        <Grid container spacing={3}>
        {posts.map ((post, index) => (
          <Grid item xs= {12} sm= {4} key={index} >
            <Post post={post} />
          </Grid>
        ))}
        </Grid>
        <Box display={'flex'} justifyContent={'flex-end'} >
          <Link to='/blog' style={{color: 'inherit'}}>
            <ArrowFowardIosIcon />
          </Link>
        </Box>
      </Box>
        <Grid container direction= 'column' align= 'center' spacing={2} mb={2}>
          <Box sx={{mb: 4, backgroundColor: '#fafafa', p: 3, borderRadius: 0.5}}>
            <Grid item>
              <Typography  variant="h5">Stay Updated with Our Latest News</Typography>
              <Typography variant="body2" color={'textSecondary'}>Enter your email address below.</Typography>
            </Grid>
            <Grid item>
              <form onSubmit={handleEmailSubmission}>
                <TextField 
                  fullWidth
                  type= "email"
                  label= 'Email'
                  value={email} 
                  placeholder="samijpro@example.com"
                  onChange={ev => setEmail(ev.target.value)}
                  sx={{marginBottom: 2}}/>
                  <Button type= 'submit' variant='outlined'>Subscribe</Button>
              </form>
            </Grid>
            </Box>
          </Grid>
      <Grid mb={4} display={'flex'} alignItems={'center'} justifyContent={'center'} gap={8}>
        <Grid item>
          <Paper elevation={1}>
          <Divider  />
          </Paper>
          <Typography component={Link} to= '/about' variant='h5' color="textSecondary" sx={{textDecoration: 'none', '&:hover': { color: ' black', transition: 'color 0.3s ease-in-out'}}}>About US</Typography>
        </Grid>
        <Grid item>
          <Typography component={Link} to= '/contact' variant='h5' color="textSecondary" sx={{textDecoration: 'none', '&:hover': { color: ' black', transition: 'color 0.8s ease-in-out'}}}>Contact Us</Typography>
          <Paper elevation={1}>
          <Divider  />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage