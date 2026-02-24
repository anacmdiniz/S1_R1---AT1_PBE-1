import produtoController from "../controllers/produto.controller.js";
import Router from "express";

const produtoRoutes = Router();

produtoRoutes.post('/produtos', produtoController.criarProduto);
produtoRoutes.get('/produtos', produtoController.listarProdutos);

export default produtoRoutes;