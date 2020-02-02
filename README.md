# Migrate AngularJS to Vue

Install the dependencies.
```sh
npm i
```

Launch development server:
```sh
npm start
```

Build
```sh
npm run build
```

## Stage 1

Here we only have our simple AngularJS platform.

Basically there are three different pages (landing, login and content) plus the root. The router (ui-router) manages to go to selected route. 

In the following stages we will be writing another application in VueJS, and eventually both apps will "coexists" thanks to a layer above them that will show either of them, depending on the route.
