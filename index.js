const Client = require('pg').Client
const cliente = new Client({
    user: "postgres",
    password: "1405",
    host: "127.0.0.1",
    port: 5432,
    database: "anki",
})

async function getCarcterHB(){
    let resultadosArray = [];  // Inicialize um array para armazenar os resultados

    try {
        console.log("Iniciando conexão");
        await cliente.connect();
        console.log("Conexão feita");

        const resultado = await cliente.query("SELECT * FROM caracter WHERE alfabeto_id = 1");
        
        // Adicione os resultados ao array
        resultadosArray = resultado.rows;
    }
    catch (ex) {
        console.log("Erro no getCaracterHB: " + ex);
    }
    finally {
        await cliente.end();
        console.log("Conexão fechada");
    }

    return resultadosArray;  // Retorne o array de resultados
}


module.exports = getCarcterHB;




