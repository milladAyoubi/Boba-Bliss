/** @type {import('tailwindcss').Config} */


module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        container: {
            padding: {
                DEFAULT: '15px',
            },
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '960px',
            xl: '1280px',
        },
        extend: {
            fontFamily: {
                raleway: [`var(--font-raleway)`, 'sans-serif'],
                poppins: [`var(--font-poppins)`, 'sans-serif'],

            },
            colors: {
                primary: '#f77062',
                secondary: '#fe5196',
                tertiary: '#f77062',
                black: '#231714',
                orange: '#fe5196',
                forange: '#FBA122'
            },
            backgroundImage: {
                pattern: "url('/pattern.png')",
                promo: "url('/promo.png')",
            },


            backgroundSize: {
                'size-200': '200% 200%',
            },
            backgroundPosition: {
                'pos-0': '0% 0%',
                'pos-100': '100% 100%',
            },
        },
    },
    plugins: [require('tailwind-scrollbar')],
};