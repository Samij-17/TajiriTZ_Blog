import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import {UserContext} from '../../userContext';
import { Container,Button, TextField, Grid, Typography } from "@mui/material";

function LoginForm (){
    const [username, setUserName]= useState ('');
    const [password, setPassword]= useState ('');
    const {setUserInfo}= useContext(UserContext);
    const navigate= useNavigate ('');

     async function login (ev){
        ev.preventDefault();
        const response= await fetch ('http://localhost:5000/login',{
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type':'application/json'},
            credentials: 'include',
        });
        if  (response.ok) {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
                navigate ('/')
            }); 
        } else {
            alert ('wrong credentials')
        }
     };
         
    return (
        <Container sx={{ mb: 4, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <form onSubmit={login}>
            <Grid container direction="column" spacing={2} alignItems="center">
                <Grid item>
                    <TextField
                        label= "Username"
                        type= "username"
                        value={username}
                        onChange={ev=> setUserName(ev.target.value)}
                    />
                </Grid>
                <Grid item>    
                    <TextField
                        label= "Password"
                        type= "password"
                        value={password}
                        onChange={ev=> setPassword(ev.target.value)}
                     />
                </Grid>
                <Grid item>
                <Button
                        type= "submit"
                        variant="contained">
                    LOGIN
                </Button>
                </Grid>
                <Grid item display={"flex"} alignItems={'center'} gap={1}>
                    <Typography>Don't have an account?</Typography>
                    <Link to= "/register">Register here</Link>
                </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default LoginForm;