import HomeView from './HomeView.vue'

describe('<HomeView />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    // @ts-ignore
    cy.mount(HomeView)
  })
})
