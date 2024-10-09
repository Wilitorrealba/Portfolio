CREATE DATABASE IF NOT EXISTS portfolio;
USE portfolio;

-- Create users table
CREATE TABLE users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255),
    password VARCHAR(255),
    email VARCHAR(255)
);


