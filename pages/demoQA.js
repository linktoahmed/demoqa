import { expect } from "@playwright/test";

export class demoQA {
    constructor(page, context) {
        this.page = page;
        this.context = context;
        this.demoUrl = 'automation-practice-form/'
        this.firstName = page.locator('#firstName');
        this.fNameText = 'John';
        this.lastName = page.locator('#lastName');
        this.lNameText = 'Cena';
        this.email = page.locator('#userEmail');
        this.emailText = 'johncena@demo.com';
        this.invalidEmailText = 'johncena123';
        this.gender = page.locator('.custom-control-label').first();
        this.mobile = page.locator('#userNumber');
        this.mobileText = '1234567890';
        this.invalidMobileText = 'abcdef';
        this.dob = page.locator('#dateOfBirthInput');
        this.dobText = '05 OCT 2000';
        this.subjectsField = page.locator('.subjects-auto-complete__value-container');
        this.subjectsInput = page.locator('#subjectsInput');
        this.subjectsInputOption = page.locator('.subjects-auto-complete__menu-list').first();
        this.subjectsText = ['English', 'Maths', 'Computer Science'];
        this.hobbies = page.locator('.custom-control-label').nth(3);
        this.filePath = 'test-files/pic.jpg';
        this.chooseFile = 'input[type="file"]';
        this.currentAddress = page.locator('#currentAddress');
        this.addressText = 'Apt. 925 46423 Dooley Stream, Kevinshire, ND 65165';
        this.state = page.locator('#react-select-3-input');
        this.stateText = 'NCR';
        this.city = page.locator('#react-select-4-input');
        this.cityText = 'Delhi';
        this.submit = page.locator('button.btn.btn-primary');
        this.submissionPopup = page.locator('.modal-title.h4');
        this.submissionPopupText = 'Thanks for submitting the form';
        this.studentName = page.locator('tr:has-text("Student Name")');
        this.studentNameText = 'John Cena';
        this.studentEmail = page.locator('tr:has-text("Student Email")');
        this.studentGender = page.locator('tr:has-text("Gender")');
        this.studentGenderText = 'Male';
        this.studentMobile = page.locator('tr:has-text("Mobile")');
        this.studentDob = page.locator('tr:has-text("Date of Birth")'); 
        this.studentdobText = '05 October,2000';
        this.studentSubjects = page.locator('tr:has-text("Subjects")');
        this.studentSubjectsText = 'English, Maths, Computer Science';
        this.studentHobbies = page.locator('tr:has-text("Hobbies")');
        this.studentHobbiesText = 'Sports';
        this.studentPic = page.locator('tr:has-text("Picture")');
        this.studentPicText = 'pic.jpg';
        this.studentAddress = page.locator('tr:has-text("Address")');
        this.StudentStateAndCity = page.locator('tr:has-text("State and City")');
        this.StudentStateAndCityText = 'NCR Delhi';
        this.redBackgroundColor = 'rgb(220, 53, 69)';
        this.greenBackgroundColor = 'rgb(40, 167, 69)';

    }

    async visit() {
        await this.page.goto('/automation-practice-form/');
        await expect(this.page).toHaveURL(this.demoUrl);
    }

    async fillAndSubmitForm() {
        await this.firstName.fill(this.fNameText); 
        await this.lastName.fill(this.lNameText); 
        await this.email.fill(this.emailText);
        await this.gender.click(); 
        await this.mobile.fill(this.mobileText); 
        await this.dob.fill(this.dobText);
        this.addSubjects();
        await this.hobbies.click();
        this.uploadFile();
        await this.currentAddress.fill(this.addressText);
        await this.state.fill(this.stateText);
        await this.page.keyboard.press('Enter');
        await this.city.fill(this.cityText);
        await this.page.keyboard.press('Enter');
        await this.submit.scrollIntoViewIfNeeded();  
        await this.submit.click();
    }

    async fillAndSubmitFormMandatoryFields() {
        await this.firstName.fill(this.fNameText); 
        await this.lastName.fill(this.lNameText); 
        await this.gender.click(); 
        await this.mobile.fill(this.mobileText); 
        await this.dob.fill(this.dobText);
        await this.submit.scrollIntoViewIfNeeded();  
        await this.submit.click();
    }

    async  assertMandatoryForm() {
        await expect(this.submissionPopup).toHaveText(this.submissionPopupText); 
        await expect(this.studentName).toContainText(this.studentNameText); 
        await expect(this.studentGender).toContainText(this.studentGenderText); 
        await expect(this.studentMobile).toContainText(this.mobileText); 
        await expect(this.studentDob).toContainText(this.studentdobText);   
    }

    async fillAndSubmitInvalidFormFields() {
        await this.firstName.fill(this.fNameText); 
        await this.lastName.fill(this.lNameText); 
        await this.gender.click(); 
        await this.mobile.fill(this.invalidMobileText); 
        await this.email.fill(this.invalidEmailText);
        await this.dob.fill(this.dobText);
        await this.submit.scrollIntoViewIfNeeded();  
        await this.submit.click();
    }

    async assertInvalidForm() {
        await expect(this.firstName).toHaveCSS('border-color', this.greenBackgroundColor);
        await expect(this.lastName).toHaveCSS('border-color', this.greenBackgroundColor);
        await expect(this.dob).toHaveCSS('border-color', this.greenBackgroundColor);
        await expect(this.gender).toHaveCSS('border-color', this.greenBackgroundColor);
        await expect(this.email).toHaveCSS('border-color', this.redBackgroundColor);
        await expect(this.mobile).toHaveCSS('border-color', this.redBackgroundColor);
    }

    async fillAndSubmitEmptyForm() {
        await this.submit.scrollIntoViewIfNeeded();  
        await this.submit.click();
    }

    async assertEmptyForm() {
        await expect(this.firstName).toHaveCSS('border-color', this.redBackgroundColor);
        await expect(this.lastName).toHaveCSS('border-color', this.redBackgroundColor);
        await expect(this.gender).toHaveCSS('border-color', this.redBackgroundColor);
        await expect(this.mobile).toHaveCSS('border-color', this.redBackgroundColor);
    }

    async addSubjects() {
        await this.subjectsField.click();
        for (let i = 0; i < 3; i++) {
            await this.subjectsInput.fill(this.subjectsText[i]);
            await this.subjectsInputOption.click();
        }
    }

    async uploadFile() {
        await this.page.setInputFiles(this.chooseFile, this.filePath);
    }
    async assertFilledForm() {
        await expect(this.submissionPopup).toHaveText(this.submissionPopupText); 
        await expect(this.studentName).toContainText(this.studentNameText); 
        await expect(this.studentEmail).toContainText(this.emailText); 
        await expect(this.studentGender).toContainText(this.studentGenderText); 
        await expect(this.studentMobile).toContainText(this.mobileText); 
        await expect(this.studentDob).toContainText(this.studentdobText); 
        await expect(this.studentSubjects).toContainText(this.studentSubjectsText); 
        await expect(this.studentHobbies).toContainText(this.studentHobbiesText); 
        await expect(this.studentPic).toContainText(this.studentPicText); 
        await expect(this.studentAddress).toContainText(this.addressText); 
        await expect(this.StudentStateAndCity).toContainText(this.StudentStateAndCityText); 
    }
}