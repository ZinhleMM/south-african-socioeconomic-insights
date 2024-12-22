import React from 'react';

function About() {
    return (
        <div>
            <h1>About</h1>

            <h2>About This Project</h2>
            <p>This interactive web application explores South Africa's socioeconomic landscape using data from the General Household Survey 2023. It provides insights into living conditions, income distribution, access to services, and more, empowering users to engage with the data and understand the complexities of South African society.</p>

            <h3>Project Goals</h3>
            <ul>
                <li>Broad Representation: The application covers critical themes like food security, income, education, health, and demographics, ensuring diverse and user-customizable insights.</li>
                <li>Scholarly Support: The visualizations are grounded in scholarly research, promoting civic engagement and policy impact by making complex data accessible and understandable (Rosling et al., 2018).</li>
                <li>Dynamic Usage: The application leverages interactive elements like sliders and toggles to allow users to explore data dynamically and uncover meaningful patterns (Chen, 1976).</li>
            </ul>
        </div>
    );
};

export default About;