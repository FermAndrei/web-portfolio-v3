const config = {
  plugins: {
    "@tailwindcss/postcss": {
      theme: {
        extend: {
          backdropBlur: {
            glass: "16px",
          },
          backgroundColor: {
            glass: "rgba(65, 137, 139, 0.24)",
          },
          borderColor: {
            glass: "rgba(57, 170, 198, 0.4)",
          },
        },
      },
    },
  },
};

export default config;
