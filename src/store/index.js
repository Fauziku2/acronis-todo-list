import Vue from 'vue'
import Vuex from 'vuex'

import todos from './modules/todos'

Vue.use(Vuex)

const storeConfig = {
    state: {},
    modules: {
        todos
    }
    // strict: process.env.NODE_ENV === 'development'
}

export default new Vuex.Store(storeConfig)
export { storeConfig }