-- admin

INSERT INTO admins(admin_name , admin_phone ,admin_password , admin_img) VALUES('Sanjar' , ARRAY ['+998(90)-955-63-99'] , 'rsa63999' , 'https://via.placeholder.com/300x400');

-- restaraunts

INSERT INTO restaraunts(restaraunt_name ) VALUES('FAST FOOD');
INSERT INTO restaraunts(restaraunt_name ) VALUES('Milliy taomlar');

-- branches

INSERT INTO restaraunts(restaraunt_name , restaraunt_ref_id ) VALUES('EVOS' , 1 );
INSERT INTO restaraunts(restaraunt_name , restaraunt_ref_id ) VALUES('Oqtepa Lavash' , 1 );
INSERT INTO restaraunts(restaraunt_name , restaraunt_ref_id ) VALUES('Macdonols' , 1 );
INSERT INTO restaraunts(restaraunt_name , restaraunt_ref_id ) VALUES('Lavash Center' , 1 );

INSERT INTO restaraunts(restaraunt_name , restaraunt_ref_id ) VALUES('Osh markazi' , 2 );
INSERT INTO restaraunts(restaraunt_name , restaraunt_ref_id ) VALUES('Xadra Osh markazi' , 2 );
INSERT INTO restaraunts(restaraunt_name , restaraunt_ref_id ) VALUES('Rayhon' , 2 );
INSERT INTO restaraunts(restaraunt_name , restaraunt_ref_id ) VALUES('Chontak choyxonasi' , 2 );

-- foods

INSERT INTO foods(food_name, food_price, restaraunt_id ) VALUES('Lavash' , 22000 , 3 );
INSERT INTO foods(food_name, food_price, restaraunt_id ) VALUES('Hot-Dog' , 18000 , 3 );
INSERT INTO foods(food_name, food_price, restaraunt_id ) VALUES('Donar' , 20000 , 3 );
INSERT INTO foods(food_name, food_price, restaraunt_id ) VALUES('Gamburger' , 21000 , 3 );
INSERT INTO foods(food_name, food_price, restaraunt_id ) VALUES('Cola' , 10000 , 3 );
INSERT INTO foods(food_name, food_price, restaraunt_id ) VALUES('Pepsi' , 10000 , 3 );

INSERT INTO foods(food_name, food_price, restaraunt_id ) VALUES('Lagmon' , 17000 , 7 );
INSERT INTO foods(food_name, food_price, restaraunt_id ) VALUES('Osh' , 18000 , 7 );
INSERT INTO foods(food_name, food_price, restaraunt_id ) VALUES('Shahlik' , 11000 , 7 );
INSERT INTO foods(food_name, food_price, restaraunt_id ) VALUES('Shorva' , 18000 , 7 );
INSERT INTO foods(food_name, food_price, restaraunt_id ) VALUES('Cola' , 10000 , 7 );
INSERT INTO foods(food_name, food_price, restaraunt_id ) VALUES('Pepsi' , 10000 , 7 );

--regions

INSERT INTO regions(region_name) VALUES('Yashnobod tuman');
INSERT INTO regions(region_name) VALUES('Dvarest');
INSERT INTO regions(region_name) VALUES('Mirobod tuman');
INSERT INTO regions(region_name) VALUES('Chilonzor tuman');
INSERT INTO regions(region_name) VALUES('Mirzo ulugbek tuman');
INSERT INTO regions(region_name) VALUES('Beruniy metros');
INSERT INTO regions(region_name) VALUES('Yunusobod tuman');
INSERT INTO regions(region_name) VALUES('Qibray tuman');

