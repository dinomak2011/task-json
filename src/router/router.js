import Vue from 'vue'
import Router from 'vue-router'
import main from '../pages/MainPage'
import add from '../pages/AddPage'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path:'/',
            name:'main',
            component: main,
        },
        {
            path:'/add',
            name:'add',
            component: add,
        }
    ]
})

