const domains = [
  "artemis",
  "development.artemis"
]

domains.forEach((domain) => {
  describe(`"Afspraak maken" form, structure and functionality test for ${domain}`, () => {

  beforeEach(() => {
    cy.visit(`https://admin.${domain}.accessify.cloud/PostOffice/Form/6efd6eb5-fe92-4cf7-bfa5-74c3bfd44cf4`)
  })
    
  it('form contains visible required fields', () => {
    cy.get('input[required]').should('have.length.at.least', 1)

    cy.get('input[required]').each((el) => {
      cy.wrap(el).should('be.visible')
    })
  })


  it('form submits correctly if required fields are filled', () => {    
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
  
  })

});

})



