module.exports = {
  siteMetadata: {
    title: `Masaže Dotik Kranj`,
    description: `Odpravimo bolečine in poskrbimo za dobro počutje. V masažnem salonu Dotik nudimo terapevtske, športne in klasične masaže. Pokličite in rezervirajte svoj termin.`,
    author: `Jernej Švab <masaze.dotik@gmail.com>`,
    siteUrl: `https://masaze-dotik.si`,
  },
  flags: {
    THE_FLAG: false,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Masaže Dotik, Jernej Švab `,
        short_name: ` Masaže dotik`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://masaze-dotik.si",
        sitemap: "https://masaze-dotik.si/sitemap/sitemap-index.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
}
