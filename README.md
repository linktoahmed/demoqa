Project Setup Using Playwright/JS

This project demonstrates how to automate filling out a form with various fields using Playwright. The test cases include filling in different field sets and asserting the results.

Steps to Set Up and Run the Project:

Clone the Repository:
git clone https://github.com/linktoahmed/Playwright.git

Navigate to the Project Directory:
cd demoqa

Install Dependencies:
npm ci
npx install playwright

Run All Test Cases:
npx playwright test tests/practiceForm.spec.js



Summary of the Playwright Test Cases:
Fill Form with All Fields:

Fills in all the fields in the form.
Asserts that all field values are correctly submitted.

Fill Form with Mandatory Fields Only:

Fills in only the required fields.
Asserts that mandatory field values are correctly submitted.

Submit Empty Form:

Submits the form without filling in any fields.
Asserts that validation messages appear for the mandatory fields.

Fill Form with Invalid Inputs:

Fills the form with invalid data (e.g., incorrect email, phone number).
Asserts that validation errors are correctly triggered.

