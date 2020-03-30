# natours1

\*\*March 2019- looks like need to start from part 50, to rebuild some of the app.

node.js and mongoDB project from udemy

stuck here section 8, 82. All else working
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
/Users/family/Desktop/natours1/server.js:24
app.listen(port, () => {
^

TypeError: app.listen is not a function
at Object.<anonymous> (/Users/family/Desktop/natours1/server.js:24:5)
at Module.\_compile (internal/modules/cjs/loader.js:956:30)
at Object.Module.\_extensions..js (internal/modules/cjs/loader.js:973:10)
at Module.load (internal/modules/cjs/loader.js:812:32)
at Function.Module.\_load (internal/modules/cjs/loader.js:724:14)
at Function.Module.runMain (internal/modules/cjs/loader.js:1025:10)
at internal/main/run_main_module.js:17:11
[nodemon] app crashed - waiting for file changes before starting...

changes port to 5000 on both js files and the config file
