import express from "express";
import { getPosts, createPost, updatePost, deletePost , likePost} from '../controllers/posts.js';
const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost); // for update we need patch and and dynamic parameter id to update
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;
