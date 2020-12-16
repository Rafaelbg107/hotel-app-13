import vueRouter from 'vue-router'

import reservaPost from './components/reservaPost'
import Inicio from './components/Inicio'
import VerReserva from './components/VerReserva'

import App from './App'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: "root",
            component: Inicio
        },
        {
            path: '/Inicio',
            name: "inicio",
            component: Inicio
        },
        {
            path: '/hacer-reserva/reservar',
            name: "reservar",
            component: reservaPost
        },
        {
            path: '/reserva/:idReserva',
            name: "ver_reserva",
            component: VerReserva
        },
    ]
})
export default router