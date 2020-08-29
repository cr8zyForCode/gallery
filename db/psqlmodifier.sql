-- ---
-- Foreign Keys
-- ---

ALTER TABLE `bedroomimages` ADD FOREIGN KEY (property) REFERENCES `properties` (`id`);
ALTER TABLE `bathroomimages` ADD FOREIGN KEY (property) REFERENCES `properties` (`id`);
ALTER TABLE `houseimages` ADD FOREIGN KEY (property) REFERENCES `properties` (`id`);
ALTER TABLE `backyardimages` ADD FOREIGN KEY (property) REFERENCES `properties` (`id`);
ALTER TABLE `kitchenimages` ADD FOREIGN KEY (property) REFERENCES `properties` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `properties` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `bedroomimages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `bathroomimages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `houseimages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `backyardimages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `kitchenimages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `properties` (`id`,`description`,`starRating`,`reviewTotal`,`superhost`,`location`) VALUES
-- ('','','','','','');
-- INSERT INTO `bedroomimages` (`id`,`property`,`imageURL`,`description`) VALUES
-- ('','','','');
-- INSERT INTO `bathroomimages` (`id`,`property`,`imageURL`,`description`) VALUES
-- ('','','','');
-- INSERT INTO `houseimages` (`id`,`property`,`imageURL`,`description`) VALUES
-- ('','','','');
-- INSERT INTO `backyardimages` (`id`,`property`,`imageURL`,`description`) VALUES
-- ('','','','');
-- INSERT INTO `kitchenimages` (`id`,`property`,`imageURL`,`description`) VALUES
-- ('','','','');


-- test for properties table

INSERT INTO properties
(id, small_description, star_rating, review_total, superhost, city, state_province, country)
VALUES
(3, 'very nice', 1.4, 15, true, 'Los Angeles', 'CA', 'United States');

-- test for images table

INSERT INTO images
(id, property_id, url, small_description, grouping)
VALUES
(2,2, 'asdf.com', 'not nice', 2);
