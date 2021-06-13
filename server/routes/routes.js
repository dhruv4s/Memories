import express from 'express';
import {getRequest,postRequest, updateRequest, deleteRequest, updateLikes} from '../controllers/routes.js'

const router = express.Router();

router.get('/', getRequest);
router.post('/', postRequest);
router.patch('/:id', updateRequest);
router.delete('/:id', deleteRequest);
router.patch('/:id/likeMemory', updateLikes);

export default router;