# ExtWebComponents Client Module
This module includes the ExtWebComponents client side project. 

## Debug

### 1. Login to the npm repository
```
npm login --registry=https://npm.sencha.com --scope=@sencha
```


### 2. Run npm install
Download the dependencies.

```
npm install
```


### 3. Run webpackdev
You can run the webpack compiler watch with terminal CLI or with IntelliJ IDEA Ultimate. 

Run the webpack watcher, so every time you change a file it compiles and pushes to the webapp folder in the server.

```
npm run webpackdev
```

#### Run from IDE
This can be run from IntelliJ Ultimate launcher, which is included in this project. 


### 4. Start the webserver
Go to the server module and start the server