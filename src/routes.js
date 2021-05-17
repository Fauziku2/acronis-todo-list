import TodoList from './components/TodoList'
const About = () => import('./components/About')

export const routes = [
    {
        path: '',
        name: 'home',
        component: TodoList
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '*',
        redirect: '/'
    }
]