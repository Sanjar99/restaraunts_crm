const { fetch ,fetchAll} = require("../../util/pg");

// GET
const FIND_CART = `SELECT * FROM carts`;

// POST
const CREATE_CART = `INSERT INTO carts(food_id , food_count) VALUES($1 ,$2 ) RETURNING *`;

// DELETE
const DELETE_CART_ALL = `TRUNCATE TABLE carts`;
const DELETE_CART = `DELETE FROM carts WHERE cart_id = $1  RETURNING *`;

const cart = () => fetchAll(FIND_CART);
const newCart = (...values) => fetch(CREATE_CART, values);
const deleteCartAll = () => fetchAll(DELETE_CART_ALL);
const deleteCart = (...values) => fetch(DELETE_CART, values);

module.exports = { cart, newCart , deleteCartAll ,deleteCart };