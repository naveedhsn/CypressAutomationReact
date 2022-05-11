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

        it('Email & password - #@%^%#$@#$@#.com', function(){
            cy.get('[placeholder="Enter Username"]').type('#@%^%#$@#$@#.com')
            cy.get('[placeholder="password"]').type('TopSecret1234!')
            cy.get('.sc-bZQynM').click()
            cy.wait(3000)
            cy.visit('/')
        })

        it('Email & valid password - @example.com', function(){
            cy.get('[placeholder="Enter Username"]').type('@example.com')
            cy.get('[placeholder="password"]').type('TopSecret1234!')
            cy.get('.sc-bZQynM').click()
            cy.wait(3000)
            cy.visit('/')
        })

        it('Email & valid password - Some one <email@example.com>', function(){
            cy.get('[placeholder="Enter Username"]').type('Some one <email@example.com>')
            cy.get('[placeholder="password"]').type('TopSecret1234!')
            cy.get('.sc-bZQynM').click()
            cy.wait(3000)
            cy.visit('/')
        })

        it('Email & valid password - email.example.com', function(){
            cy.get('[placeholder="Enter Username"]').type('email.example.com')
            cy.get('[placeholder="password"]').type('TopSecret1234!')
            cy.get('.sc-bZQynM').click()
            cy.wait(3000)
            cy.visit('/')
        })

        it('Email & valid password - email@example@example.com', function(){
            cy.get('[placeholder="Enter Username"]').type('email@example@example.com')
            cy.get('[placeholder="password"]').type('TopSecret1234!')
            cy.get('.sc-bZQynM').click()
            cy.wait(3000)
            cy.visit('/')
        })

        it('Email & valid password - .email@example.com', function(){
            cy.get('[placeholder="Enter Username"]').type('.email@example.com')
            cy.get('[placeholder="password"]').type('TopSecret1234!')
            cy.get('.sc-bZQynM').click()
            cy.wait(3000)
            cy.visit('/')
        })

        it('Email & valid password - email..email@example.com', function(){
            cy.get('[placeholder="Enter Username"]').type('email..email@example.com')
            cy.get('[placeholder="password"]').type('TopSecret1234!')
            cy.get('.sc-bZQynM').click()
            cy.wait(3000)
            cy.visit('/')
        })

        it('Email & valid password - Abc..123@example.com', function(){
            cy.get('[placeholder="Enter Username"]').type('Abc..123@example.com')
            cy.get('[placeholder="password"]').type('TopSecret1234!')
            cy.get('.sc-bZQynM').click()
            cy.wait(3000)
            cy.visit('/')
        })

        it('Random Text & password', function(){
            cy.get('[placeholder="Enter Username"]').type('AJSsdsdasacarmvJkasjs')
            cy.get('[placeholder="password"]').type('TopSecret1234!')
            cy.get('.sc-bZQynM').click()
            cy.wait(3000)
            cy.visit('/')
        })

        it('Number & password', function(){
            cy.get('[placeholder="Enter Username"]').type('135464635568461')
            cy.get('[placeholder="password"]').type('TopSecret1234!')
            cy.get('.sc-bZQynM').click()
            cy.wait(3000)
            cy.visit('/')
        })

        it('Special character & password', function(){
            cy.get('[placeholder="Enter Username"]').type('~!@$%^&*()_+=-')
            cy.get('[placeholder="password"]').type('TopSecret1234!')
            cy.get('.sc-bZQynM').click()
            cy.wait(3000)
            cy.visit('/')
        })
    })
})