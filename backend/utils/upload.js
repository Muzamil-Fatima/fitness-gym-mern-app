import multer from "multer";
import path from "path";

// File storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, "uploads/");
  },
});

// Image file check
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("images/")) {
    cb(null, true);
  } else {
    cb(new Error("Only Image File are allowed"), false);
  }
};

// mutable instance
const upload = multer({ storage, fileFilter });

export default upload;
