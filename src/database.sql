CREATE DATABASE auth;

CREATE TABLE usersBack (
    firstName VARCHAR (40),
    lastName VARCHAR(40),
    email TEXT PRIMARY KEY,
    pass TEXT,
    endPoint TEXT,
    token TEXT

);
CREATE TABLE usersFront (
    firstName VARCHAR (40),
    lastName VARCHAR(40),
    email TEXT PRIMARY KEY,
    pass TEXT,
    token TEXT

);

CREATE TABLE flower (
    name VARCHAR (40) PRIMARY KEY ,
    region TEXT,
    description TEXT

);

CREATE TABLE public."flowerOwner"
(
    "flowerName" character varying(30),
    "ownerName" character varying(30),
    amount numeric(1000),
    FOREIGN KEY ("flowerName")
        REFERENCES public.flower (name) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
,
    FOREIGN KEY ("ownerName")
        REFERENCES public.usersBack (email) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public."flowerOwner"
    OWNER to postgres;