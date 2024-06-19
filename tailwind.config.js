/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./app/Enums/*.php",
        "./vendor/dd4you/dpanel/src/resources/**/*.blade.php",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
