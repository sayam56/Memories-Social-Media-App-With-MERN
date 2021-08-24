import PostMessage from "../model/postsMessage.js"

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

export const updatePost = async (req,res) => {
     // rename the de-structured ID to _id
     const { id: _id } = req.params;

     const post = req.body;

     if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with this ID');

     const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new:true });

     res.json(updatedPost);
}