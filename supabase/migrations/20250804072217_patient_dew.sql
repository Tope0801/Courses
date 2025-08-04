/*
  # Remove image_url column from courses table

  1. Changes
    - Remove `image_url` column from `courses` table
    - This will permanently delete all image URL data

  2. Notes
    - This is a destructive operation that cannot be undone
    - All existing image URLs will be lost
*/

-- Remove the image_url column from courses table
ALTER TABLE courses DROP COLUMN IF EXISTS image_url;