// const domains = require('../fixtures/domains.js');

// domains.forEach((domain) => {
//   if (!domain.forms.newsletter) return 

  describe(`Newsletter form, structure and functionality test for Artemis`, () => {

  // beforeEach(() => {
    
    // })
    
  it('form contains visible required fields', () => {
    cy.visit(`https://admin.artemis.accessify.cloud/PostOffice/Form/aff8de78-01fe-47b6-9c76-abb5438c97c8`)
    cy.get('input[required]').should('have.length.at.least', 1)

    cy.get('input[required]').each((el) => {
      cy.wrap(el).should('be.visible')
    })

  });

  it('form submits correctly if required fields are filled', () => {
    cy.visit(`https://admin.artemis.accessify.cloud/PostOffice/Form/aff8de78-01fe-47b6-9c76-abb5438c97c8`)
    cy.get('input[required]').each((el) => {
      const type = el.attr('type')

      if (type === 'email') {
        cy.wrap(el).type('c.vandam@accessify.cloud')
      }

      if (type === 'text') {
        cy.wrap(el).type('Cypress Test')
      }

      if (type === 'checkbox') {
        const checkboxId = el.attr('id')

        cy.get(`label[for="${checkboxId}"]`).click()
      }
    })

    cy.get('button[type="submit"]').should('be.visible').and('not.be.disabled')
    // todo: click submit
  });
});

// })



