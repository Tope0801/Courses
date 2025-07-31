/*
  # Remove description column from courses table

  1. Changes
    - Remove `description` column from `courses` table
    - This column is no longer needed in the application

  2. Notes
    - This is a destructive operation that will permanently remove the description data
    - Make sure to backup any important description data before running this migration
*/

DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'courses' AND column_name = 'description'
  ) THEN
    ALTER TABLE courses DROP COLUMN description;
  END IF;
END $$;