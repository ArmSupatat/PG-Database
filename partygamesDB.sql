CREATE DATABASE IF NOT EXISTS `partygamesDB`;

USE `partygamesDB`;

DROP TABLE IF EXISTS `User_join_Members`;
DROP TABLE IF EXISTS `Comments`;
DROP TABLE IF EXISTS `Posts`;
DROP TABLE IF EXISTS `Members`;
DROP TABLE IF EXISTS `Users`;

CREATE TABLE `Users`(
    `user_id` BIGINT AUTO_INCREMENT,
    `username` varchar(100) NOT NULL,
    `password` varchar(100) NOT NULL,
    `email` varchar(100) NOT NULL,

    PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET utf8mb4;

CREATE TABLE `Members`(
    `member_id` BIGINT AUTO_INCREMENT,

    PRIMARY KEY (`member_id`)
) ENGINE=InnoDB DEFAULT CHARSET utf8mb4;

CREATE TABLE `Posts`(
    `post_id` BIGINT AUTO_INCREMENT,
    `title` varchar(50) NOT NULL,
    `timestamp` timestamp,
    `details` varchar(150),
    `letter` varchar(150) NOT NULL,

    PRIMARY KEY (`post_id`)
    CONSTRAINT `user_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users`.`user_id`,
    CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`comment_id`) REFERENCES `Comments`.`comment_id`,
    CONSTRAINT `member_ibfk_3` FOREIGN KEY (`member_id`) REFERENCES `Members`.`member_id`,
) ENGINE=InnoDB DEFAULT CHARSET utf8mb4;

CREATE TABLE `Comments`(
    `comment_id` BIGINT AUTO_INCREMENT,
    `comment` varchar(100),
    `timestamp` timestamp,

    PRIMARY KEY (`comment_id`)
    CONSTRAINT `user_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users`.`user_id`,
) ENGINE=InnoDB DEFAULT CHARSET utf8mb4;

CREATE TABLE `User_join_Members`(
    `member_id` BIGINT AUTO_INCREMENT,
    `user_id` BIGINT AUTO_INCREMENT,

    PRIMARY KEY (`member_id`)
    PRIMARY KEY (`user_id`)
    CONSTRAINT `member_ibfk_1` FOREIGN KEY (`member_id`) REFERENCES `Members`.`member_id`,
    CONSTRAINT `user_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `Users`.`user_id`,
) ENGINE=InnoDB DEFAULT CHARSET utf8mb4;