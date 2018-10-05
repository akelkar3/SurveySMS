DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getCurrentSymptoms`( in phone varchar(45))
BEGIN
select * FROM `symptoms`  where  `idsymptoms` not in (
SELECT response1
FROM `demo`.`enrollment` where response1 is not null and `phoneNo`= phone) 
and  `idsymptoms` not in (SELECT response2
FROM `demo`.`enrollment` where response2 is not null and `phoneNo`= phone);
END$$
DELIMITER ;
