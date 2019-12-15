import Vue from 'vue'
import Router from 'vue-router'

import AttackModifierView from './views/AttackModifierView.vue'
import DeckView from './views/DeckView.vue'

Vue.use(Router)

const router = new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Attack',
            component: AttackModifierView
        },
        {
            path: '/deck',
            name: 'Deck',
            component: DeckView
        },
        {
            path: '/index.html',
            name: 'index',
            component: AttackModifierView
        }
    ]
})

// const waitForStorageToBeReady = async (to, from, next) => {
//     await store.restored
//     console.log(store.state.initialized)
//     if(store.state.initialized) next()
//     else store.dispatch('initialize').then(next)
// }
// router.beforeEach(waitForStorageToBeReady)

export default router