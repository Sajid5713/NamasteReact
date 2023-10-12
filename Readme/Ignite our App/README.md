<!-- Iginte out app -->

What is NPM?
-> Npm is the largest software registry, from which we can install packages/dependencies as per our need into our application. It is used to manage packages.

- npm install <package-name> or npm i <package-name>

What is Parcel/Webpack? Why do we need it?
-> Parcel is a bundler that is used to package our application properly so that it can be pushed to production. The use of the parcel is to increase the browser loading and execution. It also allows us to automatically preserve your application state between updates. It enables us to automatically remove the unused code in the application. There are numbers of many other reason for it use.

What is .parcel-cache
-> When we run npx parcel it will generate a .parcel-cache directory and inside it it contains all the code that is written in C++ with information about our project so when it is rebuilt it doesn't have to re-parse and re-analyze the project again, making it faster in development mode.

What is npx?
-> NPX stands for (Node Package eXecute) used to execute the code inside the package. It enables the developer to execute the JS package from the NPM registry without even installing it.

What is the difference between dependencies vs devDependencies
-> Dependencies are packages that are necessary to run applications properly and DevDependencies are required for development and testing purposes.

What is Tree Shaking?
-> Tree Shaking is the process of reducing the unused/dead code to reduce the size of the bundle and improve performance. Tree Shaking is quite handy because the dependencies we install on our application can cause laggy performance, sometimes not all the dependencies are needed and just a chunk of code is in need from a dependency.

What is Hot Module Replacement?
-> HMR Hot Module Replacement exchange, add or remove module during run time without a full reload.

The application asks the HRM runtime to check for updates.
Then the HRM runtime asynchronously downloads the updated and notifies the application.
Then the application asks the runtime to update the changes.
Afterward, runtime synchronously updates the changes.

List down your favorite 5 superpowers of Parcel and describe any 3 of them in your own words.
-> Parcel came with many features that enabled the developers to write efficient code. Some of them are below:

Dev build --- Generate a development-ready application in one go.

Local Server --- Generate a Local server environment for the app.

Hot reloading

Caching --- Generate a cache

Minification

Error handling

Tree shaking

Diagnostics

Differential Bundling -- Allow the apps compatible with all browsers and versions.

Code Splitting

What is .gitignore? What should we add and not add to it?

-> The .gitignore is a plain file that contains a pattern for files/folders to ignore. All data that are required for our application should not be added. only files/dir that can be regenerated can be put into .gitignore files like node_modules, dist, cache, etc.

What is the difference between package.json and package-lock.json
-> The package.json is a configuration for the NPM manager. These packages are also called "Dependencies". The package-lock.json keeps track of the exact version of the dependency that is installed on the development, if a new release of the packages is released it keeps track of the exact version.

Why should I not modify package-lock.json?
-> These files contain all the data records of the exact version of all the Dependencies that are used by the application. The purpose of these files is to ensure that the same dependencies are installed across all different environments, such as development and production environments.

What is node_modules? Is it a good idea to push that on git?
-> It is like DB for all dependencies. All dependencies fetched from the NPM registry are inside node_modules. Since it can be regenerated with package.json and package-lock.json there is no need to push it to git.

What is the dist folder?
-> When we run the command npx parcel it starts to bundle the files and generate dev. build and hosted it to a local server with a port and place all the files inside this dist. directory. When we make a change it use the dist and .cache to show these changes.

What is browserlists?
-> It is tools that specifies which browsers should our apps. should be used by specifying in the package.json file /config file.

Read about: ^ - caret and ~ - tilda

-> ^ or is JSON is used to automatically update the package -> ~ it will install major versions of packages, use it wisely as it can cause issues.
