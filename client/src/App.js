import React, { Component } from "react";
import { Container, AppBar, Grow, Grid, Typography } from '@material-ui/core';
import moments from './images/moments.png';
import Posts from "./components/Posts/posts";
import Forms from "./components/Forms/form";
import useStyles from './styles';

function App() {
  const classes = useStyles();

  return (
    <Container maxwidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
          <Typography className={classes.heading} variant='h2' align='center'>Moments</Typography>
            <img className={classes.image} src={moments} alt='moments' height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Forms/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
