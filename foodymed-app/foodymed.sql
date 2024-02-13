-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.28-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for foodymed
CREATE DATABASE IF NOT EXISTS `foodymed` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `foodymed`;

-- Dumping structure for table foodymed.questionario
CREATE TABLE IF NOT EXISTS `questionario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sesso` char(1) DEFAULT NULL,
  `eta` int(11) DEFAULT NULL,
  `peso` int(11) DEFAULT NULL,
  `altezza` int(11) DEFAULT NULL,
  `lavoro` varchar(100) DEFAULT NULL,
  `obiettivo` varchar(100) DEFAULT NULL,
  `peso_desiderato` int(8) DEFAULT NULL,
  `allenamento` varchar(100) DEFAULT NULL,
  `id_sport` int(11) DEFAULT NULL,
  `ora_allenamento` varchar(100) DEFAULT NULL,
  `giorno_lunedi` tinyint(1) DEFAULT NULL,
  `martedi` tinyint(1) DEFAULT NULL,
  `mercoledi` tinyint(1) DEFAULT NULL,
  `giovedi` tinyint(1) DEFAULT NULL,
  `venerdi` tinyint(1) DEFAULT NULL,
  `sabato` tinyint(1) DEFAULT NULL,
  `domenica` tinyint(1) DEFAULT NULL,
  `ultima_modifica` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `data_inserimento` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table foodymed.questionario: ~2 rows (approximately)
INSERT INTO `questionario` (`id`, `sesso`, `eta`, `peso`, `altezza`, `lavoro`, `obiettivo`, `peso_desiderato`, `allenamento`, `id_sport`, `ora_allenamento`, `giorno_lunedi`, `martedi`, `mercoledi`, `giovedi`, `venerdi`, `sabato`, `domenica`, `ultima_modifica`, `data_inserimento`) VALUES
	(37, 'f', 67, 60, 78, 'atleta', NULL, NULL, 'professionista', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-11 12:32:31', '2024-02-11 13:32:18'),
	(38, 'm', 27, 60, 65, 'movimento', NULL, NULL, '3/4', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-11 12:33:08', '2024-02-11 13:33:02'),
	(39, 'm', 67, 100, 56, 'movimento', NULL, NULL, '5', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-11 12:35:03', '2024-02-11 13:34:42'),
	(40, 'f', 67, 100, 78, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-11 12:38:07', '2024-02-11 13:38:07');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
