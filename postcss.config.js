const tailwindcss = require('tailwindcss');
const purgecssConfig = require('./purgecss.config');
require('dotenv').config();


const purgecss = require('@fullhuman/postcss-purgecss')(purgecssConfig)

module.exports = {
    plugins: [
        tailwindcss('./tailwind.config.js'),
        require('autoprefixer'),
        ...process.env.NODE_ENV === 'production'
    ? [purgecss]
    : []
    ],
};