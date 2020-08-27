-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'properties'
--
-- ---

DROP TABLE IF EXISTS `properties`;

CREATE TABLE `properties` (
  `id` INTEGER(6) NULL AUTO_INCREMENT DEFAULT NULL,
  `description` VARCHAR(30) NULL DEFAULT NULL,
  `starRating` INTEGER(3) NULL DEFAULT NULL,
  `reviewTotal` INTEGER(4) NULL DEFAULT NULL,
  `superhost` CHAR(5) NULL DEFAULT NULL,
  `location` VARCHAR(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'bedroomimages'
--
-- ---

DROP TABLE IF EXISTS `bedroomimages`;

CREATE TABLE `bedroomimages` (
  `id` INTEGER(6) NULL AUTO_INCREMENT DEFAULT NULL,
  `property` INTEGER(6) NULL DEFAULT NULL,
  `imageURL` VARCHAR(200) NULL DEFAULT NULL,
  `description` VARCHAR(30) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'bathroomimages'
--
-- ---

DROP TABLE IF EXISTS `bathroomimages`;

CREATE TABLE `bathroomimages` (
  `id` INTEGER(6) NULL AUTO_INCREMENT DEFAULT NULL,
  `property` INTEGER(6) NULL DEFAULT NULL,
  `imageURL` VARCHAR(200) NULL DEFAULT NULL,
  `description` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'houseimages'
--
-- ---

DROP TABLE IF EXISTS `houseimages`;

CREATE TABLE `houseimages` (
  `id` INTEGER(6) NULL AUTO_INCREMENT DEFAULT NULL,
  `property` INTEGER(6) NULL DEFAULT NULL,
  `imageURL` VARCHAR(200) NULL DEFAULT NULL,
  `description` VARCHAR(30) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'backyardimages'
--
-- ---

DROP TABLE IF EXISTS `backyardimages`;

CREATE TABLE `backyardimages` (
  `id` INTEGER(6) NULL AUTO_INCREMENT DEFAULT NULL,
  `property` INTEGER(6) NULL DEFAULT NULL,
  `imageURL` VARCHAR(200) NULL DEFAULT NULL,
  `description` VARCHAR(30) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'kitchenimages'
--
-- ---

DROP TABLE IF EXISTS `kitchenimages`;

CREATE TABLE `kitchenimages` (
  `id` INTEGER(6) NULL AUTO_INCREMENT DEFAULT NULL,
  `property` INTEGER(6) NULL DEFAULT NULL,
  `imageURL` VARCHAR(200) NULL DEFAULT NULL,
  `description` VARCHAR(30) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

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