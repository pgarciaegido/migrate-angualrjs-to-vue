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

## Stage 3
Here we are checking when the application runs wether we are in a Vue or in an Angular Route. Depending on that, it renders either Angular or Vue application -via dynamic import-.
