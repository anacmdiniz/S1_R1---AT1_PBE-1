import imagemController from "../controllers/produto.controller.js";
import uploadImage from "../middlewares/uploadImage.middleware.js";
import Router from "express";

const imagemRoutes = Router();

imagemRoutes.post('/produtos/imagens', uploadImage, imagemController.upload);

export default imagemRoutes;