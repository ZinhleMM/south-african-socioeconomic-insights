# South African Socioeconomic Insights

This project is an interactive web application that visualizes data from the General Household Survey 2023 to provide insights into South Africa's socioeconomic landscape. It allows users to explore data on living conditions, income distribution, access to services, and more through interactive maps and charts.

## Project Setup

1.  **Clone the repository:**

    ```bash
    git clone [URL]
    ```

2.  **Install dependencies:**

    ```bash
    cd south-africa-socioeconomic-insights
    npm install
    ```

3.  **Set up the database:**

    *   Create a MySQL database.
    *   Update the `.env` file with your database credentials.
    *   Import the database schema from `db/schema.sql`.
    *   Load the data from the cleaned CSV file into the database.

4.  **Obtain a Mapbox access token:**

    *   Sign up for a Mapbox account at [https://account.mapbox.com/auth/signup/](https://www.google.com/url?sa=E&source=gmail&q=https://account.mapbox.com/auth/signup/)
    *   Retrieve your access token from your Mapbox account dashboard.
    *   Replace `YOUR_MAPBOX_ACCESS_TOKEN` in `public/js/maps.js` with your actual access token.

## Running the Application

1.  **Start the server:**

    ```bash
    npm start
    ```

2.  **Open the application:**

    Open your web browser and navigate to `http://localhost:3000`.

## Features

*   **Interactive maps:** Explore data on a map of South Africa with the ability to zoom, pan, and filter by province.
*   **Dynamic charts:** Visualize data with bar charts, line charts, and other chart types.
*   **Data filtering:** Filter data by various criteria such as province, geographic type, and income range.
*   **Data comparison:** Compare data across different provinces or categories.
*   **Guided exploration:** A step-by-step walkthrough of key visualizations with explanations.
*   **Dark mode:** Switch between light and dark modes for improved accessibility.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## Data Source

The data used in this application is sourced from the General Household Survey 2023 conducted by Statistics South Africa.

*   [Statistics South Africa](https://www.statssa.gov.za/?page_id=1417)
*   [Nesstar Data Browser](http://nesstar.statssa.gov.za:8282/webview/)

## References

*   Chen, P. P. "The Entity-Relationship Model—Toward a Unified View of Data." ACM Transactions on Database Systems (TODS), vol. 1, no. 1, 1976, pp. 9-36.
*   Rosling, Hans, et al. Factfulness: Ten Reasons We're Wrong About the World—and Why Things Are Better Than You Think. Flatiron Books, 2018.
*   Few, Stephen. "Show Me the Numbers: Designing Tables and Graphs to Enlighten." Analytics Press, 2012.

## Error Handling

The API routes in the `routes/` directory include robust error handling using try-catch blocks and appropriate HTTP status codes to gracefully handle database errors, invalid requests, and unexpected exceptions.

## Data Validation

Data validation is implemented on the backend to ensure data integrity. This involves validating data types, ranges, and constraints before performing database operations.

## Responsive Design

The application is designed to be responsive and adapt to different screen sizes using CSS media queries.

## Accessibility

Accessibility features are incorporated using semantic HTML, ARIA attributes, and sufficient colour contrast. A dark mode is also available for users with visual sensitivities.

## Map Improvements

*   Marker clustering is implemented to group nearby markers for better readability.
*   Data-driven styling is used to dynamically change the map style based on the data.

## Chart Interactions

*   Zooming and panning are enabled for time-series charts.
*   Chart filters allow users to filter data directly on the chart.

## Loader Animations

Loader animations provide visual feedback to the user while fetching data from the API.
