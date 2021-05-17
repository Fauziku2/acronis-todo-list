import { shallowMount } from '@vue/test-utils'
import About from '../../src/components/About'

describe('About.vue', () => {
    test('is a Vue instance', () => {
        const wrapper = shallowMount(About)
        expect(wrapper.vm).toBeTruthy()
    })

    test('renders content in about page',() => {
        const wrapper = shallowMount(About)
        expect(wrapper.html()).toContain('Simple ToDo List Tool')
    })
})