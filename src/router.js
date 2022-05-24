import Vue from 'vue'
import VueRouter from 'vue-router'


import Formulario from './componentes/Formulario.vue'
import Api from './componentes/Api.vue'

Vue.use(VueRouter)


export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect: '/api' },
        { path: '/formulario', component: Formulario },
        { path: '/api', component: Api },
    ]
})