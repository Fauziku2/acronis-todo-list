import * as types from '../../mutation-types'
import axios from 'axios'

const state = {
 tasks: []
}

const mutations = {
    [types.ADD_TASK] (state, task) {
        state.tasks.push(task)
    },
    [types.GET_TASKS] (state, tasks) {
        state.tasks.splice(0)
        state.tasks.push(...tasks)
    },
    [types.UPDATE_TASK_STATUS] (state, updatedTask) {
        let activity = state.tasks.find(task => task.id === updatedTask.id)
        activity.status = updatedTask.status
    },
    [types.DELETE_TASK] (state, taskId) {
        let index = state.tasks.findIndex(task => task.id === taskId)
        if (index > -1) {
            state.tasks.splice(index, 1)
        }
    }
}

export const getters = {
    tasks: state => state.tasks
}

const actions = {
    async init ({commit}) {
        try {
            let res = await axios.get('/todos ')
            if (res.status === 200) {
                commit(types.GET_TASKS, res.data)
            }
        } catch (err) {
            console.error(err)
        }
    },
    async addTask ({commit}, task) {
        try {
            let res = await axios.post('/todos', task)
            if (res.status === 201) {
                commit(types.ADD_TASK, task)
            }
        } catch (err) {
            console.error(err)
        }
    },
    async updateTaskStatus ({commit}, task) {
        try {
            let updatedTask = task
            updatedTask.status = updatedTask.status === 'completed' ? 'not completed' : 'completed'
            let res = await axios.put(`/todos/${task.id}`, updatedTask)
            if (res.status === 200) {
                commit(types.UPDATE_TASK_STATUS, updatedTask)
            }
        } catch (err) {
            console.error(err)
        }
    },
    async deleteTask ({commit}, taskId) {
        try {
            let res = await axios.delete(`/todos/${taskId}`)
            if (res.status === 200) {
                commit(types.DELETE_TASK, taskId)
            }
        } catch (err) {
            console.error(err)
        }
    }
}

export default {
    state,
    actions,
    getters,
    mutations,
    namespaced: true
}