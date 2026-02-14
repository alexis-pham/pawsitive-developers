CREATE TABLE IF NOT EXISTS dogs (
    id                       SERIAL PRIMARY KEY,
    external_id              TEXT UNIQUE NOT NULL,
    name                     TEXT,
    breed                    TEXT,
    age                      TEXT,
    last_seen_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_at TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ   NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS dog_status (
    dog_id     INT PRIMARY KEY REFERENCES dogs(id) ON DELETE CASCADE,
    adopted    BOOLEAN NOT NULL DEFAULT FALSE,
    adopted_at TIMESTAMPTZ,
    notes      TEXT
)