 1- >npm init --y
 2-npm i express pg
 3-in index.js require('express') 
 4- listen to port
 5- in db.js : const {Pool} = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database : 'mydixi',
    password: '123456',
    port : 5432
})
module.exports = pool;
 6-make router folder and user.js file 
 7- require('express') and const router = express.Router()
 9- const pool = require('../db')
 8- router.get('', (req,res)=>{
    pool.query(`SELECT * FROM public."Students" ORDER BY id ASC `, (error ,results)=>{
        if(error) throw error;
        else 
        res.status(200).json(results.rows)
    })
}) //* and ather methods
 9- in index.js : to use routes  => const user = require('./routes/user')
app.use('/api/isers', user)
 10- errors related security :
-go to mydixidatabse -> properties -> security -> create postgree - all - postgree / public - Tc - postgre
-view/edit data in student : SELECT * FROM public."Students" ORDER BY id ASC  - take it and put it in query
 11- test it in postman



<!-- 
 HEADLINE: GET DATA BY ID

router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(
      `SELECT * FROM public."Students" where id=${id} ORDER BY id ASC `,
      (error, results) => {
        if (error) throw error;
        else res.status(200).json(results.rows);
      }
    );
  });

 HEADLINE: ADD NEW REACORD IN DATABASE BY POST METHOD

router.post("/", (req, res) => {
    const { id, name } = req.body;
    pool.query(
      `INSERT INTO public."Students" (id ,name) VALUES ($1,$2)`,[id, name],
      (error, result) => {
        if (error) throw error;
        else res.status(201).send(`user added with id : ${id}`)
      }
    );
  });
 

   HEADLINE : UPDATE
router.put('/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    const {name}= req.body;
    pool.query(
        `UPDATE  public."Students" SET name=$1 WHERE id=$2  `,[name,id],
      (error, results) => {
        if (error) throw error;
        else res.status(201).send(`user updated with id : ${id}`)
      }
    );
})

 HEADLINE: DELETE
router.delete('/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    pool.query(
      `Delete FROM public."Students" where id=$1  `,[id],
      (error, results) => {
        if (error) throw error;
        else res.status(200).send(`user Deleted with id : ${id}`)
      }
    );
}) -->


# refactoring to my code 
-create folder DAL -> dataAccess.js file