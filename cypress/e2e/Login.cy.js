import Login from "D:/RoyalCanin/cypress/Pageobjetcs/Login.js"
describe('RC Login', () =>
 {
  it('LoginPage visit', () =>

   {
    const ln= new Login();
        
    cy.visit('https://www.royalcanin.com/us')
    cy.get("#onetrust-close-btn-container").click()
    // ln.RClogo().should('be.visible')
     ln.AccountIcon();
     ln.AlreadyhaveAccount();
     ln.Register_Now();
     ln.LoginLink();
     //ln.Container();
     ln.RClogo()
     ln.PrimaryContainer()
     cy.get("#onetrust-close-btn-container").click()
     ln.SetUsername("sunilpatil1308@gmail.com");
     ln.setpassword("Sunil@007");
     ln.CheckBox()
     ln.ForgotPwd()
     ln.CancelLink()
     ln.Submit();
     ln.MarsPanel();
     cy.wait(20000)
     ln.LoginConfirmation()

    /*cy.xpath("//button[@aria-label='My Account ']").click()
    cy.xpath("//a[normalize-space()='Log in']").contains("Log in")
    cy.xpath("//a[normalize-space()='Log in']").click()
    cy.get("#onetrust-close-btn-container").click()
    cy.get("#okta-signin-username").type("sunilpatil1308@gmail.com")
    cy.get("#okta-signin-password").type("Sunil@007")
    cy.get("#okta-signin-submit").click()
    cy.xpath("//button[@aria-label='My Account Sunil']").click()
    cy.xpath("//a[normalize-space()='Logout']").click()
    cy.get("img[src='https://dl.royalcanin.com/8-12-1/logo--primary.svg']").should("be.visible").click()
     */
  })
})
