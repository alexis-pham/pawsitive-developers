/* only index columns that are used for filters - indexing speeds up reads but slows down writes" */
CREATE INDEX IF NOT EXISTS idx_dogs_breed ON dogs("animalPrimaryBreed");
CREATE INDEX IF NOT EXISTS idx_dogs_age ON dogs("animalGeneralAge");
CREATE INDEX IF NOT EXISTS idx_dogs_last_seen ON dogs(last_seen_at);
CREATE INDEX IF NOT EXISTS idx_dogs_status ON dogs("animalStatus");
CREATE INDEX IF NOT EXISTS idx_dogs_sex ON dogs("animalSex");
CREATE INDEX IF NOT EXISTS idx_dogs_size ON dogs("animalGeneralSizePotential");
CREATE INDEX IF NOT EXISTS idx_dogs_activity ON dogs("animalActivityLevel");
CREATE INDEX IF NOT EXISTS idx_dogs_ok_kids ON dogs("animalOKWithKids");
CREATE INDEX IF NOT EXISTS idx_dogs_ok_dogs ON dogs("animalOKWithDogs");
CREATE INDEX IF NOT EXISTS idx_dogs_ok_cats ON dogs("animalOKWithCats");
CREATE INDEX IF NOT EXISTS idx_dogs_location ON dogs("animalLocation");
CREATE INDEX IF NOT EXISTS idx_dogs_special_needs ON dogs("animalSpecialneeds");