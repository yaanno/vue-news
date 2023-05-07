import Article from './ArticleCard.vue'
import articles from '@/data/articles.json'

describe('<Article />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    // @ts-ignore
    cy.mount(Article, {
      props: {
        data: articles[0],
        style: '--horizontal: true'
      }
    })
  })
})
