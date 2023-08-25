import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import {Typography, Container,Button, TextField, Grid } from "@mui/material";

function RegisterForm (){
    const [username, setUserName]= useState('');
    const [password, setPassword]= useState('');
    const navigate= useNavigate ('');
    
    //endpoint
    async function register(ev) {
        ev.preventDefault();
        const response= await fetch('http://localhost:5000/register', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'content-type': 'application/json' }
        });
        if (response.status === 200) {
            alert('Registartion Successful');
            navigate ('/login');
        } else {
            alert ('Registration Failed');
        }    
    }

    return (
        <Container sx={{ mb: 4, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <form onSubmit={register}>
            <Grid container direction="column" spacing={2} alignItems="center">
                <Grid item>
                    <TextField
                        label= "Username"
                        type= "text"
                        value={username}
                        onChange={ev=> setUserName(ev.target.value)} />
                </Grid>
                <Grid item>    
                    <TextField
                        label= "Password"
                        type= "password"
                        vaalue={password}
                        onChange={ev=> setPassword(ev.target.value)} />
                </Grid>
                <Grid item>
                <Button
                        type= "submit"
                        variant="contained">
                    REGISTER
                </Button>
                </Grid>
                <Grid item display={"flex"} alignItems={'center'} gap={1}>
                    <Typography>Have an account?</Typography>
                    <Link to= "/login">Login here</Link>
                </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default RegisterForm;
