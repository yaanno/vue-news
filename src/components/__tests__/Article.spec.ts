import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Article from '@/components/ArticleCard.vue'
import articles from '@/data/articles.json'

import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router'

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

describe('Article', () => {
  it('renders properly', () => {
    const wrapper = mount(Article, {
      props: {
        style: '--horizontal: true',
        data: articles[0]
      },
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.text()).toContain(articles[0].title)
    expect(wrapper.text()).toContain(articles[0].teaser)
    expect(wrapper.text()).toContain(articles[0].author.name)
  })
})
