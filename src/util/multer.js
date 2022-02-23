const multer = require("multer");
const path = require("path");
const { FILE_MAX_SIZE } = require("../config");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: function (req, file, cb) {
    cb(
      null,
      "__" +
        file.mimetype.split("/")[0] +
        "__" +
        Date.now() +
        path.extname(file.originalname)
    );
  },
});

const uploadMedia = multer({
  storage: storage,
  limits: { fileSize: FILE_MAX_SIZE * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype.split("/")[0] === "image" ||
      file.mimetype.split("/")[0] === "video"
    ) {
      cb(null, true);
    } else {
      cb(null, false);

      req.fileFormatError = "Only image and video format allowed!";
    }
  },
});

const uploadImage = multer({
  storage: storage,
  limits: { fileSize: FILE_MAX_SIZE * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.split("/")[0] === "image") {
      cb(null, true);
    } else {
      cb(null, false);

      req.fileFormatError = "Only image format allowed!";
    }
  },
});

module.exports = { uploadMedia, uploadImage };
