-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'properties'
--
-- ---


--

-- PROPERTYID IS A FOREIGN KEY TO PROPERTIES TABLE ID

--
DROP TABLE IF EXISTS properties;
--
DROP TABLE IF EXISTS images;
--
CREATE TABLE properties (
  id INTEGER NOT NULL,
  small_description VARCHAR(30) NULL DEFAULT NULL,
  star_rating NUMERIC NULL DEFAULT NULL,
  review_total INTEGER NULL DEFAULT NULL,
  superhost BOOLEAN NULL DEFAULT NULL,
  city VARCHAR(50) NULL DEFAULT NULL,
  state_province VARCHAR(20) NULL DEFAULT NULL,
  country VARCHAR(20) NULL DEFAULT NULL,
  PRIMARY KEY (id)
);
--
CREATE TABLE images (
  id INTEGER NOT NULL,
  property_id INTEGER NULL DEFAULT NULL,
  url VARCHAR(300) NULL DEFAULT NULL,
  small_description VARCHAR(30) NULL DEFAULT NULL,
  grouping INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
);
--
-- ---

-- SCRIPT TO RUN FOR BULK LOAD INTO POSTGRES

-- FOR POPERTIES TABLE
COPY properties(id, small_description, star_rating, review_total, superhost, city, state_province, country)
FROM '/Users/luna/Documents/HACKREACTOR/HRSF129/SDC/gallery/db/dataGenerators/propertiesData.csv'
DELIMITER ','
CSV HEADER;
--
-- FOR IMAGES TABLE
COPY images(id, property_id, url, small_description, grouping)
FROM '/Users/luna/Documents/HACKREACTOR/HRSF129/SDC/gallery/db/dataGenerators/imagesData.csv'
DELIMITER ','
CSV HEADER;
--