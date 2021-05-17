import { createLocalVue, mount } from '@vue/test-utils'
import { v4 as uuidv4 } from 'uuid'
import Activity from '../../src/components/Activity'
import { Checkbox } from 'element-ui'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Checkbox)

describe('Activity.vue', () => {
    let propsData
    let actions
    let store
    let taskName = 'Task 1'
    beforeEach(() => {
        propsData = {
            task: {
                id: uuidv4(),
                name: taskName,
                status: 'not completed'
            }
        }

        actions = {
            updateTaskStatus: jest.fn(),
            deleteTask: jest.fn()
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
        const wrapper = mount(Activity, {propsData, store, localVue})
        expect(wrapper.vm).toBeTruthy()
    })

    test('renders the task name', () => {
        const wrapper = mount(Activity, {propsData, store, localVue})
        expect(wrapper.html()).toContain(taskName)
    })

    test('calls deleteTask action when x icon is clicked', () => {
        const wrapper = mount(Activity, {propsData, store, localVue})
        wrapper.find('i.el-icon-close').trigger('click')
        expect(actions.deleteTask).toHaveBeenCalled()
    })

    test('calls updateTaskStatus action when checkbox is clicked', () => {
        const wrapper = mount(Activity, {propsData, store, localVue})
        wrapper.find('input.el-checkbox__original').trigger('click')
        expect(actions.updateTaskStatus).toHaveBeenCalled()
    })
})