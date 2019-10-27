# ExtWebComponents Java Sandbox Project

## Project Manifest

### sandbox-client
This module includes the ExtWebComponents project.

- Note: The `./sandbox-client/build` is the build folder. 
- Note: The `./sandbox-client/build` is copied to `./sandbox-server/target/sandbox` on each compile.  

### sandbox-server
This module includes the Java servlet container webapp.

- Note: The build is compiled to `./sandbox-server/target/sandbox`. This is the webapp folder.  



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
The browser will be started. If it isn't navigate to [http://localhost:8080/sandbox].

- Note: Be sure to open dev tools and disable caching! 

 