const { fetch ,fetchAll} = require("../../util/pg");

// GET
const FIND_REGIONS = `SELECT * FROM regions`;

// POST
const CREATE_REGION = `INSERT INTO regions(region_name) VALUES($1) RETURNING *`;

// DELETE
const DELETE_REGION = `DELETE FROM regions WHERE region_id = $1 RETURNING *`;

const regions = () => fetchAll(FIND_REGIONS);

const newRegion = (...values) => fetch(CREATE_REGION, values);

const deleteRegion = (...values) => fetch(DELETE_REGION, values);

module.exports = { regions ,newRegion ,deleteRegion };