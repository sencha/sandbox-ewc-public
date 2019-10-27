# ExtWebComponents Server Module
This module can be hosted with a servlet container, such as Jetty or Tomcat. 

## Client
The ExtWebComponent application will be copied to the build folder. 
Webpack does the resource bundling and copying to the build folder.  

## Debug
There is more than one way to run the servlet container. 

### IntelliJ Jetbrains Ultimate (Recommended)
Configure and start a Jetty server. Use the plugin that comes with Ultimate. 

1. Launch the Jetty server. 

### IntelliJ Jetbrains Community Edition
Install the Jetty plugin. Run it from the web app folder with the libraries. 
You'll have to run the maven packaging to move the resources to the target web application. 

1. Run `mvn package`
2. Launch the Jetty server.

### Eclipse 
Configure and start a Tomcat WTP server. Run the web server from the target webapp folder. 

1. Run `mvn package`
2. Launch the Tomcat WTP server.



