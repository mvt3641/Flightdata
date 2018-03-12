DROP DATABASE IF EXISTS `flight_data_db`;
CREATE DATABASE `flight_data_db`;

USE flight_data_db;

CREATE TABLE asitrep (
Date VARCHAR(40),
MONTH INT(40),
AEROSTAT_SN VARCHAR(40),
SiteID VARCHAR(40),
TIME INT(40),
SYSTEM_ VARCHAR(10),
FLIGHT_ INT(40),
REASON_ VARCHAR(10),
LAUNCHES INT,
RECOVERIES INT,
FLIGHTS INT(40),
TENSION INT(40),
Winds_Aloft DEC(40),
PITCH DEC(40),
HELIUM_ DEC(40),
BALLONET_ DEC(40),
GROUND_ DEC(40),
BAROM_ DEC(40)
);
