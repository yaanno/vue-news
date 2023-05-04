import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Article from '@/components/Article.vue'

describe('Article', () => {
  it('renders properly', () => {
    const wrapper = mount(Article, {
      props: {
        style: '--test: true',
        data: {
          title: 'Title',
          teaser: 'Teaser',
          meta: 'Author Name'
        }
      }
    })
    expect(wrapper.text()).toContain('Title')
    expect(wrapper.text()).toContain('Teaser')
    expect(wrapper.text()).toContain('Author Name')
  })
})
