import React, { useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '../editor';
import { TextField, Grid, Button, Container } from '@mui/material';


function CreatePost() {
    const [title, setTitle]= useState ('');
    const [summary, setSummary]= useState ('');
    const [category, setCategory]= useState ('');
    const [content, setContent]= useState ('');
    const [files, setFiles]= useState ('');
    const navigate= useNavigate();

    async function createNewPost(ev) {
        const data= new FormData();
        data.set ('title', title);
        data.set ('summary', summary);
        data.set ('category', category);
        data.set ('content', content);
        data.set ('file', files[0]);
        ev.preventDefault();
        await fetch('http://localhost:5000/post', {
            method: 'POST',
            body: data,
            credentials: 'include',
        });
        navigate('/blog')
    }; 

  return (
    <Container sx={{mb: 4}}>
    <form onSubmit={createNewPost}>
        <Grid container direction="column" spacing={2}>
            <Grid item>
                <TextField 
                fullWidth 
                type='title' 
                label= 'Title'
                value= {title}
                onChange={ev => setTitle(ev.target.value)} />
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
                >Post</Button>
            </Grid>
        </Grid>
    </form>
    </Container>
  )
}

export default CreatePost