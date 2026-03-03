import pool from "../config/db.js";


const categoriaModel = {

    // função p inserir uma nova categoria no banco
    insert: async (descricao) => { // recebe os dados da categoria
        // comando SQL para inserir na tabela categorias
        const sql = 'INSERT INTO categorias (descricaoCategoria) VALUES (?);';

        // valores que serão enviados para o banco
        const values = [descricao];

        // executa o comando no banco de dados
        const [rows] = await pool.execute(sql, values);

        // retorna o resultado da operação
        return rows;

    },

    // função p buscar todos os registros
    selectAll: async () => { // busca dados no banco
        const sql = "SELECT * FROM produtos;";

        // executa
        const [rows] = await pool.execute(sql);

        // etorna
        return rows;

    },

    // função para atualizar uma categoria pelo id
    update: async (id, categoria) => { // recebe o id e os novos dados
        const sql = `
            UPDATE categorias 
            SET descricaoCategoria = ? 
            WHERE idCategoria = ?;
        `;

        // valores que serão atualizados
        const values = [categoria.descricaoCategoria, id];

        const [result] = await pool.execute(sql, values);

        return result;
    },

    // função para deletar uma categoria pelo id
    delete: async (id) => { // recebe o id da categoria
        const sql = "DELETE FROM categorias WHERE idCategoria = ?;";

        // executa a exclusão no banco
        const [result] = await pool.execute(sql, [id]);

        return result;
    }

};

// exporta o model p ser usado em outros lugares
export default categoriaModel;