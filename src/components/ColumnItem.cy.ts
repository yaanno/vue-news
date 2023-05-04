import ColumnItem from './ColumnItem.vue'

describe('<ColumnItem />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(ColumnItem)
  })
})