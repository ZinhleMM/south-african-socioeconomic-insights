/*
  Student Name: [Your Name]
  Project Title: South African Socioeconomic Insights
  Project Objective: To develop an interactive web application that visualizes data from the General Household Survey 2023, providing insights into South Africa's socioeconomic landscape.
*/

-- Insert data into the Household table
INSERT INTO Household (uqnr, prov, geo_type, hholdsz, totmhinc, fin_exp, agr_agr, com_int_fixed, hsg_maind, head_popgrp, tra_taxi_cost) VALUES
(1, 1, 'Urban', 4, 25000.00, 5000.00, 1, 1, 'Formal dwelling', 'Black African', 1000.00),
(2, 2, 'Rural', 6, 12000.00, 3000.00, 0, 0, 'Informal dwelling', 'Coloured', 500.00),
(3, 3, 'Farm', 3, 18000.00, 4000.00, 1, 1, 'Formal dwelling', 'White', 750.00),
(4, 4, 'Urban', 2, 35000.00, 7000.00, 0, 1, 'Traditional dwelling', 'Indian or Asian', 1500.00);

-- Insert data into the Geography table
INSERT INTO Geography (prov, geo_type, wat_drinkwat, wat_dist, san_toil) VALUES
(1, 'Urban', 1, 1, 1),
(2, 'Rural', 0, 0, 0),
(3, 'Farm', 1, 0, 1),
(4, 'Urban', 1, 1, 1);

-- Insert data into the Assets table
INSERT INTO Assets (Asset_ID, uqnr, hwl_assets_microw, mobphon_hh, hwl_vehicle) VALUES
(1, 1, 1, 1, 1),
(2, 2, 0, 1, 0),
(3, 3, 1, 0, 1);

-- Insert data into the FoodSecurity table
INSERT INTO FoodSecurity (uqnr, fsd_foodvariety, fsd_hungry, fsd_skipped, hwl_happy) VALUES
(1, 5, 2, 1, 1),
(2, 3, 5, 3, 0),
(3, 4, 1, 0, 1);