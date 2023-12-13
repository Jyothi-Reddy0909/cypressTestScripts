class HomePage {
    txtUserName = "#email";
    txtPassword = "#password";
    btnLogin = '[value="Log in"]';
 
 
    verifySuccessMsg(expectedText) {
      cy.get(this.txtMessage).should("have.text", expectedText);
    }
    enterEmail(email,password) {
        cy.get(this.txtUserName).type(email);
        cy.get(this.txtPassword).type(password)
      }
  }
  const homePage = new HomePage();
  export default homePage;