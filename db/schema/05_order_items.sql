DROP IF TABLE EXISTS order_items CASCADE;
 
CREATE TABLE order_items (
id SERIAL PRIMARY KEY NOT NULL,
product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
order_id SMALLINT NOT NULL,
price INT NOT NULL,
 
);
