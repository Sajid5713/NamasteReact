<!-- Iginte out app -->

- What is `NPM`?

-> Npm is the largest software registry, from which we can install packages/dependencies as per our need into out application. It is used to manage packages.

    - npm install <package-name> or mpm i <package-name>

- What is `Parcel/Webpack`? Why do we need it? 

-> Parcel is a bundler that is used to packages our application properly so that it can be pushed to production. The use of the parcel is to increase the browser loading and execution. It also allow us to automatically preserve your application state between updates. It enables us to automatically remove the unused code in the application. There are numbers of many other reason for it used.

- What is `.parcel-cache` 

-> When we run npx parcel <filename> it will generate a .parcel-cache directory and inside it it contain all the code that is written in C++ with information about our project and so when it is rebuild it doesn't have to re-parse and re-analyze the project again, making it faster in development mode.

- What is `npx` ? 

-> NPX stands for (Node Package eXecute) used to execute the code inside the package. It enables the developer to execute JS package from NPM registry without even installing it. 

- What is difference between `dependencies` vs `devDependencies`

-> Dependencies are packages that are necessary to run application properly and DevDependencies are required for development and testing purposes. 

- What is Tree Shaking? 

-> Tree Shaking is process of reducing the unused / dead code to reduce the size of the bundle and improve performance. Tree Shaking is quite handy because the dependencies we install on our application can cause laggy performance, sometimes not all the dependencies are needed and just chunk of code is in need from a dependency.

- What is Hot Module Replacement? 

-> HMR Hot Module Replacement exchange, add or remove module during run time without a full reload. 
 - The application ask the HRM runtime to check for updates.
 - Then the HRM runtime asynchronously download the updated and notifies the application. 
 - Then application ask the runtime to update the changes. 
 - Afterward runtime synchronously updates the changes.

- List down your favorite 5 superpowers of Parcel and describe any 3 of them in your own words. 

-> Parcel came with many features that enables the developers to write a efficient code. Some of them are below:

 - Dev build --- Generate a development ready application in one go.
 - Local Server --- Generate a Local server environment for the app.
 - Hot reloading 
 - Caching --- Generate a cache
 - Minification
 - Error handling
 - Tree shaking
 - Diagnostics
 - Differential Bundling -- Allow the apps compatible for all browsers and versions.
 - Code Splitting

- What is `.gitignore`? What should we add and not add into it? 

-> The .gitignore is a plain file that contains a pattern for files / folder to ignore. All data that are required for our application should not be added. only files/dir that can be regenerated can be put into .gitignore file like node_modules, dist, cache etc.

- What is the difference between `package.json` and `package-lock.json` 

-> The package.json is configuration for NPM manager. These packages are also called "Dependencies". The package-lock.json keep track of the exact version of the dependency that is installed on the development, if a new release of the packages is released it keep the track of the exact version.

- Why should I not modify `package-lock.json`? 

-> This files contain all the data record of the exact version of all the Dependencies that are used by the application. The purpose of this files is to ensure that same dependencies are installed across all different environment, such as development and production environments.

- What is `node_modules` ? Is it a good idea to push that on git? 

-> It is like DB for all dependencies. All dependencies fetch from NPM registry are inside node_modules. Since it can be regenerated with package.json and package-lock.json so there is no need to push it to git.

- What is the `dist` folder? 

-> When we run command npx parcel <index file> it start to bundle the files and generate dev. build and hosted it to local server with port and place all the files inside this dist. directory. When we make a change it use the dist and .cache to show these changes.

- What is `browserlists`?

-> It is tools that specifies which browsers should our apps. should use by specifying in package.json file /config file. 

Read about: ^ - caret and ~ - tilda 

-> ^ or  is json is used to automatically update the package
-> ~ it will install major version of packages, use it wisely as it can cause issues.
