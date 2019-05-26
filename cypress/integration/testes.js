describe('Teste da API people', () => {
      var result

      it('Validação de header', () => {
            result = cy.request('https://swapi.co/api/people/1/');

            result.its('headers').its('content-type').should('include', 'application/json');

      })

      it('Validação de status', () => {
            result = cy.request('https://swapi.co/api/people/1/');

            result.its('status').should('equal', 200);
      })

      it('Validação de conteúdo da resposta', () => {
            result = cy.request('https://swapi.co/api/people/1/');
            result.its('body').its('name').should('include', 'Luke Skywalker');
            result = cy.request('https://swapi.co/api/people/1/');
            result.its('body').its('height').should('include', '172');
            result = cy.request('https://swapi.co/api/people/1/');
            result.its('body').its('mass').should('include', '77');
            result = cy.request('https://swapi.co/api/people/1/');
            result.its('body').its('hair_color').should('include', 'blond');
            result = cy.request('https://swapi.co/api/people/1/');
            result.its('body').its('skin_color').should('include', 'fair');
            result = cy.request('https://swapi.co/api/people/1/');
            result.its('body').its('eye_color').should('include', 'blue');
            result = cy.request('https://swapi.co/api/people/1/');
            result.its('body').its('birth_year').should('include', '19BBY');
            result = cy.request('https://swapi.co/api/people/1/');
            result.its('body').its('gender').should('include', 'male');

      })
}) 

describe('Teste da API planets', () => {
    var result

    it('Validação de header', () => {
          result = cy.request('https://swapi.co/api/planets/1/');

          result.its('headers').its('content-type').should('include', 'application/json');

    })

    it('Validação de status', () => {
          result = cy.request('https://swapi.co/api/planets/1/');

          result.its('status').should('equal', 200);
    })

    it('Validação de conteúdo da resposta', () => {
          result = cy.request('https://swapi.co/api/planets/1/');
          result.its('body').its('name').should('include', 'Tatooine');
          result = cy.request('https://swapi.co/api/planets/1/');
          result.its('body').its('rotation_period').should('include', '23');
          result = cy.request('https://swapi.co/api/planets/1/');
          result.its('body').its('orbital_period').should('include', '304');
          result = cy.request('https://swapi.co/api/planets/1/');
          result.its('body').its('diameter').should('include', '10465');
          result = cy.request('https://swapi.co/api/planets/1/');
          result.its('body').its('climate').should('include', 'arid');
          result = cy.request('https://swapi.co/api/planets/1/');
          result.its('body').its('gravity').should('include', '1 standard');
          result = cy.request('https://swapi.co/api/planets/1/');
          result.its('body').its('terrain').should('include', 'desert');
          result = cy.request('https://swapi.co/api/planets/1/');
          result.its('body').its('surface_water').should('include', '1');
          result = cy.request('https://swapi.co/api/planets/1/');
          result.its('body').its('population').should('include', '200000');

    })
}) 