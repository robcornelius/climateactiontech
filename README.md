# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Some points

I converted the CSV to JSON as I would hope that is what a GET endpoint would return. I also trucated it for brevity

I also produced a JSON file for the unique sector names in the converted JSON file to mock an endpoint which returns this.

For both of these JSON files I simply used an `import` statement rather than using `fetch` or using `axios`. Again this was just to save time.

### If I had time to write some tests I would do the following.

Test the drop down shows all the unique sectors from the endpoint.

use `cypress` to select a random option in the drop down and then check a few random rows in the table have ticks and crosses in the right places.

### Other things I would do on something on a larger scale project

* use react-query to abstract away calls to the back end, maintain state between the front and the back end etc.
* probably use a widget library such as `materialUi`, `antd` or similar rather than start from scratch. Its still possible to use `styled-components` with those libraries
* create a CI/CD pipeline using what ever tools are available. If nothing else just running `npm test` to pass or fail a build.
* create a design system using `storybook` for components. Hook that into CI/CD for detecting visual changes. Teach UX/UI designers to love it
* sort out `prettier` fighting with `eslint`. Probably by only having one

#### In the distant future

* use NPM to bundle up components
* tie NPM to CI/CI and `storybook`
* set up code coverage for tests and tie it to CI/CD
* use `husky` to generate git hooks to prevent pesky `console` and `debugger` statements winding up in the build
* containerization...
* I could go on...
