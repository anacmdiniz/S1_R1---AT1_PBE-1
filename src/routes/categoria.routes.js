import { Router } from "express";
import categoriaController from "../controllers/categoria.controller.js";

const categoriaRoutes = Router();

categoriaRoutes.post('/categorias', categoriaController.criarCategoria);
categoriaRoutes.get('/categorias', categoriaController.listarCategoria);
//categoriaRoutes.put('/categorias/:idcategoria', categoriaController.atualizarCategoria);
//categoriaRoutes.delete('/categorias/:idCategoria', categoriaController.deletarCategoria);

export default categoriaRoutes;
