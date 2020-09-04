
CREATE KEYSPACE gallery
WITH replication = {'class' : 'SimpleStrategy', 'replication_factor' : 1};

CREATE TABLE gallery.properties (
  id int PRIMARY KEY,
  small_description text,
  star_rating decimal,
  review_total int,
  superhost boolean,
  city varchar,
  state_province varchar,
  country varchar,
);

COPY gallery.properties FROM '/Users/luna/Documents/HACKREACTOR/HRSF129/SDC/gallery/db/dataGenerators/propertiesData10.csv' WITH DELIMITER=',' AND HEADER=TRUE;

TRUNCATE TABLE gallery.properties;

CREATE TABLE gallery.images_by_property (
  id int,
  property_id int PRIMARY KEY,
  url varchar,
  small_description varchar,
  grouping int
);

COPY gallery.images_by_property FROM '/Users/luna/Documents/HACKREACTOR/HRSF129/SDC/gallery/db/dataGenerators/imagesData3.csv' WITH DELIMITER=',' AND HEADER=TRUE;

TRUNCATE TABLE gallery.images_by_property;

-- TO SHOW TIMES OF EXECUTION
TRACING ON;

-- CREATE TABLE gallery.properties (
--   id int,
--   small_description text,
--   star_rating number,
--   review_total number,
--   superhost boolean,
--   city text,
--   state_province text,
--   country text,
--   PRIMARY KEY (id)
-- );

-- CREATE TABLE gallery.images_by_property (
--   id int,
--   property_id int,
--   url text,
--   small_description text,
--   grouping int,
--   PRIMARY KEY (property_id)
--   AND CLUSTERING ORDER BY (grouping ASC)
-- );




--- add cluster for order
--- AND CLUSTERING ORDER BY (order ASC)