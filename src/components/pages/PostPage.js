import React, { useEffect, useState, useContext } from 'react';
import { Link,  useParams } from 'react-router-dom';
import { Typography, Box, CardMedia, Container, Button,} from '@mui/material'
import { formatISO9075 } from 'date-fns';
import { UserContext } from '../../userContext';

const PostPage = () => {
    const [postInfo, setPostInfo]= useState (null);
    const {userInfo}= useContext(UserContext);
    const {id}= useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/post/${id}`)
        .then(response => {
            response.json().then(postInfo => {
                setPostInfo(postInfo);
            })
        })
    }, [])

  return (
    <Container sx={{mb: 4}}>
        {postInfo &&
        <>
        {userInfo && userInfo.id === postInfo.author._id && (
           <Button variant= 'outlined' component={Link} to={`/edit/${postInfo._id}`} sx={{display: 'flex', alignItems: 'center'}}>
            Edit Post
           </Button>
        )}
        <Box display={'flex'} gap={2} marginY={2}>
            <Typography variant='body2' color={'textSecondary'}>By {postInfo.author.username}</Typography>
            <Typography variant='body2' color={'textSecondary'}>{formatISO9075(new Date(postInfo.createdAt))}</Typography> 
        </Box>
        <Typography  variant='h5'>{postInfo.title}</Typography>
        <Box>
            <CardMedia
            height={'550px'}
            width={'100%'}
            component= {'img'}
            alt= 'post image'
            image= {`http://localhost:5000/${postInfo.cover}`}
            title= 'post image' />
            <Box>
        </Box>
        <Box >
            <Typography variant='body1' dangerouslySetInnerHTML={{ __html: postInfo.content }} 
              sx={{overflow: 'hidden', wordWrap: 'break-word', '& p': { margin: 0 }}} />
        </Box>
        </Box>
        </>
        }
    </Container>
  )
}

export default PostPage