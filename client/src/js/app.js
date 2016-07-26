/** app.js
  * defines the main module and it's dependencies, plus
  * require statements for the rest of the app
**/

// manually edit the index.html in ways not yet supported by
// html-webpack-template (which builds our index.html)

document.body.setAttribute('ng-app', 'aidanmil_es');
document.getElementById('mountMe').setAttribute('ui-view', '');

// Angular code begins here
angular.module('aidanmil_es',
['ui.router', 'templates']);

// - - - - Require the rest of the app

// requireAll is a function that requires the contents of a directory the Webpack way
// for more info: https://webpack.github.io/docs/context.html
function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

// Webpack pipes the following required files first through any loaders defined in its configuration
// and then into app.bundle.js (including scss and html assets)

// all client js, except this file (app.js)
requireAll(require.context(__dirname, true, /^(?!.*app\.js).+\.js$/));

// stylesheets
require('../scss/main.scss');

// templates
requireAll(require.context('../templates', false, /\.html$/));

require('../assets/resume.pdf');
