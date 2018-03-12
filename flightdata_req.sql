LOAD DATA LOCAL INFILE "/Users/TaSM Image/Desktop/asitrep.csv" INTO TABLE flight_data_db.asitrep
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 LINES
