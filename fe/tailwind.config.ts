/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            flexBasis: {
                '23': '23%'                
            },
            width: {
                'login': '336px'
            },
            screens: {
                'sm': '640px',
                // => @media (min-width: 640px) { ... }

                'md': '768px',
                // => @media (min-width: 768px) { ... }

                'lg': '1024px',
                // => @media (min-width: 1024px) { ... }

                'xl': '1200px',
                // => @media (min-width: 1200px) { ... }
                '2xl':'1200px',
                // => @media (min-width: 1200px) { ... }
			},
            backgroundImage: {
                'frame': "url('/images/frame.png')",
                'top-header': "url('https://theme.hstatic.net/1000030244/1000943806/14/top-bar.jpg?v=8263')",
                'banner-login': "url('https://res.cloudinary.com/metavere/image/upload/v1692283608/bannerlogin_adaehm.webp')"
            },
            colors: {
				'header': '#2E9ED5',
                'beach': '#2E9ED5'
			},
            keyframes: {
                menu: {
                    '0%': { left: '-100%'},
                    '100%': { let: '0%'}
                },
                animation: {
                    'move-menu': 'menu 2s'
                }
            }
        },
    },
    plugins: [],
};
