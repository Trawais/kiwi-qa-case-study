# Kiwi - QA Case Study

I've prepared this repository as a solution for given task.
The solution is based on Cypress framework with Typescript.
I've added [cucubmer]() plugin so I can directly use my created `feature` files written in Gherkin syntax.

The definitions of Cucumber steps are stored in the `cypress/e2e/support/step_definitions` folder.

## How tu run?
Project has been tested on these versions of node.js and npm
* node.js v18.12.0 (current LTS)
* npm v8.19.2

1. Build the project: `npm install`
2. Run test: `npm run cy:run`

## Why are some Scenarios skipped?
I believe the main purpose of this task was to show I'm able to prepare working solution and not all Scenarios must be automated.
Also I believe I could think of much more Scenarios if I have full documentation and more time.
I take this as a task for a few hours and I adjusted scope to this fact.

## ToDo list
1. Add at least some JSDoc documentation somewhere
2. Add example of Page Object Pattern if there is some extra time
