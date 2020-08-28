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