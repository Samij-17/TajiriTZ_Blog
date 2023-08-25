import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Box, Button, Grid } from '@mui/material'
import { formatISO9075 } from 'date-fns';

const Post = ({post}) => {
  return (
    <Box sx={{mb: 3}}>
      <Grid container spacing={2}>
        <Grid item xs= {12}>
          <Typography component={Link} to={`/postPage/${post._id}`}  variant='h5' color={'inherit'} sx={{ textDecoration: 'none', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',}}>{post.title}</Typography>
        </Grid>
        <Grid item xs= {12}>
          <Link to= {`/postPage/${post._id}`}>
            <img height={200} width= "100%" src= {`http://localhost:5000/${post.cover}`} alt='' style={{objectFit: 'cover'}} />
          </Link>
        </Grid>
        <Grid item xs= {12}>
          <Box display= 'flex' gap={1}>
            <Typography variant='body2' color={'textSecondary'}>{post.category}</Typography>    
            <Typography variant='body2' color={'textSecondary'}>{formatISO9075(new Date(post.createdAt))}</Typography>
          </Box>
        </Grid>
        <Grid item xs= {12}>
        <Typography variant='body1' color={'textSecondary'} sx={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            position: 'relative',
            '&:after': {
              content: '""',
              textShadow: '0 0 10px white, 0 0 10px white, 0 0 10px white',
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: '50%',
              height: '20px',
              background: 'linear-gradient(to right, transparent, white 80%)'
            }
        }}> {post.summary} </Typography>
        </Grid>
        <Grid item xs= {12}>
        <Button component= {Link} to= {`/postPage/${post._id}`}>Read More</Button>
        </Grid> 
      </Grid>  
    </Box>
  )
}

export default Post