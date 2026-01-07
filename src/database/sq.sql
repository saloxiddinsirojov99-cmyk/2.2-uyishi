create DATABASE register;
create table users(
    id SERIAL PRIMARY key,
    username VARCHAR(20) not null UNIQUE,
    email TEXT not null UNIQUE,
    password varchar(256) not null
);