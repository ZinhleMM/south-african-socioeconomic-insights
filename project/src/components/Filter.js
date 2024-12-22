/*
  Student Name: [Your Name]
  Project Title: South African Socioeconomic Insights
  Project Objective: To develop an interactive web application that visualizes data from the General Household Survey 2023, providing insights into South Africa's socioeconomic landscape.
*/

import React from 'react';

const Filter = ({ filters, setFilters }) => {
    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value
        }));
    };

    return (
        <form id="filter-form">
            <div>
                <label htmlFor="province">Province:</label>
                <select id="province" name="province" value={filters.province} onChange={handleFilterChange}>
                    <option value="all">All</option>
                    {/* Add options for each province */}
                </select>
            </div>
            <div>
                <label htmlFor="geo_type">Geographic Type:</label>
                <select id="geo_type" name="geo_type" value={filters.geo_type} onChange={handleFilterChange}>
                    <option value="all">All</option>
                    {/* Add options for geographic types */}
                </select>
            </div>
            {/* Add more filter controls as needed */}
        </form>
    );
};

export default Filter;