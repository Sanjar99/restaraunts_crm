const { uploadMedia, uploadImage } = require("../util/multer");
const { FILE_MAX_SIZE } = require("../config");

const imageUpload = (req, res, next) => {
  return uploadImage.single("image")(req, res, (err) => {
    if (err) {
      if (err.code === "LIMIT_FILE_SIZE") {
        return res.status(400).json({
          message: `file max size ${FILE_MAX_SIZE} mg`,
        });
      }
      return res.status(400).json({
        message: err.message,
      });
    } else {
      if (req.fileFormatError) {
        return res.status(400).json({
          message: req.fileFormatError,
        });
      } else if (!req.file) {
        return next();
      } else {
        return next();
      }
    }
  });
};

const mediaUpload = (req, res, next) => {
  return uploadMedia.array("media", 7)(req, res, (err) => {
    if (err) {
      if (err.code === "LIMIT_FILE_SIZE") {
        return res.status(400).json({
          message: `file max size ${FILE_MAX_SIZE} mg`,
        });
      }
      return res.status(400).json({
        message: err.message,
      });
    } else {
      if (!req.files.length) {
        return res.status(400).json({
          message: "media kirgizish shart!",
        });
      } else {
        return next();
      }
    }
  });
};

const mediaUploadUpdate = (req, res, next) => {
  return uploadMedia.array("media", 7)(req, res, (err) => {
    if (err) {
      if (err.code === "LIMIT_FILE_SIZE") {
        return res.status(400).json({
          message: `file max size ${FILE_MAX_SIZE} mg`,
        });
      }
      console.log('err:',err);
      return res.status(400).json({
        message: err.message,
      });
    } else {
      return next();
    }
  });
};

const deleteUpload = (file) => {
  if (file === null) {
    return;
  } else if (typeof file === "object") {
    file.forEach((element) => {
      unlink(join(__dirname, "../upload", element), (er) => {
        console.log(er);
      });
    });
  } else {
    unlink(join(__dirname, "../upload", file), (er) => {
      console.log(er);
    });
  }
};

module.exports = { imageUpload, mediaUpload, mediaUploadUpdate , deleteUpload};
