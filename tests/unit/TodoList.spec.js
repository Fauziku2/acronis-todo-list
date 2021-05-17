import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { v4 as uuidv4 } from 'uuid'
import TodoList from '../../src/components/TodoList'
import { Button, Checkbox, Input } from 'element-ui'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Checkbox)
localVue.use(Button)
localVue.use(Input)

describe('TodoList.vue', () => {
    let getters
    let actions
    let store
    let taskName = 'Task 2'

    beforeEach(() => {
        getters = {
            tasks: () => [
                {
                    id: uuidv4(),
                    name: 'Test 1',
                    status: 'not completed'
                }
            ]
        }

        actions = {
            addTask: jest.fn()
        }

        store = new Vuex.Store({
           modules: {
               todos: {
                   namespaced: true,
                   getters,
                   actions
               }
           }
        })
    })

    test('is a Vue instance', () => {
        const wrapper = mount(TodoList, {store, localVue})
        expect(wrapper.vm).toBeTruthy()
    })

    test('Add button to be disabled when input field is empty', async () => {
        const wrapper = mount(TodoList, {store, localVue})
        let addBtn = wrapper.find('button.add-btn')
        expect(addBtn.attributes().disabled).toBe('disabled')
    })

    test('show error message on keyup enter when input field is empty', async () => {
        const wrapper = mount(TodoList, {store, localVue})
        const taskInput = wrapper.find('input.el-input__inner')
        await taskInput.trigger('keyup.enter')
        expect(wrapper.html()).toContain('Please input a valid task')
    })

    test('calls addTask action when button is clicked', async () => {
        const wrapper = mount(TodoList, {store, localVue})
        const taskInput = wrapper.find('input.el-input__inner')
        await taskInput.setValue(taskName)
        wrapper.find('button.add-btn').trigger('click')
        expect(actions.addTask).toHaveBeenCalled()
    })

    test('calls addTask action on keyup enter after input field is filled', async () => {
        const wrapper = mount(TodoList, {store, localVue})
        const taskInput = wrapper.find('input.el-input__inner')
        await taskInput.setValue(taskName)
        await taskInput.trigger('keyup.enter')
        expect(actions.addTask).toHaveBeenCalled()
    })
})