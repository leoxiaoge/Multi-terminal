// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    "autoprefixer": {},
    "postcss-aspect-ratio-mini": {},
    "postcss-viewport-units": {},
    "postcss-pxtorem": {
      "rootValue": 750,
      "propList": ["*"],
      "selectorBlackList": [
        ".ig-",
        ".vux-",
        ".weui-",
        ".scroller",
        ".dp-",
        ".mt-",
        ".mint-",
        ".range"
      ],
      "rep;ace": true,
      "mediaQuery": false,
      "minPixelValue": 0
    }
  }
}
