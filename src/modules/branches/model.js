const { fetch ,fetchAll} = require("../../util/pg");

// GET
const FIND_BRANCHES = `SELECT * FROM restaraunts WHERE restaraunt_ref_id IS NOT NULL`;
const FILTER_BRANCHES = `SELECT * FROM restaraunts WHERE restaraunt_ref_id = $1`;

// POST
const CREATE_BRANCH = `INSERT INTO restaraunts(restaraunt_name , restaraunt_img , restaraunt_ref_id) VALUES($1 ,$2 , $3) RETURNING *`;

const branches = () => fetchAll(FIND_BRANCHES);
const branchesFilter = (...values) => fetchAll(FILTER_BRANCHES, values);
const newBranch = (...values) => fetch(CREATE_BRANCH, values);

module.exports = { branches, branchesFilter, newBranch };