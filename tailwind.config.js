/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            'sans': ['Montserrat'],
            'serif': ['Roboto Slab'],
        },
        colors: {
            background: '#2C3333',
            foreground: '#395B64',
            comment: '#A5C9CA',
            accent: '#e8eb56',
            accent2: '#E7F6F2',
            white: '#FFFFFF',
        },

        backgroundImage: {
            'cats': "url('./src/img/cats.png')",
        },

        extend: {},
    },
    plugins: [],
}