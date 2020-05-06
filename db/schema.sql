### Schema

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
	id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
	burger_name varchar(25) NOT NULL,
	devoured BOOLEAN DEFAULT false
);
