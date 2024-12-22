/*
  Student Name: [Your Name]
  Project Title: South African Socioeconomic Insights
  Project Objective: To develop an interactive web application that visualizes data from the General Household Survey 2023, providing insights into South Africa's socioeconomic landscape.
*/

-- Create the Household table
CREATE TABLE Household (
    uqnr INT PRIMARY KEY,                -- Unique household number (primary key)
    prov INT,                            -- Province code (foreign key to Geography table)
    geo_type VARCHAR(50),               -- Geographic type (urban, rural, farm)
    hholdsz INT,                         -- Household size
    totmhinc DECIMAL(10,2),              -- Total monthly household income
    fin_exp DECIMAL(10,2),               -- Total expenditure on food
    agr_agr BOOLEAN,                     -- Household engaged in agriculture (yes/no)
    com_int_fixed BOOLEAN,              -- Household has fixed internet connection (yes/no)
    hsg_maind VARCHAR(50),              -- Main type of dwelling
    head_popgrp VARCHAR(50),            -- Population group of household head
    tra_taxi_cost DECIMAL(10,2),         -- Cost of traveling by taxi
    FOREIGN KEY (prov) REFERENCES Geography(prov) -- Foreign key constraint
);

-- Create the Geography table
CREATE TABLE Geography (
    prov INT PRIMARY KEY,                -- Province code (primary key)
    geo_type VARCHAR(50),               -- Geographic type (urban, rural, farm)
    wat_drinkwat BOOLEAN,               -- Main source of drinking water is safe (yes/no)
    wat_dist BOOLEAN,                   -- Distance to the nearest water source
    san_toil BOOLEAN                    -- Type of toilet facility
);

-- Create the Assets table
CREATE TABLE Assets (
    Asset_ID INT,                       -- Asset ID (part of composite primary key)
    uqnr INT,                            -- Unique household number (part of composite primary key and foreign key)
    hwl_assets_microw BOOLEAN,         -- Household has a microwave (yes/no)
    mobphon_hh BOOLEAN,                 -- Household has a mobile phone (yes/no)
    hwl_vehicle BOOLEAN,                -- Household has a vehicle (yes/no)
    PRIMARY KEY (Asset_ID, uqnr),       -- Composite primary key
    FOREIGN KEY (uqnr) REFERENCES Household(uqnr) -- Foreign key constraint
);

-- Create the FoodSecurity table
CREATE TABLE FoodSecurity (
    uqnr INT PRIMARY KEY,                -- Unique household number (primary key and foreign key)
    fsd_foodvariety INT,                -- Household food variety score
    fsd_hungry INT,                     -- Number of days household went hungry in the past 30 days
    fsd_skipped INT,                    -- Number of days household skipped meals in the past 30 days
    hwl_happy BOOLEAN,                  -- Household satisfied with food variety (yes/no)
    FOREIGN KEY (uqnr) REFERENCES Household(uqnr) -- Foreign key constraint
);