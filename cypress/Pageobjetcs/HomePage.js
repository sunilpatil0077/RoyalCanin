class Homepage
{
   Headers()
   {
    return cy.get('[data-qa="header-logo"]').get('[data-qa="header-menu"]').should("be.visible").and("exist")
   }
    Footers()
   {
     return cy.get('.sc-cezyBN.lnJqve').get('.sc-fPrdXf.bmGJJp').get('.mars-footer-container').should("be.visible").and("exist")
   }
    RClogo()
    {   
    cy.get('[data-qa="header-logo-image"]').should('be.visible')    
    }
    HeroBanner()
    {
        cy.get('[data-qa="hero-banner"]').should('be.exist').invoke('text').then((text) => {expect(text.length).to.be.at.least(10)})
    }
    Dog_Cat_image()
    {
        cy.get('.sc-bAwCGc.sc-jFAnKH.hsIeAp.gobaTG').should('be.exist') 
    }
      Hero_banner_CTA()
     {
        cy.xpath('/html/body/div[1]/main/section/div/div[1]/a').should('be.exist')
     }
     Content_Block()
     {
        cy.get('body > div:nth-child(2) > main:nth-child(3) > div:nth-child(2) > div:nth-child(1)').should('be.be.visible') 
     }
     Content_Block_text()
     {
      cy.get(':nth-child(2) > [data-qa="content-block-variant-inner"] > [data-qa="content-blocks-text"] > [data-qa="content-block-title"]').should('be.exist').invoke('text').then((text) => {expect(text.length).to.be.at.least(10)})
     }
     Content_Block_texts()
     {
      cy.get('body > div:nth-child(2) > main:nth-child(3) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)').should('be.exist').invoke('text').then((text) => {expect(text.length).to.be.at.least(10)})
     }
     Dog_Cat_CTAs()
     {
        cy.xpath('//*[@id="__next"]/main/div[1]/div/div[2]/div[2]/a[1]').xpath('//*[@id="__next"]/main/div[1]/div/div[2]/div[2]/a[1]').should('be.exist') 
     }
     Discover_our_Products_Block()
     {
        cy.get('[data-qa="product-blocks"]').should('be.visible') 
     }
     Discover_our_Products_Block_Title()
     {
        cy.get('[data-qa="product-blocks-title"]').should('be.exist').invoke('text').then((text) => {expect(text.length).to.be.at.least(10)})
     }
     Discover_our_Products_Images()
     {
        cy.get('[data-qa="product-blocks-item-image"]').should('have.length',4) 
     }
     Veterinary_Range_block()
     {
        cy.get('body > div:nth-child(2) > main:nth-child(3) > div:nth-child(4) > div:nth-child(1)').should('be.exist') 
     }
     Veterinary_Range_block_Image()
     {
      cy.xpath('/html/body/div[1]/main/div[3]/div/div[1]/img').should('be.visible') 
     }
     Veterinary_Range_block_Title()
     {
        cy.get("body > div:nth-child(2) > main:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > h2:nth-child(1)").should('be.exist').invoke('text').then((text) => {expect(text.length).to.be.at.least(10)})
     }
     Veterinary_Range_block_SubTitle()
     {
        cy.get('body > div:nth-child(2) > main:nth-child(3) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)').should('be.exist').invoke('text').then((text) => {expect(text.length).to.be.at.least(10)})
     }
     Veterinary_Range_CTAs()
     {
        cy.xpath("/html/body/div[1]/main/div[1]/div/div[2]/div[2]/a[1]").xpath("/html/body/div[1]/main/div[1]/div/div[2]/div[2]/a[1]").should('be.exist') 
     }
     Product_finder_Block()
     {
        cy.xpath('/html/body/div[1]/main/div[4]').should('be.exist') 
     }
     Product_finder_Block_Image()
     {
        cy.get("img[alt='royal canin packaging']").should('be.exist') 
     }
      Product_finder_Block_Title()
     {
        cy.xpath('/html/body/div[1]/main/div[1]/div/div[2]/h2').should('be.exist').invoke('text').then((text) => {expect(text.length).to.be.at.least(10)})
     }
     Product_finder_Block_SubTitle()
     {
        cy.xpath('/html/body/div[1]/main/div[4]/div/div[2]/div[1]/div').should('be.exist').invoke('text').then((text) => {expect(text.length).to.be.at.least(10)})
     }
     Product_finder_Block_CTA()
     {
        cy.xpath("/html/body/div[1]/main/div[4]/div/div[2]/div[2]/a").should('be.visible') 
     }
     //Health_Now_and_always_Block()
      Health_Now_and_always_Block()
     {
        cy.xpath("/html/body/div[1]/main/div[5]/div/div[1]/div/div").should('be.exist') 
     }
     Health_Now_and_always_Image()
     {
        cy.xpath("/html/body/div[1]/main/div[5]/div/div[1]/div/div/div[1]/img").should('be.visible') 
     }
     Health_Now_and_always_Title()
     {
        cy.xpath("/html/body/div[1]/main/div[5]/div/div[1]/div/div/div[2]/h2").should('be.exist').invoke('text').then((text) => {expect(text.length).to.be.at.least(10)})
     }
     Health_Now_and_always_SubTitle()
     {
        cy.xpath("/html/body/div[1]/main/div[5]/div/div[1]/div/div/div[2]/div[1]").should('be.exist').invoke('text').then((text) => {expect(text.length).to.be.at.least(50)})
     }
     Health_Now_and_always_CTAs()
     {
        cy.xpath("/html/body/div[1]/main/div[5]/div/div[1]/div/div/div[2]/div[2]/a[1]").xpath("/html/body/div[1]/main/div[5]/div/div[1]/div/div/div[2]/div[2]/a[2]").should('be.exist') 
     }
     //Discover Breeds Component
      Discover_Breeds_Block()
     {
        cy.xpath("/html/body/div[1]/main/div[5]/div/div[2]/div/div").should('be.exist') 
     }
      Discover_Breeds_Block_Image()
     {
        cy.xpath("/html/body/div[1]/main/div[5]/div/div[2]/div/div/div[1]/img").should('be.visible') 
     }
      Discover_Breeds_Block_Title()
     {
        cy.xpath("/html/body/div[1]/main/div[5]/div/div[2]/div/div/div[2]/h2").should('be.exist').invoke('text').then((text) => {expect(text.length).to.be.at.least(10)})
     }
     Discover_Breeds_Block_SubTitle()
     {
        cy.xpath("/html/body/div[1]/main/div[5]/div/div[2]/div/div/div[2]/div[1]/div").should('be.exist').invoke('text').then((text) => {expect(text.length).to.be.at.least(50)})
     }
     Discover_Breeds_Block_CTAs()
     {
        cy.xpath("/html/body/div[1]/main/div[5]/div/div[2]/div/div/div[2]/div[2]/a[2]").should('be.exist') 
     }
      About_Royalcanin_Block()
     {
        cy.xpath("/html/body/div[1]/main/div[7]").should('be.exist') 
     }
      Discover_Breeds_Block_Image()
     {
        cy.xpath("/html/body/div[1]/main/div[5]/div/div[2]/div/div/div[1]/img").should('be.visible') 
     }
      Discover_Breeds_Block_Title()
     {
        cy.xpath("/html/body/div[1]/main/div[5]/div/div[2]/div/div/div[2]/h2").should('be.exist').invoke('text').then((text) => {expect(text.length).to.be.at.least(10)})
     }
     Discover_Breeds_Block_SubTitle()
     {
        cy.xpath("/html/body/div[1]/main/div[5]/div/div[2]/div/div/div[2]/div[1]/div").should('be.exist').invoke('text').then((text) => {expect(text.length).to.be.at.least(50)})
     }
     Discover_Breeds_Block_CTAs()
     {
        cy.xpath("/html/body/div[1]/main/div[5]/div/div[2]/div/div/div[2]/div[2]/a[2]").should('be.exist') 
     }
     
}
export default Homepage