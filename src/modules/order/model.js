const { fetch ,fetchAll} = require("../../util/pg");

// GET
const FIND_ORDERS = `SELECT * FROM orders`;
const FIND_ORDERS_DETAILS = `SELECT * FROM order_details`;
const FIND_FILTER_ORDERS_DETAILS = `SELECT * FROM order_details WHERE order_id = $1`;

// POST
const CREATE_ORDER = `INSERT INTO orders(client_name , client_phone , region_id ) VALUES($1 ,$2 ,$3) RETURNING *`;
const CREATE_ORDER_DETAILS = `INSERT INTO order_details(food_id , food_count , order_id ) VALUES($1 ,$2 ,$3) RETURNING *`;

// DELETE
const DELETE_ORDER = `DELETE FROM orders WHERE order_id = $1  RETURNING *`;

const orders = () => fetchAll(FIND_ORDERS);
const ordersDetails = () => fetchAll(FIND_ORDERS_DETAILS);
const ordersFilterDetails = (...values) => fetchAll(FIND_FILTER_ORDERS_DETAILS , values);

const newOrder = (...values) => fetch(CREATE_ORDER, values);
const newOrderDetails = (...values) => fetch(CREATE_ORDER_DETAILS, values);

const deleteOrder = (...values) => fetch(DELETE_ORDER, values);

module.exports = { 
    orders,
    ordersDetails,
    ordersFilterDetails,
    newOrder,
    newOrderDetails,
    deleteOrder
};