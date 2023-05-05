import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Article from '@/components/Article.vue'
import articles from '@/data/articles.json'

describe('Article', () => {
  it('renders properly', () => {
    const wrapper = mount(Article, {
      props: {
        style: '--horizontal: true',
        data: articles[0]
      }
    })
    expect(wrapper.text()).toContain(articles[0].title)
    expect(wrapper.text()).toContain(articles[0].teaser)
    expect(wrapper.text()).toContain(articles[0].author.name)
  })
})
