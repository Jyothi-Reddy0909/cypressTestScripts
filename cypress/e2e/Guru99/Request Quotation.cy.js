// quotation_spec.js
import homePage from "../../pageObjects/Login";
describe('Request Quotation Scenario', () => {
    beforeEach(() => {
      // Assuming you have a successful login before each test
      cy.visit('https://demo.guru99.com/insurance/v1/index.php');
 
      // Enter valid login credentials
      cy.fixture('guru99TestData.json').then((data) => {
        // Use the fixture data in your test
        cy.log(data.LoginData.username);
        homePage.enterEmail(data.LoginData.username,data.LoginData.password)
      });
      // Click on the login button
     cy.get('[value="Log in"]').click();
    });
  
    it('should submit a quotation request', () => {
      // Navigate to the "Request Quotation" section
      cy.contains('Request Quotation').click();
  
      // Fill in the necessary details for a quotation
      cy.get('[name="quotationname"]').type('Car Insurance');
      cy.get('[name="clienFname"]').type('John');
      cy.get('[name="clientLname"]').type('Doe');
      cy.get('[name="clientDob"]').type('01/01/1980');
      cy.get('[name="clientAddress"]').type('123 Main St');
      cy.get('[name="clientEmail"]').type('john.doe@example.com');
      cy.get('[name="clientTelephone"]').type('1234567890');
      cy.get('[name="clientOccupation"]').type('Software Developer');
      cy.get('[name="clientRisk"]').type('Low');
  
      // Submit the quotation request
      cy.get('[name="submit"]').click();
  
      // Assert that the quotation request is successfully submitted
      cy.contains('Quotation has been successfully submitted.').should('be.visible');
    });
  });
  