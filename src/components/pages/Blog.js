import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Typography, Grid, CardMedia, Container, Divider, Box } from '@mui/material'
import { formatISO9075 } from 'date-fns';

const Blog = () => {
    const [posts, setPosts]= useState ([]);

    useEffect(() => {
        fetch('http://localhost:5000/post')
        .then(response =>{
            if (!response.ok) {
                throw new Error ('Network response was nooot ok');
            }
            return response.json();
            })
            .then(posts => {
                setPosts(posts);
            })
            .catch(error => {
                console.error ("There ws a problem with fetch operation", error.message);
            });
    }, [])

  return (
    <Container>
        {posts.length > 0 && posts.map(post =>
            <Grid container spacing={4} mb={4} >
                <Grid  item xs={12} sm={6} lg={4}>
                    <Link to={`/postPage/${post._id}`}>
                    <CardMedia
                        component='img' 
                        height={'200px'}
                        title='post image'
                        image={`http://localhost:5000/${post.cover}`} 
                        alt='post image'/>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} lg={8}>
                    <Typography 
                        component={Link} 
                        to={`/postPage/${post._id}`} 
                        variant='h5'
                        sx={{
                            textDecoration: 'none', 
                            color: 'inherit',
                            overflow: 'hidden',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',}}
                        >{post.title}</Typography>
                    <Box display= 'flex' gap={1}>
                        <Typography variant='body2' color={'textSecondary'}> {post.category} </Typography>    
                        <Typography variant='body2' color={'textSecondary'}>{formatISO9075(new Date(post.createdAt))}</Typography>
                    </Box>
                    <Divider sx={{my: 2}}/>
                    <Typography variant='body1'>{post.summary}</Typography>
                </Grid>
            </Grid>
            )}
    </Container>
  )
};

export default Blog