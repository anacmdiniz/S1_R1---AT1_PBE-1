// conexão com o bd
import pool from "../config/db.js";

// operações da tabela produtos
const produtoModel = {

    // funçao p inserir um novo produto no banco
    insert: async (pProduto) => {
        // inserir dados na tabela produtos
        const sql = 'INSERT INTO produtos (nomeProduto, valorProduto, vinculoImagem, idCategoria) VALUES (?,?,?,?);';
        
        const values = [
            pProduto.nomeProduto, 
            pProduto.valorProduto, 
            pProduto.vinculoImagem, 
            pProduto.idCategoria
        ];

        // executa o comando no banco
        const [rows] = await pool.execute(sql, values);
        return rows;
    },

    // Função para buscar todos os registros
    selectAll: async () => {
        // Comando SQL para buscar todos os dados
        const sql = "SELECT * FROM categorias;";
        
        // executa a consulta
        const [rows] = await pool.execute(sql);

        // retorna os dados encontrados
        return rows;
    },

    // função p atualizar um produto pelo id
    update: async (id, pProduto) => {
        // comando SQL para atualizar os dados do produto
        const sql = `
            UPDATE produtos 
            SET nomeProduto = ?, 
                valorProduto = ?, 
                vinculoImagem = ?, 
                idCategoria = ?
            WHERE idProduto = ?;
        `;

        // valores que serão atualizados
        const values = [
            pProduto.nomeProduto,
            pProduto.valorProduto,
            pProduto.vinculoImagem,
            pProduto.idCategoria,
            id
        ];

        // executa a atualização no banco
        const [result] = await pool.execute(sql, values);

        // retorna o resultado da atualização
        return result;
    },

    // função p deletar um produto pelo id
    delete: async (id) => {
        const sql = "DELETE FROM produtos WHERE idProduto = ?;";
        
        // exclusão
        const [result] = await pool.execute(sql, [id]);

        // resultado da exclusão
        return result;
    }

};

// exporta o model p ser usado em outros lugares
export default produtoModel;