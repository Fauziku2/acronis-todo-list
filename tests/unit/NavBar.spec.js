import { createLocalVue, shallowMount } from '@vue/test-utils'
import NavBar from '../../src/components/NavBar'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter({
    routes: [
        {
            path: '',
            name: 'home'
        },
        {
            path: '/about',
            name: 'about'
        }
    ]
})

describe('NavBar.vue', () => {
    test('is a Vue instance', () => {
        const wrapper = shallowMount(NavBar, {localVue, router})
        expect(wrapper.vm).toBeTruthy()
    })

    test('render RouterLink to about page',() => {
        const wrapper = shallowMount(NavBar, {localVue, router})
        let routerLink = wrapper.find('#about')
        expect(routerLink.attributes().to).toBe('/about')
    })
})