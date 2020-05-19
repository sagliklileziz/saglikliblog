module.exports = {
  siteMetadata: {
    title: 'Sağlıklı Leziz',
    description:
      'Sağlıklı ve Leziz Tariflerin Adresi',
    url: 'https://www.youtube.com/channel/UCuzgqx1I2waTpEjYDJiptXA',
    author: 'Sağlıklı Leziz',
    image: 'static/og-image.jpg',
    intro: 'Sağlıklı ve Leziz Tariflerin Adresi',
    menuLinks: [
      {
        name: 'Sağlıklı Leziz',
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
