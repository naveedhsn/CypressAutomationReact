describe('Positive Testing: QA-CODE-QUIZ', function () {
    it('First visit', function () {
        cy.visit('/')
        cy.wait(3000)
    })

    describe('Header Context', function() {
        it('Header context', function(){
            cy.get('.sc-bdVaJa > div').should('contain', 'qa.code-quiz.dev')
        })
    })

    describe('Acknowledgment of Login Button & Instructions', function(){
        it('Login button', function(){
            cy.get('.sc-bZQynM').should('contain', 'LOGIN')
        })

        it('Instructions', function(){
            cy.get('.sc-ifAKCX > div').should('contain', 'If you do not have an account, contact an admin')
        })
    })
    
    describe('Login with valid credential - SomeUser_name', function(){
        it('Login', function(){
            cy.get('[placeholder="Enter Username"]').type('SomeUser_name')
            cy.get('[placeholder="password"]').type('TopSecret1234!')
            cy.wait(2000)
            cy.get('.sc-bZQynM').click()
        })

        it('Assertions For User Information - Greeting', function(){
            cy.wait(2000)
            cy.get('.sc-bdVaJa > div').should('contain', 'Hello SomeName')
        })
        it('Assertions For User Information - Name', function(){
            cy.get('.sc-bwzfXH > :nth-child(1) > :nth-child(1)').should('contain', 'Name')
            cy.get('.sc-bwzfXH > :nth-child(1) > :nth-child(2)').should('contain', 'SomeName')
        })
        it('Assertions For User Information - Favourite Fruit', function(){
            cy.get('.sc-bwzfXH > :nth-child(2) > :nth-child(1)').should('contain', 'Favourite Fruit')
            cy.get('.sc-bwzfXH > :nth-child(2) > :nth-child(2)').should('contain', 'some fruit')
        })
        it('Assertions For User Information - Favourite Movie', function(){
            cy.get(':nth-child(3) > :nth-child(1)').should('contain', 'Favourite Movie')
            cy.get(':nth-child(3) > :nth-child(2)').should('contain', 'The Room')
        })
        it('Assertions For User Information - Favourite Number', function(){
            cy.get(':nth-child(4) > :nth-child(1)').should('contain', 'Favourite Number')
            cy.get(':nth-child(4) > :nth-child(2)').should('contain', 'BN<1234>')
        })
        it('Assertions For Logout Button', function(){
            cy.get('.sc-bxivhb').should('contain', 'LOGOUT')
        })

        it('Logout', function(){
            cy.wait(2000)
            cy.get('.sc-bxivhb').click()
        })
    })

    describe('Login with valid credential - dummytree', function(){
        it('Login', function(){
            cy.get('[placeholder="Enter Username"]').type('dummytree')
            cy.get('[placeholder="password"]').type('test1')
            cy.wait(2000)
            cy.get('.sc-bZQynM').click()
        })

        it('Assertions For User Information - Greeting', function(){
            cy.wait(2000)
            cy.get('.sc-bdVaJa > div').should('contain', 'Hello undefined')
        })
        it('Assertions For User Information - Name', function(){
            cy.get('.sc-bwzfXH > :nth-child(1) > :nth-child(1)').should('contain', 'Name')
            //cy.get('.sc-bwzfXH > :nth-child(1) > :nth-child(2)').should('contain', '')
        })
        it('Assertions For User Information - Favourite Fruit', function(){
            cy.get('.sc-bwzfXH > :nth-child(2) > :nth-child(1)').should('contain', 'Favourite Fruit')
            cy.get('.sc-bwzfXH > :nth-child(2) > :nth-child(2)').should('contain', 'Mango')
        })
        it('Assertions For User Information - Favourite Movie', function(){
            cy.get(':nth-child(3) > :nth-child(1)').should('contain', 'Favourite Movie')
            cy.get(':nth-child(3) > :nth-child(2)').should('contain', 'V for Vendetta')
        })
        it('Assertions For User Information - Favourite Number', function(){
            cy.get(':nth-child(4) > :nth-child(1)').should('contain', 'Favourite Number')
            cy.get(':nth-child(4) > :nth-child(2)').should('contain', 'The last prime number')
        })
        it('Assertions For Logout Button', function(){
            cy.get('.sc-bxivhb').should('contain', 'LOGOUT')
        })

        it('Logout', function(){
            cy.wait(2000)
            cy.get('.sc-bxivhb').click()
        })
    })
})