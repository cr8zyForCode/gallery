-- QUERIES AND TESTING
--
-- EXPLAIN ANALYZE FORMAT
--
-- EXPLAIN [ ( option [, ...] ) ] statement
-- EXPLAIN [ ANALYZE ] [ VERBOSE ] statement

-- where option can be one of:

--     ANALYZE [ boolean ]
--     VERBOSE [ boolean ]
--     COSTS [ boolean ]
--     SETTINGS [ boolean ]
--     BUFFERS [ boolean ]
--     TIMING [ boolean ]
--     SUMMARY [ boolean ]
--     FORMAT { TEXT | XML | JSON | YAML
--
-- EXPLAIN ANALYZE for CRUD operations
EXPLAIN ANALYZE
SELECT *
FROM images
WHERE property_id = 825364;
-- 5.534ms -- w/o the primary key index = 3.195ms

EXPLAIN ANALYZE
INSERT INTO images (property_id, url, small_description, grouping)
VALUES (554445, 'https://sdc08092020image.s3-us-west-1.amazonaws.com/34.jpeg', 'inserted value', 60);
-- 8.748ms  -- w/o the primary key index = 4.201ms

EXPLAIN ANALYZE
SELECT *
FROM images
WHERE property_id = 55555;
-- 1.802ms

EXPLAIN ANALYZE
UPDATE images
SET  url='https://sdc08092020image.s3-us-west-1.amazonaws.com/34.jpeg',
small_description= 'CHANGED VALUE'
WHERE property_id = 4423442;
-- 1.456ms  -- w/o the primary key index = 5.379ms

EXPLAIN ANALYZE
DELETE FROM images
WHERE property_id = 4587579;
-- 0.049ms  -- w/o the primary key index = 2.117ms

--
INSERT INTO properties
(id, small_description, star_rating, review_total, superhost, city, state_province, country)
VALUES
(3, 'very nice', 1.4, 15, true, 'Los Angeles', 'CA', 'United States');
-- test for images table
INSERT INTO images
(id, property_id, url, small_description, grouping)
VALUES
(2,2, 'asdf.com', 'not nice', 2);
--
-- get database size
SELECT pg_size_pretty( pg_database_size('gallery') );