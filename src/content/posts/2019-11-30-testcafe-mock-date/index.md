---
title: "Mock Current Date in TestCafe: A concrete example"
date: 2019-11-30 12:30
slug: /testcafe-mock-current-date
template: post
description: Unfortunately TestCafe does not have a built in functionality to mock the current date. Read here how to achieve that anyway.
featuredImage: ./testcafe-mock-date.jpg
---

I recently had to set up E2E testing with TestCafe for a web application whose state depended heavily on the current system time.

To keep the test results consistent, I wanted the tests to always be operated with the exact same date. I wanted to mock the current date for the TestCafe tests.

I had some hope that TestCafe had something built in like the Cypress `cy.clock()` function. But unfortunately there is nothing like that.

So I spent a decent amount of time finding a way to mock the current date with TestCafe. And I thought it was worth to document my solution here on my blog for your advantage.

For this little tutorial, please refer to the following basic folder structure, where the testcafe folder is placed inside an Angular project:

```
.
+-- testcafe
|   +-- scripts
|       +-- mockDate.js
|   +-- tests
|       +-- test-case.spec.js
|       +-- another-test-case.spec.js
+-- .testcaferc.json
+-- package.json
```

The important files for this tutorial are `mockDate.js` and `.testcaferc.json`.

First of all you need to install the packages for TestCafe itself and a package called "mockdate".

```
npm install testcafe mockdate --save-dev``
```

After this is done, please create the file `mockDate.js` and just put one single line into it:

```js
window.MockDate.set('2019-02-15 08:30'); // YYYY-MM-DD HH:mm
```

The next step is to tell TestCafe needs to inject the necessary scripts into the client (the browser). This is necessary because TestCafe itself runs inside a Node.js environment and thus is server side.

To tell TestCafe to include our necessary scripts for mocking the current date, just write the following lines into the `.testcaferc.json`:

```json
{
  "clientScripts": [
    "node_modules/mockdate/src/mockdate.js",
    "testcafe/scripts/mockDate.js"
  ]
}
```

IMPORTANT: The `.testcaferc.json` file must be placed into the root directory of the project. This is the same level as the `package.json` file. With this, TestCafe will automatically recognize and process the configurations placed here.

That’s it! With this easy configuration you can be sure that your TestCafe E2E tests are always running with the same date and time.
