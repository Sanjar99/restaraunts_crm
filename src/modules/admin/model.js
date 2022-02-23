const { fetch ,fetchAll} = require("../../util/pg");

// GET
const FIND_ADMIN = `SELECT * FROM admins`;
const FIND_FILTER_ADMIN = `SELECT * FROM admins WHERE admin_id = $1`;

// POST
const CREATE_ADMIN = `INSERT INTO admins(admin_name , admin_phone , admin_password , admin_img ) VALUES($1 ,$2 , $3 , $4) RETURNING *`;

// PUT
const PUT_ADMIN = `UPDATE admins SET admin_name = $1 , admin_phone = $2 , admin_password = $3 , admin_img = $4 WHERE admin_id = $5 RETURNING *`;

// DELETE
const DELETE_ADMIN = `DELETE FROM admins WHERE admin_id = $1 RETURNING *`;

const admin = () => fetchAll(FIND_ADMIN);
const filterAdmin = (...values) => fetch(FIND_FILTER_ADMIN, values);

const newAdmin = (...values) => fetch(CREATE_ADMIN, values);

const updateAdmin = (...values) => fetch(PUT_ADMIN, values);

const deleteAdmin = (...values) => fetch(DELETE_ADMIN, values);

module.exports = { admin, filterAdmin ,newAdmin ,updateAdmin ,deleteAdmin };