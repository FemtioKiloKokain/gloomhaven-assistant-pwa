import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from 'vuex-persist'
// import localforage from 'localforage'

import characters from '@/characters'
// import attackModifiersData from "@/assets/gloomhaven/data/attack-modifiers.js"

import amBase from '@/assets/attack-modifiers/base.js'
import amAdditional from '@/assets/attack-modifiers/additional.js'

const vuexPersist = new VuexPersist({
    key: 'gloomhaven',
    reducer: (state) => ({
        ...state,
        ...{initialized: false}
    }),
})

const baseDeck = amBase
baseDeck.forEach(card => {
    card.inModifierDeck = false
})

const additionalDeck = amAdditional
additionalDeck.forEach(card => {
    card.inModifierDeck = false
})

const blessCard = {
    name: 'am-p-20',
    points: 50,
    color: 'purple',
    colorHex: '#975a9f',
    content: require('@/assets/general-icons/bless.svg'),
    variant: 'bless',
    description: '<em>Blessed Hit</em>',
    image: 'attack-modifiers/base/player-mod/am-pm-01.png',
    icon: require('@/assets/general-icons/bless.svg'),
    inModifierDeck: true
}

const curseCard = {
    name: 'am-p-19',
    points: 70,
    color: 'yellow',
    colorHex: '#e0a633',
    content: require('@/assets/general-icons/curse.svg'),
    variant: 'curse',
    description: '<em>Cursed Miss</em>',
    image: 'attack-modifiers/base/player-mod/am-pm-21.png',
    icon: require('@/assets/general-icons/curse.svg'),
    inModifierDeck: true
}

const cardEffects = {
    50: 'unblessDeck',
    70: 'uncurseDeck',
    48: 'notifyShuffle',
    49: 'notifyShuffle'
}

Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        loading: false,
        character: null,
        baseDeck: baseDeck,
        additionalDeck: additionalDeck,
        characterDeck: [],
        blesses: [],
        curses: [],
        drawnCards: [],
        shouldShuffle: false,
        uiStyle: 'flat',
        hp: 0,
        exp: 0,
        status: {
            disarm: false,
            immobilize: false,
            muddle: false,
            poison: false,
            stun: false,
            wound: false,
            strengthen: false,
            invisible: false,
        }
    },

    mutations: {
        setUiStyle(state, style) {
            state.uiStyle = style
        },
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
        initialize({getters, dispatch}) {
            return dispatch('preloadImages', getters.combinedDecks)
        },
        changeUiStyle({commit, dispatch, getters}, style) {
            if(style === 'traditional') {
                commit('toggleLoading', true)
                
                dispatch('preloadImages', getters.combinedDecks)
                    .then(() => {
                        commit('toggleLoading', false)
                    })
            }
            commit('setUiStyle', style)
        },
        setCharacter({commit}, chosenCharacter) {
            commit('setCharacter', chosenCharacter)

            import(`@/assets/attack-modifiers/${chosenCharacter}`)
                .then(deck => commit('setCharacterDeck', deck.default))            
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
        toggleStatus({commit}, key) {
            commit('toggleStatus', key)
        },
        blessDeck({commit}) {
            commit('blessDeck')
        },
        curseDeck({commit}) {
            commit('curseDeck')
        },
        unblessDeck: ({commit}) => commit('unblessDeck'),
        uncurseDeck: ({commit}) => commit('uncurseDeck'),
        decreaseHp: ({commit}) => commit('decreaseHp'),
        increaseHp: ({commit}) => commit('increaseHp'),
        decreaseExp: ({commit}) => commit('decreaseExp'),
        increaseExp: ({commit}) => commit('increaseExp'),
    },
    getters: {
        combinedDecks: (state) => {
            return [
                ...state.baseDeck,
                ...state.characterDeck,
                ...state.additionalDeck,
                ...state.blesses,
                ...state.curses
            ]
        },
        deck: (state, getters) => {
            const drawn = state.drawnCards.flat()

            const deck = getters.combinedDecks
                .filter(card => card.inModifierDeck)
                .filter(card => drawn.map(c => c.name)
                    .indexOf(card.name) < 0)
            
            return deck 
        }
    },
    plugins: [vuexPersist.plugin]
});

export default store