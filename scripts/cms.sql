CREATE DATABASE IF NOT EXISTS cms;

use cms;

CREATE TABLE IF NOT EXISTS users
(
    id VARCHAR(20) PRIMARY KEY,
    username VARCHAR(32) NOT NULL,
    email VARCHAR(255),
    locale VARCHAR(10)
);

select * from users;
