import express from "express";
import { getPosts } from "../controller/postsCon.js";

const router = express.Router();

router.get('/', getPosts);

export default router;