import categoriaController from "../controllers/produto.controller.js";
import Router from "express";

const categoriaRoutes = Router();

categoriaRoutes.post('/produtos', categoriaController.criarCategoria);
categoriaRoutes.get('/produtos', categoriaController.listarCategorias);

export default produtoRoutes;