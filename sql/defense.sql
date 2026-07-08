CREATE TABLE defenses (

    id SERIAL PRIMARY KEY,


    player_id UUID UNIQUE REFERENCES users(uuid),


    duration FLOAT,


    actions JSONB,


    created_at TIMESTAMP DEFAULT NOW()

);