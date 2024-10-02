1- clone this repositroy by using ->git colne https://github.com/linktoahmed/Playwright.git
2- cd in to demoqa and run ->
        npm ci
        npx install playwright
3- To run all test cases
        npx playwright test tests\practiceForm.spec.js



Here's a summary of what was covered in the sample Playwright test code:

1-  Fill form with all the fields
    Assert all the fields
2-  FIll form with mandatory fields only
    Assert all fields data
3-  Fill empty form
    Assert mandatory fileds validation
4-  Fill form with invalid inputs
    Assert fileds validation
