USE flight_data_db;

CREATE TABLE location (
id INT AUTO_INCREMENT,
sitename VARCHAR(20) NOT NULL,
hub VARCHAR(20) NOT NULL,
system VARCHAR(20) NOT NULL,
supporting unit VARCHAR(20) NOT NULL,
PRIMARY KEY(id)
);
