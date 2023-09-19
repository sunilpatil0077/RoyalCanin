class Login
{
    RClogo()
   {
    cy.get("img[src='https://dl.royalcanin.com/8-12-1/logo--primary.svg']").should('be.exist')
   }
    AccountIcon()
    {
      cy.get(".mini-user-icon").find(".mini-user-unLogin.iconfont.iconuser").click()
    }
     AlreadyhaveAccount()
     {
       cy.get(".already").should('have.text','Already registered?');
     }
     Register_Now()
     {
      cy.get(".newUser").find(".user-popover__register").should('have.text','Register now');
     }
     LoginLink()
     {
      cy.get(".user-unLogin-popover").find(".signIn.rc-btn.rc-btn--one").click()
     }
     Container()
     {
      cy.get(".container__title").and('have.text',"Login to").and('have.text',"your account")
     }
     SetUsername(username)
     {
      cy.get("#okta-signin-username").type("sunilpatil1308@gmail.com")
     }
     setpassword(password)
     {
      cy.get("#okta-signin-password").type("Sunil@007")
     }
     PrimaryContainer()
     {
      cy.get(".primary-auth-container").should('be.exist')
     }
      CheckBox()
      {
        cy.get("label[for='input55']").should('have.text','Remember me')
      }
      ForgotPwd()
      {
        cy.get("#login-forgot-password-btn").should('have.text','Forgot password')
      }
      CancelLink()
      {
        cy.get("#login-go-back-btn").should('have.text','Cancel') 
      }
     Submit()
     {
       return cy.get("#okta-signin-submit").click()
     }
     MarsPanel()
     {
      cy.get(".mars-footer-container").should('be.exist')
     }
     LoginConfirmation()
     {
      cy.get('[data-qa="hero-banner-heading"]').should('be.exist')
     }
}
export default Login;