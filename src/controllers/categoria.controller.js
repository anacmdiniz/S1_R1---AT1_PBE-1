// importa o model de categoria
import categoriaModel from "../models/categoria.model.js";

const categoriaController = {

    // listar todas as categorias
    listarCategoria: async (req, res) => {
        try {
            // busca as categorias no bd
            const categorias = await categoriaModel.selectAll();

            res.status(200).json(categorias);
        } catch (error) {
            console.error('Erro ao listar categorias', error);

            // retorna erro para o cliente
            res.status(500).json({ message: 'Erro ao buscar categorias.' });
        }
    },

    // Criar uma nova categoria
    criarCategoria: async (req, res) => {
        try {
            // pega a descrição enviada no body
            const { descricaoCategoria } = req.body;

            // verifica se o campo foi preenchido
            if (descricaoCategoria == undefined) {
                return res.status(400).json({ erro: 'Campos obrigatórios não preenchidos!' });
            }

            // chama o model para salvar no banco
            await categoriaModel.insert(descricaoCategoria);

            //sucesso
            res.status(201).json({ message: 'Categoria cadastrada com sucesso' });

        } catch (error) {
            // mostra erro no console
            console.error('Erro ao cadastrar categoria', error);

            // erro para o cliente
            res.status(500).json({ erro: 'Erro no servidor ao cadastrar categoria!' });
        }
    },

    // atualizar categoria pelo id
    atualizarCategoria: async (req, res) => {
        try {

            const { id } = req.params;
            const { descricaoCategoria } = req.body;

            // vâ se os dados obrigatórios foram enviados
            if (!id || !descricaoCategoria) {
                return res.status(400).json({ erro: 'Id e descrição são obrigatórios!' });
            }

            // chama o model p atualizar no banco
            await categoriaModel.update(id, { descricaoCategoria });

            //sucesso
            res.status(200).json({ message: 'categoria atualizada com sucesso' });

        } catch (error) {
            // Mostra erro no console
            console.error('Erro ao atualizar categoria', error);

            // Retorna erro para o cliente
            res.status(500).json({ erro: 'Erro no servidor ao atualizar categoria!' });
        }
    },

    // deletar categoria pelo id
    deletarCategoria: async (req, res) => {
        try {
            // pega o id da URL
            const { id } = req.params;

            // verifica se o id foi informado
            if (!id) {
                return res.status(400).json({ erro: 'Id é obrigatório!' });
            }

            // chama o model para excluir do banco
            await categoriaModel.delete(id);

            // de sucesso
            res.status(200).json({ message: 'categoria deletada com sucesso' });

        } catch (error) {
            console.error('Erro ao deletar categoria', error);

            res.status(500).json({ message: 'Erro no servidor ao deletar categoria!' });
        }
    }

}

// para usar nas rotas
export default categoriaController;