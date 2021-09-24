CREATE DATABASE auth;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstName VARCHAR (40),
    lastName VARCHAR(40),
    email TEXT,
    pass TEXT,
    token TEXT

);

CREATE TABLE flower (
    name VARCHAR (40) PRIMARY KEY ,
    region TEXT,
    color VARCHAR(40)
);