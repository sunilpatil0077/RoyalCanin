import Homepage from "D:/CypressAutomation/PageObjects/HomePage.js"


describe('HomePage validation',()=>{

    const jsonData = require('D:/RoyalCanin/cypress/fixtures/Homepage_URLS.json')
    jsonData.Pages.forEach((page) => {

        it(`${page.title}`, function() {
            const HomePage= new Homepage();
            cy.visit(page.url)

        
           // const HomePage= new Homepage();
        
            //cy.visit('https://rh-sc-rlt-weu-01.rlt.royalcanin.com/dk')
           // cy.get('.ot-sdk-container > .ot-sdk-row').click({force:true})
            cy.get("#onetrust-accept-btn-handler").click({force:true})

            //Headers and Footers
            HomePage.Headers()
            HomePage.Footers()

            //Hero Banner
            HomePage.RClogo()
            HomePage.HeroBanner()
            HomePage.Dog_Cat_image()
            HomePage.Hero_banner_CTA()

            
            //Try our online store for pet owners component
            HomePage.Content_Block()
            HomePage.Content_Block_text()
            HomePage.Content_Block_texts()
            HomePage.Dog_Cat_CTAs()
0
            //Discover our products component
            HomePage.Discover_our_Products_Block()
            HomePage.Discover_our_Products_Block_Title()
            HomePage.Discover_our_Products_Images()

            //Explore our veterinary range component
            HomePage.Veterinary_Range_block()
            HomePage.Veterinary_Range_block_Image()
            HomePage.Veterinary_Range_block_Title()
            HomePage.Veterinary_Range_block_SubTitle()
            HomePage.Veterinary_Range_CTAs()

            //Product-finder block component
            HomePage.Product_finder_Block()
            HomePage.Product_finder_Block_Image()
            HomePage.Product_finder_Block_Title()
            HomePage.Product_finder_Block_SubTitle()

            //Health now and always
            HomePage.Health_Now_and_always_Block()
            HomePage.Health_Now_and_always_Image()
            HomePage.Health_Now_and_always_Title()
            HomePage.Health_Now_and_always_SubTitle()
            HomePage.Health_Now_and_always_CTAs()

            //Discover our Breeds
            HomePage.Discover_Breeds_Block()
            HomePage.Discover_Breeds_Block_Image()
            HomePage.Discover_Breeds_Block_Title()
            HomePage.Discover_Breeds_Block_SubTitle()
            HomePage.Discover_Breeds_Block_CTAs()

            //About Royal canin
            
   
})
    })

})