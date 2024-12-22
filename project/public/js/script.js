/*
  Student Name: [Your Name]
  Project Title: South African Socioeconomic Insights
  Project Objective: To develop an interactive web application that visualizes data from the General Household Survey 2023, providing insights into South Africa's socioeconomic landscape.


// Dark mode toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        // Save the user's preference in localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // Check for user's preference on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

// High contrast mode toggle
const highContrastToggle = document.getElementById('high-contrast-toggle');

if (highContrastToggle) {
    highContrastToggle.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');

        // Save the user's preference in localStorage
        if (document.body.classList.contains('high-contrast')) {
            localStorage.setItem('contrast', 'high');
        } else {
            localStorage.setItem('contrast', 'normal');
        }
    });

    // Check for user's preference on page load
    const savedContrast = localStorage.getItem('contrast');
    if (savedContrast === 'high') {
        document.body.classList.add('high-contrast');
    }
}

// Keyboard navigation (example for map zoom)
// This code assumes you have a map object initialized in maps.js
if (typeof map !== 'undefined') { // Check if map object exists
    map.getCanvas().focus(); // Set focus to the map canvas
    map.getCanvas().addEventListener('keydown', (e) => {
        if (e.key === '+') {
            map.zoomIn();
        } else if (e.key === '-') {
            map.zoomOut();
        }
    });
}

// Loader animations (example using a simple spinner)
const loader = document.getElementById('loader');

function showLoader() {
    if (loader) {
        loader.style.display = 'block';
    }
}

function hideLoader() {
    if (loader) {
        loader.style.display = 'none';
    }
}

// Show the loader before fetching data
showLoader();

// Fetch data from API (example)
fetch('/api/data')
    .then(response => response.json())
    .then(data => {
        // Process and display the data
        // ...

        // Hide the loader after data is loaded
        hideLoader();
    });

*/
/*
  Student Name: [Your Name]
  Project Title: South African Socioeconomic Insights
  Project Objective: To develop an interactive web application that visualizes data from the General Household Survey 2023, providing insights into South Africa's socioeconomic landscape.
*/

document.addEventListener('DOMContentLoaded', () => {
    // Dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');

            // Save the user's preference in localStorage
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });

        // Check for user's preference on page load
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
        }
    }

    // High contrast mode toggle
    const highContrastToggle = document.getElementById('high-contrast-toggle');

    if (highContrastToggle) {
        highContrastToggle.addEventListener('click', () => {
            document.body.classList.toggle('high-contrast');

            // Save the user's preference in localStorage
            if (document.body.classList.contains('high-contrast')) {
                localStorage.setItem('contrast', 'high');
            } else {
                localStorage.setItem('contrast', 'normal');
            }
        });

        // Check for user's preference on page load
        const savedContrast = localStorage.getItem('contrast');
        if (savedContrast === 'high') {
            document.body.classList.add('high-contrast');
        }
    }
});