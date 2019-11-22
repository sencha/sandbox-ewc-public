# ExtWebComponents Java Backend Project Example
This is an simple example project featuring maven multi-module project architecture. 

## Project Manifest

### sandbox-client
This module includes the ExtWebComponents project.

- Note: The `./sandbox-client/build` is the build folder. 
- Note: The `./sandbox-client/build` is copied to `./sandbox-server/target/sandbox` on each compile.  

### sandbox-server
This module includes the Java servlet container webapp.

- Note: The build is compiled to `./sandbox-server/target/sandbox`. This is the webapp folder.  


## IDE
Use IntelliJ IDEA Ultimate for the best debugging experience. 

Note: You could use IntelliJ Community Edition, but you won't get full npm and Javascript feature integrations. 
Keep in mind you can run the server from a CE Jetty plugin and webpackdev from CLI.  

### Open Project
Open the project from the root. 

### Jetty
You'll have to download the Jetty Binaries, and stick them some where. So you can run the Jetty server. 



## Debug
The debugging will be covered using IntelliJ Ultimate Debugging. 
Although the same strategy could be done using terminal commands. 

### Prerequisites

- IntelliJ Ultimate Jetty Plugin.
- IntelliJ Ultimate npm Plugin.
- Login and install client dependencies in the [client module](./sandbox-client). 

### Client
Start the client webpack compiler.

Launch `Run webpackdev` in the IntelliJ launch menu. 

### Server
Start the Jetty server.  

Launch `Run Server` in the IntelliJ launch menu. 

### Browser
The browser will be started. If it isn't navigate to [http://localhost:8080/sandbox](http://localhost:8080/sandbox).

- Note: Be sure to open dev tools and disable caching! 

 
