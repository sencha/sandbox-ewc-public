# ExtWebComponent Project Examples

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