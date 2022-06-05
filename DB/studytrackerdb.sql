-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema studytrackerdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `studytrackerdb` ;

-- -----------------------------------------------------
-- Schema studytrackerdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `studytrackerdb` DEFAULT CHARACTER SET utf8 ;
USE `studytrackerdb` ;

-- -----------------------------------------------------
-- Table `study`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `study` ;

CREATE TABLE IF NOT EXISTS `study` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `subject` VARCHAR(45) NULL,
  `subject_section` VARCHAR(45) NULL,
  `duration` INT NULL,
  `location` VARCHAR(45) NULL,
  `date` DATE NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS studyuser;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'studyuser' IDENTIFIED BY 'studyuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'studyuser';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `study`
-- -----------------------------------------------------
START TRANSACTION;
USE `studytrackerdb`;
INSERT INTO `study` (`id`, `subject`, `subject_section`, `duration`, `location`, `date`) VALUES (1, 'Java', 'JPA', 60, 'Home', '2022-06-02');
INSERT INTO `study` (`id`, `subject`, `subject_section`, `duration`, `location`, `date`) VALUES (2, 'Javascript', 'Fundamentals', 120, 'Home', '2022-06-03');
INSERT INTO `study` (`id`, `subject`, `subject_section`, `duration`, `location`, `date`) VALUES (3, 'CSS', 'Styling', 30, 'Starbucks', '2022-06-04');

COMMIT;

