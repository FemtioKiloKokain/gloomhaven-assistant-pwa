import Vue from 'vue'
import Router from 'vue-router'

import AttackModifierView from './views/AttackModifierView.vue'
import DeckView from './views/DeckView.vue'
import ProfileView from './views/ProfileView.vue'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'attack',
            component: AttackModifierView
        },
        {
            path: '/deck',
            name: 'deck',
            component: DeckView
        },
        {
            path: '/profile',
            name: 'profile',
            component: ProfileView
        },
        {
            path: '/index.html',
            name: 'index',
            component: AttackModifierView
        }
    ]
})
