import React, { Component } from "react";
import { useSelector } from "react-redux";

import Post from "./post/post";
import useStyles from './styles';

const Posts = () => {
     const posts = useSelector((state) =>state.posts); //this is the reducer from index.js reducer
     const classes = useStyles();


     console.log(posts);

     return (
          <>
               <h1>Posts</h1>
               <Post></Post>
               <Post></Post>
          </>
     );
}

export default Posts;