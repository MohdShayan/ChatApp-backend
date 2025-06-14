import express from 'express';
import { HandleUserSignup, HandleUserLogin } from '../controllers/user.controller.js';
import { uploadProfilePic } from '../middlewares/multer.js';

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello USER router World");
});

router.post('/signup',uploadProfilePic,HandleUserSignup);
router.post('/login', HandleUserLogin);

export default router;