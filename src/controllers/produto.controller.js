import produtoModel from "../models/produto.model.js";

// controlar as requisições de produtos
const produtoController = {

    //---------------
    // Listar todos os produtos
    // GET /produtos
    //---------------
    listarProduto: async (req, res) => {
        try {
            const produtos = await produtoModel.buscarTodos();
            res.status(200).json(produtos);
        } catch (error) {
            console.error('Erro ao listar produtos', error);
            res.status(500).json({ message: 'Erro ao buscar produtos.' });
        }
    },

    //---------------
    // Criar um novo produto
    // POST /produtos
    //---------------
    criarProduto: async (req, res) => {
        try {
            const { nomeProduto, valorProduto } = req.body;

            if (nomeProduto == undefined || valorProduto == undefined || isNaN(valorProduto)) {
                return res.status(400).json({ erro: 'Campos obrigatórios não preenchidos!' });
            }

            await produtoModel.criarProduto(
                nomeProduto,
                valorProduto,
                req.file ? req.file.filename : null
            );

            res.status(201).json({ message: 'Produto cadastrado com sucesso' });

        } catch (error) {
            console.error('Erro ao cadastrar produto', error);
            res.status(500).json({ erro: 'Erro no servidor ao cadastrar produto!' });
        }
    },

    //---------------
    // Atualizar produto
    // PUT /produtos/:id
    //---------------
    atualizarProduto: async (req, res) => {
        try {
            const { id } = req.params;
            const { nomeProduto, valorProduto } = req.body;

            if (!id) {
                return res.status(400).json({ erro: 'ID do produto é obrigatório!' });
            }

            if (nomeProduto == undefined || valorProduto == undefined || isNaN(valorProduto)) {
                return res.status(400).json({ erro: 'Campos obrigatórios não preenchidos!' });
            }

            const imagem = req.file ? req.file.filename : null;

            const resultado = await produtoModel.atualizarProduto(
                id,
                nomeProduto,
                valorProduto,
                imagem
            );

            if (!resultado) {
                return res.status(404).json({ erro: 'Produto não encontrado!' });
            }

            res.status(200).json({ message: 'Produto atualizado com sucesso!' });

        } catch (error) {
            console.error('Erro ao atualizar produto', error);
            res.status(500).json({ erro: 'Erro no servidor ao atualizar produto!' });
        }
    },

    //---------------
    // Deletar produto
    // DELETE /produtos/:id
    //---------------
    deletarProduto: async (req, res) => {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({ erro: 'ID do produto é obrigatório!' });
            }

            const resultado = await produtoModel.deletarProduto(id);

            if (!resultado) {
                return res.status(404).json({ erro: 'Produto não encontrado!' });
            }

            res.status(200).json({ message: 'Produto deletado com sucesso!' });

        } catch (error) {
            console.error('Erro ao deletar produto', error);
            res.status(500).json({ erro: 'Erro no servidor ao deletar produto!' });
        }
    }

}

export default produtoController;