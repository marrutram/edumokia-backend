import express from 'express';
import controller from '../controllers/posts';
const router = express.Router();

router.get('/test', controller.getPosts);
router.get('/test/:id', controller.getPost);
router.put('/test/:id', controller.updatePost);
router.delete('/test/:id', controller.deletePost);
router.post('/test', controller.addPost);

export = router;