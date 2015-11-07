var Merge = require('broccoli-merge-trees');
var Sass = require('broccoli-sass');

var stylePaths = [
  'sass',
  'bower_components/normalize-css',
  'bower_components/bourbon/app/assets/stylesheets',
  'bower_components/neat/app/assets/stylesheets',
  'bower_components/font-awesome/scss',
];

var styles = new Sass(stylePaths, 'app.scss', 'app.css');

module.exports = new Merge(['public', styles, 'bower_components/font-awesome/fonts'], {overwrite: true});
