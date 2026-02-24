const imagemController = {
    upload:async (req, res) => {
        try {
            if(!req.file){//verifico se ele nao foi enviado e retorno uma mensagem de erro
                return res.status(400).json({message:'Arquivo não foi envidado'});
            }

            return res.status(200).json({message: 'Upload realizado com sucesso'});
        } catch (error) {
            console.error(error);
            res.status(500).json({message:'Ocorreu um erro no sevidor', errorMessage: error.message});
        }
        
    }
}
export default imagemController;