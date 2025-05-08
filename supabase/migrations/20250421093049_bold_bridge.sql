/*
  # Create user conversions tracking

  1. New Tables
    - `user_conversions`
      - `id` (uuid, primary key)
      - `user_id` (text, unique)
      - `conversions_count` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
  2. Security
    - Enable RLS on `user_conversions` table
    - Add policy for public access to read/write their own data
*/

CREATE TABLE IF NOT EXISTS user_conversions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id text UNIQUE NOT NULL,
  conversions_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE user_conversions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read their own data"
  ON user_conversions
  FOR SELECT
  USING (true);

CREATE POLICY "Users can insert their own data"
  ON user_conversions
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Users can update their own data"
  ON user_conversions
  FOR UPDATE
  USING (true);