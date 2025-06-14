import {CloudinaryStorage} from 'multer-storage-cloudinary';
import cloudinary from '../utils/cloudinary';
import multer from 'multer';

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'ProfilePics',
        allowed_formats: ['jpg', 'png', 'jpeg','webp'],
    }
});

const upload = multer({ storage: storage });
export const uploadProfilePic = upload.single('profilePic');