CREATE DATABASE restaraunts_crm;

CREATE TABLE admins(
    admin_id SERIAL PRIMARY KEY,
    admin_name VARCHAR(16) DEFAULT NULL,
    admin_phone TEXT [] NOT NULL,
    admin_password text not null,
    admin_img TEXT DEFAULT 'https://via.placeholder.com/300x400'
);

create unique index main_contact on admins(admin_phone);

CREATE TABLE restaraunts(
    restaraunt_id  SERIAL PRIMARY KEY,
    restaraunt_name VARCHAR(64) NOT NULL,
    restaraunt_img TEXT DEFAULT 'https://images.pexels.com/photos/143640/pexels-photo-143640.jpeg',
    restaraunt_ref_id INT DEFAULT NULL REFERENCES restaraunts(restaraunt_id) ON DELETE CASCADE
);

CREATE TABLE foods(
    food_id SERIAL PRIMARY KEY,
    food_name VARCHAR(32) NOT NULL,
    food_price INT NOT NULL,
    food_img TEXT DEFAULT 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLRc22c5g55EpoT_txtEPsz0tDzcKbgypAKQ&usqp=CAU',
    restaraunt_id INT DEFAULT NULL REFERENCES restaraunts(restaraunt_id) ON DELETE CASCADE 
);

CREATE TABLE regions(
	region_id SERIAL PRIMARY KEY,
	region_name VARCHAR(32) NOT NULL
);

CREATE TABLE carts(
    cart_id SERIAL PRIMARY KEY,
    food_id INT NOT NULL REFERENCES foods(food_id) ON DELETE CASCADE,
    food_count INT DEFAULT 1
);

CREATE TABLE orders(
    order_id BIGSERIAL PRIMARY KEY,
    client_name VARCHAR(32) NOT NULL,
    client_phone VARCHAR(16) NOT NULL,
    region_id INT NOT NULL REFERENCES regions(region_id) ON DELETE CASCADE,
    order_created_at timestamptz default CURRENT_TIMESTAMP
);

CREATE TABLE order_details(
    order_detail_id SERIAL PRIMARY KEY,
    food_id INT NOT NULL REFERENCES foods(food_id)  ON DELETE CASCADE,
    food_count INT DEFAULT 1,
    order_id INT NOT NULL REFERENCES orders(order_id)
);