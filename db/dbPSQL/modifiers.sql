-- DB AND TABLE MODIFIER OPERATIONS --
--
-- SCRIPT TO RUN FOR BULK LOAD INTO POSTGRES
--
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
--
create sequence player_id_seq;
alter table player alter playerid set default nextval('player_id_seq');
Select setval('player_id_seq', 2000051 ); --set to the highest current value of playerID
-- TABLE MODIFIERS
--
-- DROP THE A CONTRAINT ON THE TABLE
ALTER TABLE images DROP CONSTRAINT images_pkey;
--
-- ALTER TABLE images to ADD  fireign key propertry
ALTER TABLE images ADD FOREIGN KEY (property_id) REFERENCES properties (id);
--
-- ALTER TABLE images ADD PRIMARY KEY (property_id);
ALTER TABLE images ADD PRIMARY KEY (id);
--
-- ALTER TABLE images ADD PRIMARY KEY (property_id);
CREATE INDEX idx_imgaes_per_property ON images (property_id, id);
-- ---
--
-- ALTER TABLE TO MAKE COLUMN AUTOINCREMENT
CREATE SEQUENCE image_id_seq;
ALTER TABLE images ALTER id SET DEFAULT nextval('image_id_seq');
-- set value of sequence to the highest current value
SELECT setval('image_id_seq', 172727273);
--
-- ---
-- Foreign Keys
--
ALTER TABLE images ADD FOREIGN KEY (property_id) REFERENCES properties (id);
-- ---
-- Table Properties
-- ---
-- ALTER TABLE `properties` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ---
-- Test Data
-- ---
-- INSERT INTO `properties` (`id`,`description`,`starRating`,`reviewTotal`,`superhost`,`location`) VALUES
-- ('','','','','','');