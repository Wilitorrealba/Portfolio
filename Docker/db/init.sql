-- will create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS portfolio;

-- use the 'portfolio' database
USE portfolio;

-- Creates users table
CREATE TABLE users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255),
    password VARCHAR(255),
    email VARCHAR(255)
);

-- Creates the techstack table
CREATE TABLE IF NOT EXISTS techstack (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    tech_name VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
-- Creates the programmers table
CREATE TABLE IF NOT EXISTS programmers (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    linkedin VARCHAR(255),
    github VARCHAR(255),
    about LONGTEXT,
    picture VARCHAR(255),
    user_id BIGINT,
    techstack_id BIGINT,
    CONSTRAINT fk_programmers_users FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    CONSTRAINT fk_programmers_techstack FOREIGN KEY (techstack_id) REFERENCES techstack(id) ON DELETE SET NULL
);

-- Creates the projects table
CREATE TABLE IF NOT EXISTS projects (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    img VARCHAR(255),
    description LONGTEXT,
    project_url VARCHAR(255),
    programmer_id BIGINT,
    user_id BIGINT,
    CONSTRAINT fk_projects_programmers FOREIGN KEY (programmer_id) REFERENCES programmers(id) ON DELETE SET NULL,
    CONSTRAINT fk_projects_users FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);


