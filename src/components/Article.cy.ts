import Article from './Article.vue'
import articles from '@/data/articles.json'

describe('<Article />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Article, {
      props: {
        data: articles[0],
        style: '--horizontal: true'
      }
    })
  })
})