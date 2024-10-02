import { test as baseTest } from "@playwright/test";
import { demoQA } from "../pages/demoQA.js";

export const test = baseTest.extend({
    demoQA: async ({ page, context }, use) => {
        await use(new demoQA(page, context));
    },
})