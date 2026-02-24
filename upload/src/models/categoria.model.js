import pool from "../config/db.js";

const categoriaModel ={
    insert:async (pProduto) => {
        const sql = 'INSERT INTO categorias (descricaoCategoria) VALUES (?);';
        const values = [pProduto.nome, pProduto.preco, pProduto.quantidade];
        const [rows] = await pool.execute(sql, values);
        return rows;
        
    },
    selectAll: async () => {
        const sql = "SELECT * FROM produtos;";
        const [rows] = await pool.execute(sql);
        return rows;

    }, 
    
    update: async (id, categoria) => {
        const sql = `
            UPDATE categorias 
            SET descricaoCategoria = ? 
            WHERE idCategoria = ?;
        `;
        const values = [categoria.descricaoCategoria, id];
        const [result] = await pool.execute(sql, values);
        return result;
    },

    delete: async (id) => {
        const sql = "DELETE FROM categorias WHERE idCategoria = ?;";
        const [result] = await pool.execute(sql, [id]);
        return result;
    }

};

export default categoriaModel;