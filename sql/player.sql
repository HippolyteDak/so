CREATE TABLE users (

    id SERIAL PRIMARY KEY,

    uuid UUID UNIQUE NOT NULL,

    username TEXT NOT NULL,

    created_at TIMESTAMP DEFAULT NOW()

);