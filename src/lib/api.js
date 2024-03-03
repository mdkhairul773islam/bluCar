import axios from 'axios';

// Validate environment variables
if (!process.env.API_BASE_URL || !process.env.API_TOKEN) {
    console.error('API_BASE_URL or API_TOKEN is not set in the environment variables');
    process.exit(1); // Exit if critical environment variables are missing
}

const API = axios.create({
    baseURL: process.env.API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.API_TOKEN}`,
    },
});

// GET method
export const get = async (url) => {
    try {
        const response = await API.get(url);
        return response.data;
    } catch (error) {
        // Handle error
        console.error('API get request error:', error.response);
        throw error;
    }
};

// POST method
export const post = async (url, data) => {
    try {
        const response = await API.post(url, data);
        return response.data;
    } catch (error) {
        // Handle error
        console.error('API post request error:', error.response);
        throw error;
    }
};

// PUT method
export const put = async (url, data) => {
    try {
        const response = await API.put(url, data);
        return response.data;
    } catch (error) {
        // Handle error
        console.error('API put request error:', error.response);
        throw error;
    }
};

// DELETE method
export const del = async (url) => {
    try {
        const response = await API.delete(url);
        return response.data;
    } catch (error) {
        // Handle error
        console.error('API delete request error:', error.response);
        throw error;
    }
};

