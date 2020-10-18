import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HomeContent from '@/app/modules/home/components/HomeContent.vue'

describe("HomeContent", () => {
  test('Render msg prop', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HomeContent, {
      propsData: { msg }
    })

    expect(wrapper.text()).to.include(msg)
  })
})
