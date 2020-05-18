module.exports = {
  siteMetadata: {
    title: 'Saglikli Leziz',
    description:
      'Saglikli ve Leziz Tariflerin Adresi',
    url: 'https://www.youtube.com/channel/UCuzgqx1I2waTpEjYDJiptXA',
    author: 'Saglikli Leziz',
    image: 'static/og-image.jpg',
    intro: 'Saglikli ve Leziz Tariflerin Adresi',
    menuLinks: [
      {
        name: 'Saglikli Leziz',
        slug: '/',
      },
      {
        name: 'Hakkimizda',
        slug: '/hakkimizda/',
      },
    ],
    footerLinks: [
      {
        name: 'YouTube',
        url: 'https://www.youtube.com/channel/UCuzgqx1I2waTpEjYDJiptXA',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/saglikli.leziz/',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-theme-amsterdam',
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Theme Amsterdam`,
        short_name: `Amsterdam`,
        background_color: `#f5f0eb`,
        theme_color: `#f5f0eb`,
        start_url: `/`,
        display: `standalone`,
        postsPerPage: 4,
        icon: require.resolve('./src/images/favicon.png'),
      },
    },
  ],
}
