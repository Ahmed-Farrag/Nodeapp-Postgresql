const pool = require("../db");

function getUsers(callBack) {
  pool.query(
    `SELECT * FROM public."Students" ORDER BY id ASC `,
    (error, results) => {
      if (error) throw error;
      callBack(results.rows);
    }
  );
}

function getUser(id, callBack) {
  pool.query(
    `SELECT * FROM public."Students" where id=${id} ORDER BY id ASC `,
    (error, results)=> {
      if (error) throw error;
      callBack(results.rows);
    }
  );
}

function postUser(student) {
  pool.query(
    `INSERT INTO public."Students" (id ,name) VALUES ($1,$2)`,
    [student.id, student.name],
    (error, result) => {
      if (error) throw error;
    }
  );
}



function updateUser(id, student) {
  pool.query(
    `UPDATE  public."Students" SET name=$1 WHERE id=$2  `,
    [student.name , id],
    (error, results) => {
      if (error) throw error;
    }
  );
}


function deleteUser(id) {
  pool.query(
    `Delete FROM public."Students" where id=$1  `,
    [id],
    (error, results) => {
      if (error) throw error;
    }
  );
}

module.exports = {
  getUsers: getUsers,
  getUser:getUser,
  postUser: postUser,
  updateUser: updateUser,
  deleteUser: deleteUser,
};
