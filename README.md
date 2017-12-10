# ng5 state management demo 
Demo of managing ui states by using pub/sub services. In three module we have multi-level child-parent structure where each level is able to add, update and delete it's children. This example is 3 levels diep. The idea is to have circular communication pattern BUT to avoid circular loops! The idea is similair to Flux/Redux pattern where data flows top-down using components properties and the updates go bottom-up using events and immutable objects. In this case event communication in Angular is best achieved using RxJs subject and behaviourSubject. Difference between these two is that second has intial/default value that each subscriber will receive at the moment of subscription. This is useful in some situation for passing default/intialisation values.

## Material Design
For styling we use Angular Material Design. Some testings of material design custom approach are also demonstrated in this project. All info is in material folder, inclusing custom selection of material components used in this demo project.

## Development server
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.0.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
