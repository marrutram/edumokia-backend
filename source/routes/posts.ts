import express from 'express';
import controller from '../controllers/posts';
const router = express.Router();

router.get('/edumokia-backend', controller.getPosts);
router.get('/edumokia-backend/:id', controller.getPost);
router.put('/edumokia-backend/:id', controller.updatePost);
router.delete('/edumokia-backend/:id', controller.deletePost);
router.post('/edumokia-backend/', controller.addPost);

export = router;