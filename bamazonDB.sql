CREATE DATABASE bamazon_DB;

CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(30) NULL,
    department_name VARCHAR(30) NULL,
    price DECIMAL(10,2) NULL,
    quantity INT NULL,
    PRIMARY KEY (item_id)
    );
    
INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES (1, "4K television", "electronics", 599.99, 350);

INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES (2, "computer", "electronics", 899.99, 200);

INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES (3, "couch", "furniture", 599.99, 50);

INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES (4, "umbrella", "patio", 28.99, 200);

INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES (5, "desk", "furniture", 399.99, 70);

INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES (6, "chair", "patio", 39.99, 200);

INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES (7, "LsCouch", "furniture", 599.99, 350);

INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES (8, "monitor", "electronics", 499.99, 200);

INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES (9, "recliner", "furniture", 599.99, 350);

INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES (10, "lawn chair", "patio", 599.99, 350);
