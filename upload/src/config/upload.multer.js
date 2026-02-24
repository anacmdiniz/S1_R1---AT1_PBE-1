import multer from "multer";
import path from "path";
import crypto from "crypto"; //numeracao
import fs from "fs"; //biblioteca

const baseUploadDir = path.resolve(process.cwd(), 'uploads');//pasta da minha aplicação e junto o caminho absoluto + o caminho que tenho dentro da pasta
//os documentos ou imagens irao para a pasta uploads, de acordo com o que for enviado pelo usuário
const verificaDir = (dir) => {//verifica se o diretorio não existe
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });//se ele nao existir eu vou criar
    }
}
const createMulter = ({pasta, tiposPermitidos, tamanhoArquivo }) => {//com base na pasta principal eu verifico de o diretorio existe
    const pastaFinal=path.join(baseUploadDir,pasta);//concatenaçao de caminho
    verificaDir(pastaFinal)//pasta final vai chegar como parâmetro dir, chama a funcao, passa o parametro e se o diretório existir, eu crio. se nao existir, nao faço nada.

    const storage=multer.diskStorage({
        destination:(req, file, cb)=>{
            cb(null, pastaFinal);//o destino é pasta final e cb é o retorno
        },
        filename:(req, file, cb) =>{//construindo um nome para o que veio e gero o hash
            const hash = crypto.randomBytes(12).toString('hex');
            cb(null, `${hash}-${file.originalname}`);//retorno o nome da imagem
        }
    });
}
export default createMulter;