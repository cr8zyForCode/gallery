-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'properties'
--
-- ---

DROP TABLE IF EXISTS properties;

CREATE TABLE properties (
  id INTEGER NOT NULL,
  small_description VARCHAR(30) NULL DEFAULT NULL,
  star_rating INTEGER NULL DEFAULT NULL,
  review_total INTEGER NULL DEFAULT NULL,
  superhost BOOLEAN NULL DEFAULT NULL,
  city VARCHAR(50) NULL DEFAULT NULL,
  state_province VARCHAR(20) NULL DEFAULT NULL,
  country VARCHAR(20) NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'bedroomimages'
--
-- ---

DROP TABLE IF EXISTS images;

CREATE TABLE images (
  id INTEGER NOT NULL,
  property_id INTEGER NULL DEFAULT NULL,
  url VARCHAR(300) NULL DEFAULT NULL,
  small_description VARCHAR(30) NULL DEFAULT NULL,
  grouping INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- PROPERTYID IS A FOREIGN KEY TO PROPERTIES TABLE ID

COPY images(id, property_id, url, small_description, grouping)
FROM '/Users/luna/Documents/HACKREACTOR/HRSF129/SDC/gallery/db/dataGenerators/imagesData.csv'
DELIMITER ','
CSV HEADER;
