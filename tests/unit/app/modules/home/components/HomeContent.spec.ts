import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HomeContent from '@/app/modules/home/components/HomeContent.vue'

describe("HomeContent", () => {
  test('Render msg prop as a header', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HomeContent, {
      propsData: { msg }
    })

    expect(wrapper.html()).to.include('<h1>' + msg + '</h1>')
  })
})
