const { Router } = require('express');
const router = Router();
const BD = require('../config/config');

router.get('/', (req, res)=>{

    res.status(200).json({
        message: 'Ruta status 200.'
    });

});

router.get('/paises', async (req, res)=>{
    const paises=[];
    sql = "select * from pais";
    let resultado = await BD.Open(sql, [], false);
    console.log(resultado.rows);
    console.log(paises);
    resultado.rows.map(p=>{
        let paisSchema = {
            "id": p[0],
            "nombre": p[1],
            "iso3": p[2]
        }
        paises.push(paisSchema)
    });
    res.json({paises});
});

module.exports = router;