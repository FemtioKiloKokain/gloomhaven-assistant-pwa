import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from 'vuex-persist'
import localforage from 'localforage'

import characters from '@/characters'
import attackModifiersData from "@/assets/gloomhaven/data/attack-modifiers.js"

const vuexPersist = new VuexPersist({
    key: 'gloomhaven',
    storage: localforage
})

const baseDeck = attackModifiersData.slice(30, 50)
baseDeck.forEach(card => {
    card.inModifierDeck = true
})

const additionalDeck = [
    ...attackModifiersData.slice(60,70),
    ...attackModifiersData.slice(80,85)
]
additionalDeck.forEach(card => {
    card.inModifierDeck = false
})

const blessCard = attackModifiersData[50]
const curseCard = attackModifiersData[70]

const cardEffects = {
    50: 'unblessDeck',
    70: 'uncurseDeck',
    48: 'notifyShuffle',
    49: 'notifyShuffle'
}

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        loading: false,
        character: null,
        baseDeck,
        additionalDeck,
        characterDeck: [],
        blesses: [],
        curses: [],
        drawnCards: [],
        shouldShuffle: false,
        hp: 0,
        exp: 0,
        status: {
            disarm: false,
            immobilize: false,
            invisible: false,
            muddle: false,
            poison: false,
            strengthen: false,
            stun: false,
            wound: false
        }
    },
    mutations: {
        setCharacter(state, chosenCharacter) {
            state.character = characters.find(c => c.value === chosenCharacter )
        },
        setCharacterDeck(state, deck) {
            deck.forEach(card => {
                card.inModifierDeck = false
            })

            state.characterDeck = deck
        },
        addDrawnCard(state, card) {
            state.drawnCards.push(card)
        },
        resetDrawnCards(state) {
            state.drawnCards = []
            state.shouldShuffle = false
        },
        toggleCard(state, card) {
            card.inModifierDeck = !card.inModifierDeck
        },
        blessDeck(state) {
            const card = {
                ...blessCard,
                ...{ name: blessCard.name + new Date().getUTCMilliseconds() }
            }
            state.blesses.push(card)
        },
        unblessDeck(state, card) {
            if(card) {
                const index = state.blesses.map(c => c.name).indexOf(card.name)
                state.blesses.splice(index, 1)
            } else state.blesses.pop()
        },
        curseDeck(state) {
            const card = {
                ...curseCard,
                ...{ name: curseCard.name + new Date().getUTCMilliseconds() }
            }

            state.curses.push(card)
        },
        uncurseDeck(state, card) {
            if(card) {
                const index = state.curses.map(c => c.name).indexOf(card.name)
                state.curses.splice(index, 1)
            } else state.curses.pop()
        },
        notifyShuffle(state) {
            state.shouldShuffle = true
        },
        increaseHp(state) {
            state.hp++
        },
        decreaseHp(state) {
            state.hp--
        },
        increaseExp(state) {
            state.exp++
        },
        decreaseExp(state) {
            state.exp--
        },
        toggleStatus(state, key) {
            state.status[key] = !state.status[key]
        },
        toggleLoading(state, loading) {
            state.loading = loading
        }
    },
    actions: {
        setCharacter({commit, dispatch}, chosenCharacter) {
            commit('setCharacter', chosenCharacter)

            const deck = attackModifiersData
                .filter(card => card.name.indexOf(chosenCharacter) !== -1 )
            
            dispatch('preloadImages', deck)
            commit('setCharacterDeck', deck)
        },
        drawCard({commit, getters}) {
            const deck = getters.deck
            if(!deck.length) return

            const card = deck[Math.floor(Math.random() * deck.length)]
            const img = new Image()
            img.src = require(`@/assets/gloomhaven/images/${card.image}`)

            img.onload = () => { commit('addDrawnCard', card) }
            
            if(cardEffects[card.points]) commit(cardEffects[card.points], card)
        },
        preloadImages({commit}, cards) {
            commit('toggleLoading', true)

            const images = cards.map(card => card.image)

            const checkImage = path =>
                new Promise(resolve => {
                    const img = new Image();
                    img.onload = () => resolve({path, status: 'ok'});
                    img.onerror = () => resolve({path, status: 'error'});
        
                    img.src = require(`@/assets/gloomhaven/images/${path}`);
                });

            const loadImg = paths => Promise.all(paths.map(checkImage))
            
            loadImg(images).then(() => {
                console.log('test')
                commit('toggleLoading', false)
            })
        },
        shuffleDeck({commit}) {
            commit('resetDrawnCards')
        },
        blessDeck({commit}) {
            commit('blessDeck')
        },
        curseDeck({commit}) {
            commit('curseDeck')
        },
        toggleStatus({commit}, key) {
            commit('toggleStatus', key)
        }
    },
    getters: {
        deck: (state) => {
            const base = state.baseDeck
                .filter(card => card.inModifierDeck)
            const char = state.characterDeck
                .filter(card => card.inModifierDeck)
            const additional = state.additionalDeck
                .filter(card => card.inModifierDeck)

            const blesses = state.blesses
            const curses = state.curses

            const deck = [...base, ...char, ...additional, ...blesses, ...curses]
                .filter(card => state.drawnCards.map(c => c.name).indexOf(card.name) < 0 )

            return deck 
        }
    },
    plugins: [vuexPersist.plugin]
});
