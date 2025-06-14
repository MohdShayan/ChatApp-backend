import express from 'express';
import { HandleUserSignup, HandleUserLogin } from '../controllers/user.controller';

const router = express.Router();

router.get("/user", (req, res) => {
  res.send("Hello router World");
});

router.post('/signup',HandleUserSignup);
router.post('/login', HandleUserLogin);

export default router;