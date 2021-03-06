var plugins = [{
      plugin: require('/Users/cem/Desktop/saglikliblog/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":["gatsby-remark-prismjs",{"resolve":"gatsby-remark-images","options":{"maxWidth":1000,"linkImagesToOriginal":false,"withWebp":true}}]},
    },{
      plugin: require('/Users/cem/Desktop/saglikliblog/node_modules/gatsby-plugin-theme-ui/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/cem/Desktop/saglikliblog/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/cem/Desktop/saglikliblog/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/cem/Desktop/saglikliblog/node_modules/gatsby-theme-amsterdam/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/cem/Desktop/saglikliblog/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Gatsby Theme Amsterdam","short_name":"Amsterdam","background_color":"#f5f0eb","theme_color":"#f5f0eb","start_url":"/","display":"standalone","postsPerPage":4,"icon":"/Users/cem/Desktop/saglikliblog/src/images/favicon.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"1918e3feacf878a21f2f1cd693d04908"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
