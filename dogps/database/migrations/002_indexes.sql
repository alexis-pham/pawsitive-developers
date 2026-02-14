CREATE INDEX IF NOT EXISTS idx_dogs_breed ON dogs(breed);
CREATE INDEX IF NOT EXISTS idx_dogs_age ON dogs(age);
CREATE INDEX IF NOT EXISTS idx_dogs_last_seen ON dogs(last_seen_at);