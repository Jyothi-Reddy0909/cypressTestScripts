// edit_profile_spec.js
import homePage from "../../pageObjects/Login";
describe('Edit Profile Scenario', () => {
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
  
    it('should edit user profile information', () => {
      // Navigate to the "Profile" section
      cy.contains('Profile').click();
  
      // Click on the "Edit Profile" button
      cy.contains('Edit Profile').click();
  
      // Modify user profile information
      cy.get('[name="clientOccupation"]').clear().type('New Occupation');
      // Add more steps to edit other profile information as needed
  
      // Save the changes
      cy.get('[name="update"]').click();
  
      // Assert that the changes are reflected in the user's profile
      cy.contains('Profile Updated Successfully').should('be.visible');
    });
  });
  