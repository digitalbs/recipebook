require('dotenv').config();

module.exports = {
    development: {
        html5Routing: true,
        debug: true,
        urlPrefix: '#',
        API_URL: process.env.API_URL || 'http://localhost:3000/api'
    },
    production: {
        html5Routing: true,
        debug: false,
        urlPrefix: '',
        API_URL: 'http://localhost:3000/api'
    }
};
