LOAD DATA LOCAL INFILE "/Desktop/Flightdata/asitrep.csv" INTO TABLE flight_data_db.asitrep
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 LINES
