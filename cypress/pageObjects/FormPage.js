import { BasePage } from "./BasePage";

export class FormPage extends BasePage {
    static get url() {
        return "/automation-practice-form";
    }

    static get inputFirstName() {
        return cy.get("#firstName");
    }

    static get inputLastName() {
        return cy.get("#lastName");
    }

    static get inputEmail() {
        return cy.get("#userEmail");
    }

    static get radioGender() {
        return cy.get("#genterWrapper");
    }

    static get inputPhoneNumber() {
        return cy.get("#userNumber");
    }

    static get inputDateOfBirth() {
        return cy.get("#dateOfBirthInput");
    }

    static get selectDateOfBirthYear() {
        return cy.get(".react-datepicker__year-select");
    }

    static get selectDateOfBirthMonth() {
        return cy.get(".react-datepicker__month-select");
    }

    static get buttonDateOfBirthDay28() {
        return cy.get("[aria-label=\"Choose Friday, February 28th, 1930\"]");
    }

    static get inputSubjects() {
        return cy.get("#subjectsInput");
    }

    static get radioHobbies() {
        return cy.get("#hobbiesWrapper");
    }

    static get buttonSelectPicture() {
        return cy.get("#uploadPicture");
    }

    static get textareaCurrentAddress() {
        return cy.get("#currentAddress");
    }

    static get state() {
        return cy.get("#state");
    }

    static get city() {
        return cy.get("#city");
    }

    static get buttonSubmit() {
        return cy.get("#submit");
    }

    static get tableResult() {
        return cy.get("table");
    }
}
