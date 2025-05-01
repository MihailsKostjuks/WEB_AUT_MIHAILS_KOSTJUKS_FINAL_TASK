import { FormPage } from "../pageObjects/FormPage"

const FIRST_NAME = "Jon";
const LAST_NAME = "Jones";
const EMAIL = "something@outlook.com";
const MOBILE_NUMBER = "321321321";
const YEAR = "1930";
const MONTH = "February";
const CITY = "Minnesota";
const IMAGE_FILE_NAME = "my_dawg.jpg";
const SUBJECT = "Biology";
const HOBBY = "Sports";

describe("FINAL_TASK", () => {
  context("Form test", () => {
    beforeEach(() => {
      FormPage.visit();
    })

    it("Fill the form", () => {
      // filling the form
      FormPage.inputFirstName.type(FIRST_NAME);
      FormPage.inputLastName.type(LAST_NAME);
      FormPage.inputEmail.type(EMAIL);
      FormPage.radioGender.find(`input[value='Male']`).check({ force: true });
      FormPage.inputPhoneNumber.type(MOBILE_NUMBER);
      FormPage.inputDateOfBirth.click();
      FormPage.selectDateOfBirthYear.select(YEAR);
      FormPage.selectDateOfBirthMonth.select(MONTH);
      FormPage.buttonDateOfBirthDay28.click();
      FormPage.inputSubjects.type(SUBJECT).type("{enter}");
      FormPage.radioHobbies.find("label").contains(HOBBY).click();
      FormPage.buttonSelectPicture.selectFile(
          `./cypress/e2e/files/${IMAGE_FILE_NAME}`,
          {action: "select"}
      );
      FormPage.textareaCurrentAddress.type(CITY);
      FormPage.state.click().find("#react-select-3-option-0").click();
      FormPage.city.click().find("#react-select-4-option-0").click();
      FormPage.buttonSubmit.click();

      // validation
      const infoToValidateInTable = [
        FIRST_NAME,
        LAST_NAME,
        EMAIL,
        MOBILE_NUMBER,
        `28 ${MONTH},${YEAR}`,
        SUBJECT,
        HOBBY,
        IMAGE_FILE_NAME,
        CITY,
        "NCR Delhi"
      ]
      infoToValidateInTable.forEach((info) => {
        FormPage.tableResult.should("contain.text", info);
      });
    });
  });
});
