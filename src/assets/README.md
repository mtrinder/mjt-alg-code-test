[README.md]

# Agl Code Test

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Requirements ##

Based on the instructions on [http://agl-developer-test.azurewebsites.net](http://agl-developer-test.azurewebsites.net)

* Data source can be aquired from a JSON object by sending an HTTP request to [http://agl-developer-test.azurewebsites.net/people.json](http://agl-developer-test.azurewebsites.net/people.json)
* The data source needs to be processed to display result with the rules of:
  * Display all cats in alphabetical order,
  * All cats are listed under their owners' gender

## Technology Stack ##
* Angular 7 (CLI)
* Bootstrap (Ngx-Bootstrap)
* Font-Awesome
* Typescript-Collections
* Mardown Viewer (Ngx-Md)

## Implementation ##

* A PersonService class was created to consume the JSON data via a HTTP GET request
* If the HTTP request is successful, the resulting JSON data is deserialised with the Person & Pet data models
* A People data model is used to divide the data by Gender and then sort the resulting lists in a dictionary
* A third-party library called [typescript-collections](https://www.npmjs.com/package/typescript-collections) was used for storing and sorting the Person / Pet data
* A custom generic [Pipe](https://angular.io/guide/pipes) - [callback.pipe.ts](./src/app/callback.pipe.ts) was used to filter and show only Cats in the browser output 


## Unit Test Output

<img alt="Coverage Report" src="/assets/test-output.png" width="800">
