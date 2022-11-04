# Kiwi - QA Case Study

I've prepared this repository as a solution for given task.
The solution is based on Cypress framework using Typescript.
I've added [cucumber plugin](https://github.com/badeball/cypress-cucumber-preprocessor) so I can directly use my created `feature` files written in Gherkin syntax.

The definitions of Cucumber steps are stored in the `./cypress/e2e/support/step_definitions` folder.
I'm not sure if this is best practice but when I consider the size of the task it works just fine for me.

The commented code for the second part of the task is stored in the `./Task 2` folder.

## How tu run?
Project has been tested on these versions of node.js and npm which are also considered as prerequisities for this project
* node.js v18.12.0 (current LTS)
* npm v8.19.2

1. Build the project: `npm install`
2. Run tests: `npm run cy:run`

## Why are some Scenarios skipped?
I believe the main purpose of this task was to show I'm able to prepare working solution and not all Scenarios must be automated.
Also I believe I could think of much more Scenarios if I have full documentation and more time.
I take this as a task for a few hours and I adjusted scope to this fact.

## How to debug / develop?
You can open cypress by command `npm run cy:open`.
Note: You can run only one scenario from the feature file by providing `@only` tag and save some time.

## ToDo list
1. Pass baseUrls for frontend and API services via environment variables
2. Prepare docker image with correct node.js and npm versions for the CI/CD run
3. Add Cucumber HTML report
4. Implement step 'I fill random customer data' with help of faker library and custom command
5. Add example of Page Object Pattern if there is some extra time
6. Add at least some JSDoc documentation somewhere
7. Introduce code-style check

## How did it go?
It was fun after all and good to write and automate such simple scenarios again.
I've spent about 6 hours in total (2 evenings for about 3 hours each) on it.
The main complication has been during the set-up phase in the very beginning,
because there is no sandbox prepared on the internet for the Cypres, Cucubmer and typescript combination.
Well actually there are somes, but none of them has been prepared for the latest (10.*) cypress.
Also there is a error in the example code for the cucumber preprocessor plugin configuration what took me some time to find.

I cannot wait to discuss all topics about what I've done wrong and what can be done better.
I believe there will be plenty of such things, because Cypress has never been my primar testing framework.
