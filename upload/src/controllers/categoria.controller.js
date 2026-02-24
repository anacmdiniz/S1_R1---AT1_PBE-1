const { categoriaModel } = require("../models/categoriaModel");

const categoriaController = {

    listarCategorias: async (req, res) => {
        try {
            const categorias = await categoriaModel.buscarTodos();

            res.status(200).json(categorias);
        } catch (error) {
            console.error('Erro ao listar categorias', error);
            res.status(500).json({ message: 'Erro ao buscar categorias.' });
        }
    },
    criarCategoria: async (req, res) => {
        try {
            const {descricaoCategoria } = req.body;

            if (descricaoCategoria == undefined) {
                return res.status(400).json({ erro: 'Campos obrigatórios não preenchidos!' });
            }

            await categoriaModel.criarCategoria(descricaoCategoria);
            res.status(201).json({ message: 'categoria cadastrada com sucesso' });
        } catch (error) {
            console.error('Erro ao cadastrar categoria', error);
            res.status(500).json({ erro: 'Erro no servidor ao cadastrar produto!' });
        }
    }
}



module.exports = { categoriaController };