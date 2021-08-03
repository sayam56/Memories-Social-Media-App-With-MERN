import axios from "axios";

const url = 'http://localhost:2000/posts';

export const fetchPosts = () => {
     axios
       .get(url)
       .then(res => console.log('fetch successful'))
       .catch(err => console.error(err));
}