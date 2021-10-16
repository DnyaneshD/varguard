[![Unit tests](https://github.com/DnyaneshD/varguard/actions/workflows/unit.yml/badge.svg)](https://github.com/DnyaneshD/varguard/actions/workflows/unit.yml)
[![Integration Tests](https://github.com/DnyaneshD/varguard/actions/workflows/integration.yml/badge.svg)](https://github.com/DnyaneshD/varguard/actions/workflows/integration.yml)
[![Visual Regression Tests](https://github.com/DnyaneshD/varguard/actions/workflows/visual.yml/badge.svg)](https://github.com/DnyaneshD/varguard/actions/workflows/visual.yml)
[![Lint test](https://github.com/DnyaneshD/varguard/actions/workflows/lint.yml/badge.svg)](https://github.com/DnyaneshD/varguard/actions/workflows/lint.yml)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The purpose of this project is to prepare demo app for Vanguard test.

## Deployment

This applications is deployed on AWS S3 [here](http://vanguardtest.s3-website.eu-central-1.amazonaws.com/). This is just for testing purpose.

##### In case I am breaking some privacy laws about logo or something. I can remove it from aws immediatly. Please let me know.

To run the project locally please find following scripts.

## Available Scripts

In the project directory, you can run:

### `npm install`

To install all required packages.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. If not in use already.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run cy:run`

Runs the cypress tests without lauching it.<br>

### `npm run cy:open`

Runs the cypress tests with lauching in headless browser mode.<br>

### `npm run cy:visual`

Runs the cypress visual tests. These tests are mainly based on snapshot.<br>

### `npm run lint`

This command is to run ESLint rules on the project. In case there are some issues `npm run lint:fix` can be used to fix errors.<br>

## Things covered:

- All the fields to enter data with validations
- Handled state of the fields
- Unit tests to check and build confidance on the app
- Cypress based tests to cover E2E
- Visual tests to snapshot the state of applications
- Linting to enusre uniform coding and avoiding detailed testing

## Things I missed due to time limit:

- https://restcountries.eu/rest/v2/region/europe or https://restcountries.eu/rest/v2/region/americas was not working for me so hard coded values for it. And missed on showing how I can handle API calls.
- Resposive UI for other view ports
- css with styled components
- Unit tests review. To check if all scenarios covered.
- Lot of major/minor code improvemnts

Thanks a lot for reading it till here. As there is always scope of improvment so, please let me know your valudable feedback about code.

Have a nice time!
