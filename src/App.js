import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { UserContextProvider } from './userContext';
import Navbar from  './components/Navbar';
import HomePage from './components/pages/HomePage';
import Blog from './components/pages/Blog';
import Footer from './components/Footer';
import PostPage from './components/pages/PostPage';
import LoginForm from './components/authorsPortal/Login';
import RegisterForm from './components/authorsPortal/Register';
import CreatePost from './components/pages/CreatePost';
import EditPost from './components/pages/EditPost';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

const theme = createTheme({
    typography: {
      fontFamily: 'Montserrat, Open Sans, Arial, sans-serif',
      h1: {
        fontFamily: 'Cinzel, Times, serif',
      },
      h2: {
        fontFamily: 'Cinzel, Times, serif',
      },
      h3: {
        fontFamily: 'Cinzel, Times, serif',
      },
      h4: {
        fontFamily: 'Cinzel, Times, serif',
      },
      h5: {
        fontFamily: 'Cinzel, Times, serif',
      },
      h6: {
        fontFamily: 'Cinzel, Times, serif',
      },
      body1: {
        fontFamily: 'Open Sans, Arial, sans-serif',
      },
      body2: {
        fontFamily: 'Open Sans, Arial, sans-serif',
      },
    },
  });

function App() {
    return (
        <ThemeProvider theme={theme}>
        <UserContextProvider>
            <Router>
                <Navbar />
            <Routes>
                <Route path = "/" element = {<HomePage />} />
                <Route path = "/blog" element = {<Blog />} />
                <Route path = "/postPage/:id" element = {<PostPage />} />
                <Route path = "/login" element = {<LoginForm />} />
                <Route path = "/register" element = {<RegisterForm />} />
                <Route path = "/create" element = {<CreatePost />} />
                <Route path = "/edit/:id" element = {<EditPost />} />
                <Route path = "/about" element = {<About />} />
                <Route path = "/contact" element = {<Contact />} />
            </Routes> 
            <Footer />
            </Router>
        </UserContextProvider>
        </ThemeProvider>
    );
  }
  
  export default App;