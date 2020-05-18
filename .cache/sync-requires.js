const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/cem/Desktop/saglikliblog/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---node-modules-gatsby-theme-amsterdam-src-templates-post-js": hot(preferDefault(require("/Users/cem/Desktop/saglikliblog/node_modules/gatsby-theme-amsterdam/src/templates/post.js"))),
  "component---node-modules-gatsby-theme-amsterdam-src-templates-posts-js": hot(preferDefault(require("/Users/cem/Desktop/saglikliblog/node_modules/gatsby-theme-amsterdam/src/templates/posts.js"))),
  "component---node-modules-gatsby-theme-amsterdam-src-templates-tag-js": hot(preferDefault(require("/Users/cem/Desktop/saglikliblog/node_modules/gatsby-theme-amsterdam/src/templates/tag.js"))),
  "component---node-modules-gatsby-theme-amsterdam-src-pages-404-js": hot(preferDefault(require("/Users/cem/Desktop/saglikliblog/node_modules/gatsby-theme-amsterdam/src/pages/404.js"))),
  "component---src-pages-hakkimizda-js": hot(preferDefault(require("/Users/cem/Desktop/saglikliblog/src/pages/hakkimizda.js")))
}

