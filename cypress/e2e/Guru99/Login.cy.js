// login_spec.js

import homePage from "../../pageObjects/Login";
describe('Login Scenario', () => {
    it('should log in with valid credentials', () => {
      // Open the application
      cy.visit('https://demo.guru99.com/insurance/v1/index.php');
 
      // Enter valid login credentials
      cy.fixture('guru99TestData.json').then((data) => {
        // Use the fixture data in your test
        cy.log(data.LoginData.username);
        homePage.enterEmail(data.LoginData.username,data.LoginData.password)
      });
      // Click on the login button
     cy.get('[value="Log in"]').click();
  
    // Assert that the login is successful
    
    cy.contains('Welcome to Insurance Broker').should('be.visible');
  });

  it('should handle login failure with invalid credentials', () => {
    // Open the application
    cy.visit('https://demo.guru99.com/insurance/v1/index.php');

    // Enter invalid login credentials
    cy.fixture('guru99TestData.json').then((data) => {
        // Use the fixture data in your test
        cy.log(data.LoginData.username);
        homePage.enterEmail(data.InvalidLoginData.username,data.LoginData.password)
      });
    // Click on the login button
    cy.get('[name="submit"]').click();

    // Assert that the login fails and an error message is displayed
    cy.contains('Enter your Email address and password correct').should('be.visible');
   
  });
  });
  