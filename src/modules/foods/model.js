const { fetch ,fetchAll} = require("../../util/pg");

// GET
const FIND_FOODS = `SELECT * FROM foods`;
const FIND_FILTER_FOODS = `SELECT * FROM foods WHERE restaraunt_id = $1`;

// POST
const CREATE_FOOD = `INSERT INTO foods(food_name , food_price , food_img , restaraunt_id) VALUES($1 ,$2 ,$3 ,$4) RETURNING *`;

// UPDATE
const UPDATE_FOOD = `UPDATE foods SET food_name = $1 , food_price = $2 , food_img = $3 WHERE food_id = $4 RETURNING *`

// DELETE
const DELETE_FOOD = `DELETE FROM foods WHERE food_id = $1  RETURNING *`;

const foods = () => fetchAll(FIND_FOODS);
const foodsFilter = (...values) => fetchAll(FIND_FILTER_FOODS , values);

const newFood = (...values) => fetch(CREATE_FOOD, values);

const updateFood = (...values) => fetch(UPDATE_FOOD, values);

const deleteFood = (...values) => fetch(DELETE_FOOD, values);

module.exports = { 
    foods, 
    foodsFilter, 
    newFood,
    updateFood, 
    deleteFood 
};