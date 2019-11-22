# GXT & ExtWebComponent Project Examples
This is a quick example to show how easy it is to use ExtWebComponents in your GXT application. 

## Project Highlights

- [ExtWebComponents.js](sandbox-gxt-ewc/src/main/java/com/projectname/project/client/ExtWebComponents.js) - the Web Components source. 
- [FromTemplate.html](https://github.com/sencha/sandbox-ewc-public/blob/master/sandbox-gxt-ewc/src/main/java/com/projectname/project/client/myview/FormTemplate.html#L63) - Where the Web Components are being used. 
- [Entry Point](https://github.com/sencha/sandbox-ewc-public/blob/master/sandbox-gxt-ewc/src/main/java/com/projectname/project/client/GxtEwcProjectEntryPoint.java#L35) - It's important to note that the resources are loaded dynamically so the debugging can happen instantatly with out restarting the debugger. 

## Create the Project
There are two steps to use this project.
First, create a GXT project if you don't already have one. 
Secondly, import and configure the ExtWebComponent usage. 

### Create GXT Project
Follow these steps to setup a bare bones GXT project. 

1. Login to maven, [using settings.xml](https://docs.sencha.com/gxt/4.x/guides/getting_started/maven/Maven.html).

2. Generate your a project with this. 
```
mvn archetype:generate -DarchetypeGroupId=com.sencha.gxt.archetypes \
  -DarchetypeArtifactId=gxt-basic-support-4x-archetype \
  -DgroupId=com.projectname.project \
  -DartifactId=sandbox-gxt-ewc \
  -Dmodule=GxtEwcProject
```

### Create ExtWebComponents Project
Follow these three steps to add ExtWebComponents to your GXT Application.

1. Sign up for the ExtWebComponents Early Adopter. Or purchase it.


2. Login
`npm login --registry=https://sencha.myget.org/F/early-adopter/npm/ --scope=@sencha`

3. Create the package.json

```
{
  "name": "ewc sandbox project",
  "version": "1.0.0",
  "description": "ext-web-components example",
  "scripts": {},
  "devDependencies": {
    "@sencha/ext-web-components": "~7.1.0"
  }
}
```

4. Run `npm install`. This will download the dependencies used in the project. 


## Debug
This configuration uses the webcomponents with out a bundler. 
This means the javascript has to be copied to the webapp directory. 

### Create Launcher
1. Run `npm install` - this downloads the node_modules
2. Run `mvn resources:copy-resources` - this copys the node modules to the webapp folder. 
3. Create an IDE launcher to run the project.
4. Launch the GWT debugger. 

### Modifications
1. Make a code modification
2. Reload the browser and the GWT compiler will recompile the changes. 
