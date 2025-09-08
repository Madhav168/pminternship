// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        // Existing float animation (if you have it)
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        // New keyframes for the background movement
        flagGradientMove: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        flagGradientZoom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        saffronPulse: {
            '0%, 100%': { backgroundColor: 'rgba(255, 159, 0, 0.2)' }, // Light Saffron
            '50%': { backgroundColor: 'rgba(255, 140, 0, 0.4)' }, // Brighter Saffron
        },
        greenPulse: {
            '0%, 100%': { backgroundColor: 'rgba(34, 139, 34, 0.2)' }, // Light Green
            '50%': { backgroundColor: 'rgba(60, 179, 113, 0.4)' }, // Brighter Green
        },
        whitePulse: {
            '0%, 100%': { backgroundColor: 'rgba(255, 255, 255, 0.2)' }, // Light White
            '50%': { backgroundColor: 'rgba(255, 255, 255, 0.4)' }, // Brighter White
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite', // Existing float animation
        flagGradientMove: 'flagGradientMove 15s ease-in-out infinite alternate',
        flagGradientZoom: 'flagGradientZoom 20s ease-in-out infinite alternate',
        saffronPulse: 'saffronPulse 6s ease-in-out infinite alternate',
        greenPulse: 'greenPulse 6s ease-in-out infinite alternate',
        whitePulse: 'whitePulse 6s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...your existing content and theme settings
  theme: {
    extend: {
      // ...your existing extend settings (like keyframes for 'float', etc.)
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        // ...your existing animations
        // Adjust the duration (e.g., 60s) to make the scroll faster or slower
        scroll: 'scroll 60s linear infinite',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...your existing content and theme settings
  theme: {
    extend: {
      // Add these keyframes and animation definitions
      keyframes: {
        // Defines the scrolling motion from start to finish
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        // You can keep your other keyframes like 'float' here
      },
      animation: {
        // Makes the 'animate-scroll' class work.
        // You can adjust the duration (e.g., 40s for faster, 80s for slower)
        scroll: 'scroll 60s linear infinite',
        // You can keep your other animations here
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...your existing content and theme settings
  theme: {
    extend: {
      // Add these keyframes and animation definitions
      keyframes: {
        // ...your other keyframes
        mapPing: {
          '75%, 100%': {
            transform: 'scale(2.5)',
            opacity: '0',
          },
        },
      },
      animation: {
        // ...your other animations
        'map-ping': 'mapPing 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...your existing content and theme settings
  theme: {
    extend: {
      // Add these keyframes and animation definitions
      keyframes: {
        // ...your other keyframes
        wave: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        // ...your other animations
        wave: 'wave 15s linear infinite',
      },
    },
  },
  plugins: [],
};

