const express = require ('express');
const router = express.Router();

// Esta constante hace referencia a la base de datos
const pool = require('../database');




router.post('/', async (req,res) => {
    const {calculo, resultado }= req.body;
    const newCalculo ={
        calculo,
        resultado
    };
    await pool.query('INSERT INTO historial set ?',[newCalculo]);
    res.redirect('/')
});

router.get('/', async (req, res) =>{
    const historial = await pool.query('SELECT * FROM historial');
    res.render('calculos/list', {historial});
});


router.get('/delete/:id', async (req, res) =>{
    const { id } = req.params;
    await pool.query('DELETE FROM historial WHERE ID=?', [id] );
    res.redirect('/');
});


router.get('/edit/:id', async(req, res) => {
    const{id}= req.params;
    const datos = await pool.query('SELECT * FROM historial WHERE ID = ? ', [id]);
    res.render('calculos/edit',{historial: datos[0]} );
});


router.post('/edit/:id', async(req, res) =>{
    const { id } = req.params;
    const { calculo, resultado } = req.body;
    const newCalculo ={
        calculo,
        resultado
    };
    await pool.query('UPDATE historial set ? WHERE id = ?', [newCalculo, id]);
    res.redirect('/');
});

module.exports = router;