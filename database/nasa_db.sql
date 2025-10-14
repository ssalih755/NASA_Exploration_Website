DROP TABLE IF EXISTS neo, users;

CREATE TABLE users (
  id serial PRIMARY KEY,
  username varchar(255) NOT NULL UNIQUE,     -- Username
  password varchar(32) NOT NULL,      -- Password (hashed, not plain-text)
  salt varchar(256) NOT NULL		  -- Password Salt
);

CREATE TABLE neo (
    db_id serial PRIMARY KEY,
    nasa_id varchar(255) NOT NULL,
    user_id int NOT NULL,
    neo_date DATE,
    neo_name varchar(255),
    hazardous boolean,
    min_diameter numeric,
    max_diameter numeric,
    CONSTRAINT FK_users_neo FOREIGN KEY (user_id)
        REFERENCES users(id)
);