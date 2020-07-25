import React from 'react';
import './App.css';
import icon from './photos/camera-icon.jpg';
import ContactMe from './ContactMe.js';
import ImageGallery from './ImageGallery';
import { createMuiTheme } from '@material-ui/core/styles';
import { CardHeader, Card, Container, AppBar, IconButton, Toolbar, Typography,
   ThemeProvider, Grid, BottomNavigation, BottomNavigationAction } from '@material-ui/core';

import EmailIcon from '@material-ui/icons/Email';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function App() {
  return (
    <div style={{background:"#c7c5c5"}}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color='inherit'>
          <Toolbar>
          <Grid
            justify="space-between"
            alignItems="center"
            container 
            spacing={24}
          >
            <Grid item>
              <IconButton edge="start" color='inherit' aria-label="menu">
                <img
                  src={icon}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography variant="h4" style={{color:"white", float:"right"}}>
                Krystyka Lynn Photography
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" style={{color:"white", float:"right"}}>
                Contact Me
              </Typography>
            </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Container>
          <Container>
            <Typography variant="h6" style={{color:"black", textAlign:"center"}}>
              Product Photography
            </Typography>
            <Card>
              <ImageGallery />
            </Card>
          </Container>
        </Container>
        <AppBar position="fixed" color="inherit" className="appBarBottom">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="open drawer">
              <ContactMe />
            </IconButton>
          </Toolbar>
        </AppBar>
        
      </ThemeProvider>
    </div>
  );
}

export default App;
