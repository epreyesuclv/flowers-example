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
    id SERIAL PRIMARY KEY,
    name VARCHAR (40),
    region TEXT,
    color VARCHAR(40)
);