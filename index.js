const path = require('path');

// Load the generated hello.js file, which is the glue code for WebAssembly
const hello = require(path.resolve(__dirname, 'hello.js'));

// Now, the WebAssembly module has been instantiated, and we can call exported functions
hello.onRuntimeInitialized = () => {
  console.log('WebAssembly runtime initialized!');
  hello._main(); // Call the main function from the WebAssembly module
};
