import Vue from 'vue'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import {
    Button,
    Input,
    Checkbox,
    Icon,
    Loading
} from 'element-ui'

locale.use(lang)

/**
 * Make loading available to all components
 */
Vue.use(Button)
Vue.use(Input)
Vue.use(Checkbox)
Vue.use(Icon)
Vue.use(Loading)
