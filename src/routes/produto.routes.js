import { Router } from "express";
import produtoController from "../controllers/produto.controller.js";

const produtoRoutes = Router();

produtoRoutes.post('/produtos', produtoController.criarProduto);
produtoRoutes.get('/produtos', produtoController.listarProduto);
// produtoRoutes.put('/produtos/:idProduto', produtoController.atualizarProduto);
// produtoRoutes.delete('/produtos:/idProduto', produtoController);

export default produtoRoutes;