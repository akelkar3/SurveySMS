CREATE TABLE `enrollment` (
  `idenrollment` int(11) NOT NULL AUTO_INCREMENT,
  `phoneNo` varchar(45) DEFAULT NULL,
  `response1` int(11) DEFAULT NULL,
  `response2` int(11) DEFAULT NULL,
  `response3` int(11) DEFAULT NULL,
  `rank1` int(11) DEFAULT NULL,
  `rank2` int(11) DEFAULT NULL,
  `count` int(11) DEFAULT '0',
  `rank3` int(11) DEFAULT NULL,
  PRIMARY KEY (`idenrollment`),
  UNIQUE KEY `idenrollment_UNIQUE` (`idenrollment`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
