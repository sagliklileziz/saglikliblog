module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":["gatsby-remark-prismjs",{"resolve":"gatsby-remark-images","options":{"maxWidth":1000,"linkImagesToOriginal":false,"withWebp":true}}]},
    },{
      plugin: require('../node_modules/gatsby-plugin-theme-ui/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-theme-amsterdam/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Gatsby Theme Amsterdam","short_name":"Amsterdam","background_color":"#f5f0eb","theme_color":"#f5f0eb","start_url":"/","display":"standalone","postsPerPage":4,"icon":"/Users/cem/Desktop/saglikliblog/src/images/favicon.png"},
    }]
