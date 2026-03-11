-- PawMatch Personal Survey Migration
-- Run this against your dogpsdb PostgreSQL database

ALTER TABLE users
  ADD COLUMN IF NOT EXISTS survey_living_situation VARCHAR(50),
  ADD COLUMN IF NOT EXISTS survey_activity_level   VARCHAR(50),
  ADD COLUMN IF NOT EXISTS survey_has_kids         BOOLEAN,
  ADD COLUMN IF NOT EXISTS survey_has_dogs         BOOLEAN,
  ADD COLUMN IF NOT EXISTS survey_has_cats         BOOLEAN,
  ADD COLUMN IF NOT EXISTS survey_housing_type     VARCHAR(50),
  ADD COLUMN IF NOT EXISTS survey_dog_size         VARCHAR(50),
  ADD COLUMN IF NOT EXISTS survey_dog_age          VARCHAR(50),
  ADD COLUMN IF NOT EXISTS survey_dog_breed        VARCHAR(255),
  ADD COLUMN IF NOT EXISTS survey_completed_at     TIMESTAMPTZ;