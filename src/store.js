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
        character: null,
        baseDeck,
        additionalDeck,
        characterDeck: [],
        blesses: [],
        curses: [],
        drawnCards: [],
        shouldShuffle: false,
        hp: 0,
        exp: 0
    },
    mutations: {
        setCharacter(state, chosenCharacter) {
            state.character = characters.find(c => c.value === chosenCharacter )
        },
        setCharacterDeck(state, chosenCharacter) {
            let deck = attackModifiersData
                .filter(card => card.name.indexOf(chosenCharacter) !== -1 )

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
        }
    },
    actions: {
        setCharacter({commit}, chosenCharacter) {
            commit('setCharacter', chosenCharacter)
            commit('setCharacterDeck', chosenCharacter)
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
        shuffleDeck({commit}) {
            commit('resetDrawnCards')
        },
        blessDeck({commit}) {
            commit('blessDeck')
        },
        curseDeck({commit}) {
            commit('curseDeck')
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
