import axios from "axios";

const url = 'http://localhost:2000/posts';

export const fetchPosts = () => axios.get(url);