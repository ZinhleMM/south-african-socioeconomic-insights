/*import React, { useState, useEffect } from 'react';
import Map from 'components/Map';
import Filter from 'components/Filter';

const Maps = () => {
    const [data, setData] = useState(null);
    const [filters, setFilters] = useState({
        province: 'all',
        geo_type: 'all',
        // ... other filters
    });

    useEffect(() => {
        // Fetch data from API based on filters
        const fetchData = async () => {
            // ... (Implementation to fetch data from API)
        };

        fetchData();
    }, [filters]);

    return (
        <div>
            <Filter filters={filters} setFilters={setFilters} />
            <Map data={data} filters={filters} />
        </div>
    );
};

export default Maps;
*/
/*
Student Name: [Your Name]
Project Title: South African Socioeconomic Insights
Project Objective: To develop an interactive web application that visualizes data from the General Household Survey 2023, providing insights into South Africa's socioeconomic landscape.
*/

import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';

// Mapbox Access Token 
mapboxgl.accessToken = 'pk.eyJ1Ijoiem0xNDAiLCJhIjoiY200d3dwYXpmMGpyaTJpcDdkcnkxYXFiNSJ9.kxZQSy0MiPVg_OE1NqyI0Q'; 

function Map () {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [geojsonData, setGeojsonData] = useState(null);

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
    }, []);

    useEffect(() => {
        // Fetch GeoJSON data for South Africa provinces
        fetch('/assets/data/SouthAfricaGeoJSON.json')
            .then(response => response.json())
            .then(data => {
                setGeojsonData(data);
            });
    }, []);

    useEffect(() => {
        if (!map.current || !geojsonData) return;

        map.current.on('load', () => {
            // Add the GeoJSON source to the map
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
    }, [geojsonData]);

    return (
        <div ref={mapContainer} className="map-container" />
    );
};

export default Map;