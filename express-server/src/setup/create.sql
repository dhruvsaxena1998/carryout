-- Create database
create database carryout;

-- Use database
use carryout;

-- Create item table
CREATE TABLE IF NOT EXISTS item(
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  price DECIMAL(10, 2) NOT NULL,
  currentQty INT NOT NULL,
  defaultQty INT NOT NULL,
  maxQty INT DEFAULT 1
);

