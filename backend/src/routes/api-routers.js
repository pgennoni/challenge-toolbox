import express from "express";
import FilesService from "../service/file-service.js";

const router = express.Router();

const asyncHandler = (fn) => (req, res, next) => {
  return Promise.resolve(fn(req, res, next)).catch(next);
};

router.get(
  "/files/data",
  asyncHandler(async (req, res) => {
    const fileService = new FilesService();
    res
      .status(200)
      .json(await fileService.getFilesData())
      .end();
  }),
);

export default router;
