import React, { Component } from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
import Post from "./post/post";
import useStyles from './styles';

const Posts = () => {
     const posts = useSelector((state) =>state.posts); //this is the reducer from index.js reducer
     const classes = useStyles();


     console.log(posts);

     return (
          !posts.length ? <CircularProgress /> : (
               <Grid className={classes.container}>
                    
               </Grid>
          )
     );
}

export default Posts;