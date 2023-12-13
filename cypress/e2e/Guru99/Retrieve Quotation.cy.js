// retrieve_quotation_spec.js
import homePage from "../../pageObjects/Login";
describe('Retrieve Quotation Scenario', () => {
    beforeEach(() => {
      // Assuming you have a successful login before each test
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
  
    it('should retrieve a quotation', () => {
      // Navigate to the "Retrieve Quotation" section
      cy.contains('Retrieve Quotation').click();
  
      // Retrieve a quotation using valid details
      cy.get('[name="quoteid"]').type('your_quotation_id'); // Replace with an actual quotation ID
      cy.get('[name="retrievequote"]').click();
  
      // Assert that the retrieved quotation details are accurate
      cy.contains('Quotation Details').should('be.visible');
      // Add further assertions based on the structure of the retrieved quotation details
    });
  });
  