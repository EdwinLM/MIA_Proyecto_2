const oracledb = require('oracledb');

db = {
    user: 'c##proy2',
    password: 'proy222',
    connectString: 'localhost:1521'
}

async function open(sql, binds, autoCommit) {
    let conexion = await oracledb.getConnection(db);
    let resultado = await conexion.execute(sql, binds, {autoCommit});
    conexion.release();
    return resultado;
}

exports.Open = open;