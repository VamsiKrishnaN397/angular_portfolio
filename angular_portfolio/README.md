# AngularPortfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Command for Production Build and Uploading to Github Pages

ng build --configuration=production --base-href="/angular_portfolio/"

## Things to do to run locally

Comment the base href with /angular_portfolio/ and make it just / to run locally without any errors in index.html file but for deployment we must use the
angular_portfolio else we get 404 not found error !

Everytime before pushing code to Github add a 404.html file by copy pasting the newly generqated index.html file in the docs folder along with the dist build to prevent the angular spa page reload and refresh issue of getting 404 page not found error ! I can keep using the angular custom cli builder to automcatically generate the 404.html file by copying the contents of the newly generated index.html file ! Link to article to do it atuomcatically https://dev.to/andyt2503/angular-fix-404-error-after-reloading-github-pages-with-custom-angular-cli-builder-1270
