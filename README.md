# Front End Dojo
A dojo for setting up a minimal front-end application using Webpack, React.js &amp; ES6

1. Checkout the code 
  * Import into IntelliJ as an sbt project (there is a simple Scala server to serve the front-end assets)
1. Run App.scala and go to localhost:8080 to view the application
1. Look at the developer network console and make a note of the network requests that are made


## Using Webpack as a build tool
https://webpack.js.org/guides/get-started/

1. To get webpack we'll first use npm as our package manager
1. Run `npm init` in the `webui` directory
1. Install the webpack dependency `npm install --save-dev webpack`
1. Change the code so that your entry point is a file called `index.js`
1. Convert `nanoajax` to be an npm dependency
  1. Install nanoajax using npm
  1. Delete the `nanoajax.min.js` file and the reference to it from `index.html`
  1. import `nanoajax` before it is used in your code
1. Update the index.html to load a file called `bundle.js` which will be output of our webpack build
1. Build our app using webpack: `./node_modules/.bin/webpack index.js dist/bundle.js`
1. Check the application still works and note the difference in network requests

### Using Webpack configuration files

1. Create a `webpack.config.js` file following instructions [here](https://webpack.js.org/guides/get-started/#using-webpack-with-a-config)
1. You can now build the project by running `./node_modules/.bin/webpack --config webpack.config.js`. Try adding this to your `package.json` as an npm script!
  



