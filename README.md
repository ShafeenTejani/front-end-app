# Front End Dojo
A dojo for setting up a minimal front-end application using Webpack, React.js &amp; ES6

1. Checkout the code 
  * Import into IntelliJ as an sbt project (there is a simple Scala server to serve the front-end assets)
1. Run App.scala and go to [localhost:8080](http://localhost:8080) to view the application
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


## Using babel to write in ES6

Now let's try to convert our application to use ES6 syntax - which is much cooler!

1. Change the `fetchCharacter` function to use [ES6 syntax](http://es6-features.org/)
1. Rebuild your app - it will still work in Chrome and Safari which support ES6, but not IE11.
1. In order to get cross-browser compatibility we will use [Babel](https://babeljs.io/) to transpile our code back to ES5 when we build it.
1. Install the babel es2015 presets and the babel CLI following the instructions [here](http://babeljs.io/docs/plugins/preset-es2015/):
 1. `npm install --save-dev babel-cli babel-preset-env`
 1. `echo '{ "presets": ["es2015"] }' > .babelrc`
1. You can now transpile your code back to ES5 using the command: `./node_modules/.bin/babel index.js`

### Babel loader for webpack

1. Rather than having to manually run Babel, we can use the [babel-loader](https://github.com/babel/babel-loader) Webpack plugin to transpile our code as part of the build process.
1. Install the `babel-loader` and `babel-core` modules:
 1. `npm install babel-loader babel-core --save-dev`
1. Add the module settings for the `babel-loader` to your Webpack configuration file.
1. Now when you run a Webpack build it should transpile the code to ES5 - and the app should now work in IE11.


## Using React.js

Now let's modify our code to use [React](https://facebook.github.io/react/) instead of plain Javascript.

1. Install the `react` and `react-dom` packages
 1. `npm install --save react react-dom`
1. Create a React component called Characters.js which renders all of the Star Wars characters.
1. Update the index.js file to use ReactDOM to render your Characters components on completion of the api request
 1. `ReactDOM.render(<Characters data={characters}/>, document.getElementById('characters'));`
1. Try to build your app using Webpack. You will most likely get a sytnax error. This is because Webpack does not know how to handle JSX. We need to add a specific Babel loader to transpile JSX code into native JavaScript.
1. Install the Babel React preset
 1. `npm install --save-dev babel-preset-react`
 1. Add the `'react'` preset to the list of presets in your Webpack configuration file
1. You should be able to rebuild the app successfully now



## Extensions

1. Using Webpack to inline the loading of [images](https://www.davidmeents.com/blog/how-to-set-up-webpack-image-loader/) and [css files](https://github.com/webpack-contrib/css-loader)
1. Add the [mocha framework](https://mochajs.org/) for testing (along with [jsdom](https://github.com/tmpvar/jsdom) and [enzyme](https://github.com/airbnb/enzyme))
1. Use the [Webpack dev server](https://webpack.github.io/docs/webpack-dev-server.html) for faster development locally



