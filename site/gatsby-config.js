const siteAddress = new URL('https://klequis.io/')

module.exports = {
  siteMetadata: {
    title: "klequis' blog",
    author: "klequis",
    description: "Description in gatsby-config.js.",
    siteUrl: "https://klequis.io",
    social: {
      twitter: "at_klequis",
    },
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/blog`,
        name: "blog",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/assets`,
        name: "assets",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1.0725rem",
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-83381302-1",
      },
    },
    "gatsby-plugin-feed",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gatsby Starter Blog",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#ffa7c4",
        display: "minimal-ui",
        icon: "content/assets/cb.png",
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: 'klequis.io',
        protocol: siteAddress.protocol.lastIndexOf(0, -1),
        hostname: siteAddress.hostname
      },
    }
  ],
}