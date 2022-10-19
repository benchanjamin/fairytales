/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                lightBlack: '#1d1d1d',
                lightBlue: '#5ce1e6'
            },
            fontFamily: {
                sans: ['cormorant-garamond', 'sans-serif'],
            },
        },
    },
    plugins: [],
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
};
