// logout_spec.js
import homePage from "../../pageObjects/Login";
describe('Logout Scenario', () => {
    beforeEach(() => {
      // Assuming you have a successful login before each test
      cy.visit('https://demo.guru99.com/insurance/v1/index.php');
      // Enter valid login credentials
      cy.fixture('guru99TestData.json').then((data) => {
        // Use the fixture data in your test
        cy.log(data.LoginData.username);
        homePage.enterEmail(data.LoginData.username,data.LoginData.password)
        // Click on the login button
     cy.get('[value="Log in"]').click();
      });
    });
  
    it('should log out successfully', () => {
      // Click on the "Logout" button
      cy.contains('Log out').click();
  
      // Assert that the user is successfully logged out
      // cy.contains('You have logged off your account').should('be.visible');
      
    });
  });
  