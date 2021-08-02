import PostMessage from "../model/postsMessage"

export const getPosts = (req, res) => {
     res.send('this works?')
}

export const createPost = async (req, res) => {
     const post = req.body;

     const newPost = new PostMessage(post);

     try {
          await newPost.save();

          res.status(201).json(newPost);
     } catch (error) {
          res.status(409).json({
               message : error.message,
          });
     }
}