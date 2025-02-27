import express from "express";
import ComicController from "../controllers/comicController.js";

const routes = express.Router();

routes.get("/comics", ComicController.getComics);
routes.get("/comics/:id", ComicController.getComicsById);
routes.post("/comics", ComicController.postComic);
routes.patch("/comics/:id", ComicController.patchComic);
routes.delete("/comics/:id", ComicController.deleteComic);

export default routes;