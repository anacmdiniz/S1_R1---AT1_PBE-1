import pool from "../config/db.js";

const produtoModel = {
    insert: async (pProduto) => {
        const sql = 'INSERT INTO produtos (nomeProduto, valorProduto, vinculoImagem, idCategoria) VALUES (?,?,?,?);';
        const values = [pProduto.nomeProduto, pProduto.valorProduto, pProduto.vinculoImagem, pProduto.idCategoria];
        const [rows] = await pool.execute(sql, values);
        return rows;

    },
    selectAll: async () => {
        const sql = "SELECT * FROM categorias;";
        const [rows] = await pool.execute(sql);
        return rows;
    },
    update: async (id, pProduto) => {
        const sql = `
            UPDATE produtos 
            SET nomeProduto = ?, 
                valorProduto = ?, 
                vinculoImagem = ?, 
                idCategoria = ?
            WHERE idProduto = ?;
        `;
        const values = [
            pProduto.nomeProduto,
            pProduto.valorProduto,
            pProduto.vinculoImagem,
            pProduto.idCategoria,
            id
        ];
        const [result] = await pool.execute(sql, values);
        return result;
    },

    delete: async (id) => {
        const sql = "DELETE FROM produtos WHERE idProduto = ?;";
        const [result] = await pool.execute(sql, [id]);
        return result;
    }

};

export default produtoModel;