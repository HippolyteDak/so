CREATE TABLE defenses (

    id SERIAL PRIMARY KEY,


    player_id VARCHAR(100),


    duration FLOAT,


    actions JSONB,


    created_at TIMESTAMP DEFAULT NOW()

);