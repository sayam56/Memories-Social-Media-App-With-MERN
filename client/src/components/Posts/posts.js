import React, { Component } from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
import Post from "./post/post";
import useStyles from './styles';

const Posts = ({setCurrentID}) => {
     const posts = useSelector((state) =>state.posts); //this is the reducer from index.js reducer
     const classes = useStyles();


     console.log(posts);

     return (
          !posts.length ? <CircularProgress /> : (
               <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {posts.map((post) => (
                         <Grid key={post._id} item xs={12} sm={6}>
                              <Post post={post} setCurrentID={setCurrentID} />
                         </Grid>
                    ))}
               </Grid>
          )
     );
}

export default Posts;