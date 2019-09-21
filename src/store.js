import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from 'vuex-persist'
import localforage from 'localforage'

import characters from '@/characters'
import attackModifiersData from "@/assets/gloomhaven/data/attack-modifiers.js"

const vuexPersist = new VuexPersist({
    key: 'gloomhaven',
    storage: localforage,
    reducer: (state) => ({
        ...state,
        ...{initialized: false}
    }),
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

const store = new Vuex.Store({
    state: {
        loading: true,
        character: null,
        baseDeck: baseDeck,
        additionalDeck: additionalDeck,
        characterDeck: [],
        blesses: [],
        curses: [],
        drawnCards: [],
        shouldShuffle: false,
        hp: 0,
        exp: 0,
        status: {
            strengthen: false,
            invisible: false,
            disarm: false,
            immobilize: false,
            muddle: false,
            poison: false,
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
        addDrawnCard(state, cards) {
            state.drawnCards.push(cards)
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
        
        increaseHp: (state) => 
            state.hp++,
        decreaseHp: (state) => 
            state.hp--,
        increaseExp: (state) => 
            state.exp++,
        decreaseExp: (state) => 
            state.exp--,
        toggleStatus: (state, key) => 
            state.status[key] = !state.status[key],
        toggleLoading(state, loading) {
            state.loading = loading
        }
    },

    actions: {
        initialize({state, dispatch}) {
            const cards = [
                ...baseDeck, 
                ...additionalDeck,
                ...state.characterDeck, 
                ...[blessCard, curseCard]
            ]

            return dispatch('preloadImages', cards)
        },
        setCharacter({commit, dispatch}, chosenCharacter) {
            commit('setCharacter', chosenCharacter)

            const deck = attackModifiersData
                .filter(card => card.name.indexOf(chosenCharacter) !== -1 )
            
            dispatch('preloadImages', deck).then(() => {
                commit('setCharacterDeck', deck)
            })
        },
        drawCard({commit, dispatch, getters}, drawTwo = false) {
            const cards = []
            let deck = getters.deck
            
            //Pull random card from remaining cards
            const draw = () => {
                if(!deck.length) {
                    dispatch('shuffleDeck')
                    deck = getters.deck
                }

                const card = deck[Math.floor(Math.random() * deck.length)]
                
                deck = deck.filter(c => c != card)
                
                if(cardEffects[card.points]) commit(cardEffects[card.points], card)
                
                card.double = drawTwo
                cards.push(card)
            }

            draw()
            if(drawTwo) draw()
    
            commit('addDrawnCard', cards)
        },
        preloadImages({commit}, cards) {
            commit('toggleLoading', true)

            const checkImage = card =>
                new Promise(resolve => {
                    const img = new Image();
                    const path = require(`@/assets/gloomhaven/images/${card.image}`)

                    img.onload = () => resolve({path, status: 'ok'});
                    img.onerror = () => resolve({path, status: 'error'});
        
                    img.src = path;

                    console.log(img)
                });

            const loadImg = () => Promise.all(cards.map(checkImage))
                .then(() => { commit('toggleLoading', false) })
            
            return loadImg(cards)
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
            const drawn = state.drawnCards.flat()

            const deck = [...base, ...char, ...additional, ...blesses, ...curses]
                .filter(card => drawn.map(c => c.name)
                .indexOf(card.name) < 0)
            
            return deck 
        }
    },
    plugins: [vuexPersist.plugin]
});

export default store