const express = require("express");
const router = express.Router();

const pool = require("../db");

router.get("", (req, res) => {
  pool.query(
    `SELECT * FROM public."Students" ORDER BY id ASC `,
    (error, results) => {
      if (error) throw error;
      else res.status(200).json(results.rows);
    }
  );
});
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
router.post("/", (req, res) => {
  const { id, name } = req.body;
  pool.query(
    `INSERT INTO public."Students" (id ,name) VALUES ($1,$2)`,
    [id, name],
    (error, result) => {
      if (error) throw error;
      else res.status(201).send(`user added with id : ${id}`);
    }
  );
});
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  pool.query(
    `UPDATE  public."Students" SET name=$1 WHERE id=$2  `,
    [name, id],
    (error, results) => {
      if (error) throw error;
      else res.status(201).send(`user updated with id : ${id}`);
    }
  );
});
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(
    `Delete FROM public."Students" where id=$1  `,
    [id],
    (error, results) => {
      if (error) throw error;
      else res.status(200).send(`user Deleted with id : ${id}`);
    }
  );
});
module.exports = router;
