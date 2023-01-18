const express =require('express');
const router = express.Router();

const pool = require('../db')

router.get('', (req,res)=>{
    pool.query(`SELECT * FROM public."Students" ORDER BY id ASC `, (error ,results)=>{
        if(error) throw error;
        else 
        res.status(200).json(results.rows)
    })
})
// router.get('/:id', (req,res)=>{

// })
// router.post('/', (req,res)=>{

// })
// router.put('/:id', (req,res)=>{

// })
// router.delete('/:id', (req,res)=>{

// })
module.exports = router