/*
  Student Name: [Your Name]
  Project Title: South African Socioeconomic Insights
  Project Objective: To develop an interactive web application that visualizes data from the General Household Survey 2023, providing insights into South Africa's socioeconomic landscape.
*/

import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

// Mapbox Access Token 
mapboxgl.accessToken = 'pk.eyJ1Ijoiem0xNDAiLCJhIjoiY200d3dwYXpmMGpyaTJpcDdkcnkxYXFiNSJ9.kxZQSy0MiPVg_OE1NqyI0Q'; 

const Map = ({ data, filters }) => {
    const mapContainer = useRef(null);
    const map = useRef(null);

    useEffect(() => {
        if (map.current) return; // Initialize map only once

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11', // You can customize the map style
            center: [24.7536, -28.7806], // Centered on South Africa
            zoom: 5
        });

        // Add navigation controls (zoom, rotate, etc.)
        map.current.addControl(new mapboxgl.NavigationControl());

        // Fetch GeoJSON data for South Africa provinces
        fetch('assets/data/SouthAfricaGeoJSON.json')
            .then(response => response.json())
            .then(geojsonData => {
                // Add the GeoJSON source to the map
                map.current.on('load', () => {
                    map.current.addSource('provinces', {
                        type: 'geojson',
                        data: geojsonData
                    });

                    // Add a layer to display the provinces
                    map.current.addLayer({
                        id: 'provinces-layer',
                        type: 'fill',
                        source: 'provinces',
                        paint: {
                            'fill-color': '#0080ff', // Default fill color
                            'fill-opacity': 0.5
                        }
                    });

                    // Add interactivity (e.g., tooltips, click events)
                    // ...
                });
            });
    }, []);

    // Update map based on filters (implementation needed)
    useEffect(() => {
        if (!map.current || !data) return;

        // ... (Implementation to update map based on filters)
    }, [filters, data]);

    return (
        <div ref={mapContainer} className="map-container" />
    );
};

export default Map;
/*
import React from 'react';

function Maps() {
    return (
        <div>
            <h1>Maps</h1>
            {/* ...existing code... */}
        </div>
    );
}

export default Maps;
*/