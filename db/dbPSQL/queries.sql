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
WHERE property_id = 20;
-- 5.534ms

EXPLAIN ANALYZE
INSERT INTO images (property_id, url, small_description, grouping)
VALUES (55555, 'https://sdc08092020image.s3-us-west-1.amazonaws.com/34.jpeg', 'inserted value', 60);
-- 8.748ms

EXPLAIN ANALYZE
SELECT *
FROM images
WHERE property_id = 55555;
-- 1.802ms

EXPLAIN ANALYZE
UPDATE images
SET  url='https://sdc08092020image.s3-us-west-1.amazonaws.com/34.jpeg',
small_description= 'CHANGED VALUE'
WHERE property_id = 44455342;
-- 1.456ms

EXPLAIN ANALYZE
DELETE FROM images
WHERE property_id = 456123789;
-- 0.049ms

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