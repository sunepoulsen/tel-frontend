import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HomeContent from '@/app/modules/home/components/HomeContent.vue'

describe('HomeContent', () => {
  it('renders properties when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HomeContent, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})
