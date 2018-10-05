# SurveySMS
data base is implemented in MySQL the table schema looks like :
enrollment table with column
 `idenrollment` int(11) NOT NULL AUTO_INCREMENT,
  `phoneNo` varchar(45) DEFAULT NULL,
  `response1` int(11) DEFAULT NULL,
  `response2` int(11) DEFAULT NULL,
  `response3` int(11) DEFAULT NULL,
  `rank1` int(11) DEFAULT NULL,
  `rank2` int(11) DEFAULT NULL,
  `count` int(11) DEFAULT '0',
  `rank3` int(11) DEFAULT NULL,
  
symptoms table
 `idsymptoms` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL

there is a stored procedure along with the tables that takes care to get the current available symptoms for the user.

The server is implemented in nodeJS and is using twilio library to send and recieve messages.
