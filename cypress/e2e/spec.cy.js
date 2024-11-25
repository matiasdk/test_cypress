describe('template spec', () => {
  it('Crear tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("Comprar el Pan{enter}")
  })



  it('Marcar tarea como completada', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("Pasear al Perro{enter}")
    cy.get('[data-testid="todo-item-toggle"]').click()
  })



  it('Desmarcar tarea completada', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("Sacar la Basura{enter}")
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="todo-item-toggle"]').click()
  })



  it('Editar tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("Lavar los Platos{enter}")
    cy.get('[data-testid="todo-item-label"]').dblclick()
    cy.get('.view > .input-container > [data-testid="text-input"]').type(" y las Copas{enter}")
  })



  it('Borrar Tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("Preparar la cena{enter}")
    cy.get('div.view button').invoke('show')
    cy.get('button.destroy').click()
  })



  it('Filtrar Tareas', () => { 
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("Fregar el Suelo{enter}")
    cy.get('[data-testid="text-input"]').type("Hacer la Cama{enter}")
    cy.get('[data-testid="text-input"]').type("Poner Lavadora{enter}")
    cy.get('[data-testid="text-input"]').type("Colgar la Ropa{enter}")
    cy.get('[data-testid="text-input"]').type("Pasar Aspiradora{enter}")
    cy.get('[data-testid="text-input"]').type("Descansar :){enter}")
    cy.get(':nth-child(2) > .view > [data-testid="todo-item-toggle"]').click()
    cy.get(':nth-child(3) > .view > [data-testid="todo-item-toggle"]').click()
    cy.get(':nth-child(5) > .view > [data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="footer-navigation"] > :nth-child(3) > a').click()
    cy.get(':nth-child(2) > a').click()
    cy.get(':nth-child(1) > a').click()
  })
})