import express from "express";
import  mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import env from "dotenv";
import postRoutes from "./routes/posts.js";

const app = express();

// environment variables configurator
env.config();

const PORT = process.env.PORT || 5000;

//db connections
// mongodb://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@cluster0-shard-00-00.exgok.mongodb.net:27017,cluster0-shard-00-01.exgok.mongodb.net:27017,cluster0-shard-00-02.exgok.mongodb.net:27017/${process.env.MONGO_DB_DBNAME}?ssl=true&replicaSet=atlas-82fukg-shard-0&authSource=admin&retryWrites=true&w=majority
mongoose.connect(
     `mongodb://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@cluster0-shard-00-00.exgok.mongodb.net:27017,cluster0-shard-00-01.exgok.mongodb.net:27017,cluster0-shard-00-02.exgok.mongodb.net:27017/${process.env.MONGO_DB_DBNAME}?ssl=true&replicaSet=atlas-82fukg-shard-0&authSource=admin&retryWrites=true&w=majority`,
     {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
     }
).then((message) =>{
     console.log('db connected successfully');
     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((e) => {
     console.log(e.message);
});

mongoose.set('useFindAndModify', false);

// setup middleware
app.use(express.json({ limit : '30mb', extended: true}));
app.use(express.urlencoded({
     extended: true,
     limit : '30mb'
}));
app.use(cors());

// routes
app.use('/posts', postRoutes);


