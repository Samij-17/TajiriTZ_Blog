import React, { useEffect, useState, } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Editor from '../editor';
import { TextField, Grid, Button, Container } from '@mui/material';


function EditPost() {
    const [title, setTitle]= useState ('');
    const [summary, setSummary]= useState ('');
    const [category, setCategory]= useState ('');
    const [content, setContent]= useState ('');
    const [files, setFiles]= useState ('');
    const navigate= useNavigate();
    const {id}= useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/post/${id}`)
        .then(response => {
            response.json().then(postInfo => {
                setTitle(postInfo.title);
                setContent(postInfo.content);
                setCategory(postInfo.category);
                setSummary(postInfo.summary);
            });
        });
    }, []);

    async function updatePost(ev) {
        ev.preventDefault();
        const data= new FormData();
        data.set ('title', title);
        data.set ('summary', summary);
        data.set ('category', category);
        data.set ('content', content);
        data.set ('id', id);
        if (files && files[0]) {
            data.set ('file', files[0]);
        }
        await fetch('http://localhost:5000/post', {
            method: 'PUT',
            body: data,
            credentials: 'include',
        });
        navigate(`/postPage/${id}`)
    };

    async function deletePost() {
       const confirmation= window.confirm("Are you sure you want to delete this post?");
        if (!confirmation) return;

        await fetch (`http://localhost:5000/post/${id}`, {
            method: 'DELETE',
            credentials: 'include',
        });

        navigate('/blog')
    }


  return (
    <Container sx={{mb: 4}}>
    <form onSubmit={updatePost}>
        <Grid container direction="column" spacing={2}>
            <Grid item>
                <TextField 
                fullWidth 
                type='title' 
                label= 'Title'
                value= {title}
                onChange={ev=> setTitle(ev.target.value)} />
            </Grid>
            <Grid item>
                <TextField 
                fullWidth 
                type='summary' 
                label= 'Summary'
                value= {summary}
                onChange={ev => setSummary(ev.target.value)} />
            </Grid>   
            <Grid item>
                <TextField 
                fullWidth 
                type='category' 
                label= 'Category'
                value= {category}
                onChange={ev => setCategory(ev.target.value)} />
            </Grid>  
            <Grid item>
                <TextField 
                fullWidth 
                type='file' 
                onChange={ev => setFiles(ev.target.files)}/>
            </Grid>
            <Grid item>
                <Editor value={content} onChange={setContent} />
            </Grid>
            <Grid item>
                <Button 
                fullWidth 
                type='submit' 
                variant='outlined'
                >Update Post</Button>
            </Grid>
            <Grid item>
                <Button
                variant= 'contained'
                color= 'error'
                onClick= {deletePost}
                >Delete Post</Button>
            </Grid>
        </Grid>
    </form>
    </Container>
  )
}

export default EditPost