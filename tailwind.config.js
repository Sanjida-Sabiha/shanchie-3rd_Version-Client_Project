/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    // Disable default container sizes
    container: {
      // Default values will be overridden
      center: true,
      padding: '0',
    },
    extend: {
      container: {
        center: true, 
        padding:'18px',
        screens: {
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "1280px",
        },
      },
      fontFamily: {
        "Host_Grotesk": ["Host Grotesk", "sans-serif"],
      },
      colors:{
        'primaryColor':'#FFFFFF',
        'mainBg':'#020202',
        'secondaryColor':'#FFFFFFB2',
        'borderColor':'#FFBB79',

      },
      spacing:{
        '286':'286px',
        '440':'440px',
        '510':'510px',
        '670':'670px',
        '600':'600px',
        '540':'540px',
        
      },
      fontSize:{
        '22xl':'22px',
        '24xl': '24px',
        '26xl': '26px',
        '28xl':'28px',
        '30xl': '30px',
        '32xl':'32px',
        '40xl':'40px',
        '60xl':'60px',
        '64xl':'64px',
        '100xl':'100px',
      },

      lineHeight: {
        '8': '30px',
        '32':'32px',
        '34':'34px',
        '38':'38px',
        '40':'40px',
        '42':'42px',
        '44':'44px',
        '60':'60px',
        '68':'68px',
        '100':'100px',
      },


      backgroundImage: {
        'btn-gradient': 'radial-gradient(50.78% 286.47% at 50% 50%, #042034 0%, #191919 100%)',
      },
     
      borderRadius: {
        'r_12':'12px',
        'r_32':'32px',
        'r_100':'100px',
      },

    },
  },
  plugins: [function ({ addUtilities }) {
    addUtilities({
      '.bannerText': {
        background: 'linear-gradient(89.83deg, #FFBB79 35%, #37FF55 50%, #01F1FF 69.08%)',
        '-webkit-text-fill-color': 'transparent',
        '-webkit-background-clip': 'text',
      },

      '.bannerTexts': {
        background: 'linear-gradient(90deg, #FFBB79 54.81%, #01F1FF 73.56%)',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
      },
    })
  },
],
}
