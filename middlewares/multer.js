import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../utils/cloudinary.js';

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    return {
      folder: 'Profile-pics',
      allowed_formats: ['jpg', 'png', 'jpeg', 'webp'],
    };
  },
});

const upload = multer({ storage });

export const uploadProfilePic = upload.single('profilePic');
