// profile_spec.js
import homePage from "../../pageObjects/Login";
describe('Profile Scenario', () => {
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
  
    it('should view user profile information', () => {
      // Navigate to the "Profile" section
      cy.get('#ui-id-4').click();
  
      // Verify that the user's profile information is displayed correctly
      cy.contains('User Profile').should('be.visible');
      // Add further assertions based on the structure of the user's profile information
    });
  });
  