const { fetch ,fetchAll} = require("../../util/pg");

// GET
const FIND_RESTARAUNTS = `SSELECT * FROM restaraunts WHERE restaraunt_ref_id IS NULL`;

// POST
const CREATE_RESTARAUNT = `INSERT INTO restaraunts(restaraunt_name , restaraunt_img) VALUES($1 ,$2) RETURNING *`;

const restaraunts = () => fetchAll(FIND_RESTARAUNTS);
const newRestaraunt = (...values) => fetch(CREATE_RESTARAUNT, values);

module.exports = { restaraunts, newRestaraunt };