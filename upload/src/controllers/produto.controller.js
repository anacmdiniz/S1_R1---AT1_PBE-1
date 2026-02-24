const { produtoModel } = require("../models/produtoModel");

const produtoController = {
    //---------------
    //Listar todos os produtos
    //Get /produtos
    //---------------
    listarProdutos: async (req, res) => {
        try {
            const produtos = await produtoModel.buscarTodos();

            res.status(200).json(produtos);
        } catch (error) {
            console.error('Erro ao listar produtos', error);
            res.status(500).json({ message: 'Erro ao buscar produtos.' });
        }
    },
    //---------------
    //criar um novo produto
    //POST /Produtos
    //---------------
    /*
    {
        "nomeProduto": "valor",
        "precoProduto": 0.00
    }
    */
    criarProduto: async (req, res) => {
        try {
            const {nomeProduto, valorProduto } = req.body;

            if (nomeProduto == undefined || valorProduto == undefined || isNaN(valorProduto)) {
                return res.status(400).json({ erro: 'Campos obrigatórios não preenchidos!' });
            }

            await produtoModel.criarProduto(nomeProduto, valorProduto, req.file.filename);
            res.status(201).json({ message: 'Produto cadastrado com sucesso' });
        } catch (error) {
            console.error('Erro ao cadastrar produto', error);
            res.status(500).json({ erro: 'Erro no servidor ao cadastrar produto!' });
        }
    }
}



module.exports = { produtoController };