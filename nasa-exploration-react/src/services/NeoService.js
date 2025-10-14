import axios from 'axios';
/**
 * NeoService.js
 * Service to interact with NASA's Near Earth Object Web Service (NEO API).
 */

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8080", 

});

export default{
    getNearEarthObjects(startDate, endDate) {
        // Only send startDate if it exists; backend will default to today otherwise
        const params = {};
        if (startDate) params.startDate = startDate;
        if (endDate) params.endDate = endDate;
        
        return api.get(`/neoData`, { params });
    }
};