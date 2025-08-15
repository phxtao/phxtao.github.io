module.exports = {
  content: ["_site/**/*.html"],   // where PurgeCSS will look for used classes
  css: ["_site/assets/css/*.css"], // CSS files to purge
  output: "_site/assets/css"       // folder for cleaned CSS
};