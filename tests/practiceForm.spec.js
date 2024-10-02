import { test } from "../lib/fixtures"

test.describe("Test Demo QA", () => {
    test.beforeEach(async ({ demoQA }) => {
        await test.step('Open the Demo QA Web', async () => {
            await demoQA.visit();
        });
    })

    test("Practice Form - Student Registration Form All Fields", async ({ demoQA }) => {

        await test.step('Fill and Submit the Student Registration Form All fields Submition', async () => {
            await demoQA.fillAndSubmitForm();
        });

        await test.step('Asserting Form Submission', async () => {
            await demoQA.assertFilledForm();
        });

    })

    test("Practice Form - Student Registration Form Mandatory Fields Only Submition", async ({ demoQA }) => {

        await test.step('Fill and Submit the Student Registration Form', async () => {
            await demoQA.fillAndSubmitFormMandatoryFields();
        });

        await test.step('Asserting Form Submission', async () => {
            await demoQA.assertMandatoryForm();
        });

    })

    test("Practice Form - Student Registration Form invalid Mandatory Fields Only Submition", async ({ demoQA }) => {

        await test.step('Fill and Submit the Student Registration Form', async () => {
            await demoQA.fillAndSubmitInvalidFormFields();
        });

        await test.step('Asserting Form Submission', async () => {
            await demoQA.assertInvalidForm();
        });

    })

    test("Practice Form - Student Registration Form Empty Submition", async ({ demoQA }) => {

        await test.step('Fill and Submit the Student Registration Form', async () => {
            await demoQA.fillAndSubmitEmptyForm();
        });

        await test.step('Asserting Form Submission', async () => {
            await demoQA.assertEmptyForm();
        });

    })
})
