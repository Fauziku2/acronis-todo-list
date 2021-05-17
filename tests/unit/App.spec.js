import { mount, createLocalVue } from '@vue/test-utils'
import App from '../../src/App'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)
const router = new VueRouter()

describe('App.vue', () => {
    let actions
    let store

    beforeEach(() => {
        actions = {
            init: jest.fn()
        }

        store = new Vuex.Store({
            modules: {
                todos: {
                    namespaced: true,
                    actions
                }
            }
        })
    })

    test('is a Vue instance', () => {
        const wrapper = mount(App, {store, localVue, router})
        expect(wrapper.vm).toBeTruthy()
    })

    test('calls init action when page is created', async () => {
        await mount(App, {store, localVue, router})
        expect(actions.init).toHaveBeenCalled()
    })
})