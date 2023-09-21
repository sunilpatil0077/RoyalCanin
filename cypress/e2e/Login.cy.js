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

     
  })
})
