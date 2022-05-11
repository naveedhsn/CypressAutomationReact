describe('QA-CODE-QUIZ', function () {
    it('First visit', function () {
        cy.visit('/')
        cy.wait(3000)
    })

    describe('Test with username & password', function(){
        it('Valid username & wrong password', function(){
            cy.get('[placeholder="Enter Username"]').type('SomeUser_name')
            cy.get('[placeholder="password"]').type('TopSecret121dfaa')
            cy.get('.sc-bZQynM').click()
            cy.wait(3000)
            cy.visit('/')
        })
    
        it('Wrong username & valid password', function(){
            cy.get('[placeholder="Enter Username"]').type('SomeUser_one')
            cy.get('[placeholder="password"]').type('TopSecret1234!')
            cy.get('.sc-bZQynM').click()
            cy.wait(3000)
            cy.visit('/')
        })
    })

    describe('Test with email & password', function(){
        it('Email & wrong password', function(){
            cy.get('[placeholder="Enter Username"]').type('someone@gmail.com')
            cy.get('[placeholder="password"]').type('TopSecret121dfaa')
            cy.get('.sc-bZQynM').click()
            cy.wait(3000)
            cy.visit('/')
        })
    
        it('Email & valid password', function(){
            cy.get('[placeholder="Enter Username"]').type('someone@gmail.com')
            cy.get('[placeholder="password"]').type('TopSecret1234!')
            cy.get('.sc-bZQynM').click()
            cy.wait(3000)
            cy.visit('/')
        })
    })
})