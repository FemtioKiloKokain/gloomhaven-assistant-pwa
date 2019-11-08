<template>
    <!-- <div 
        v-if="isLoading"
        class="settings-page page-deck">
        
        <div>
            <div>Base deck</div>
            <div class="deck character-deck">
                <div 
                    class="card"
                    v-for="i in 20"
                    :key="i">

                    <div class="card-inner">
                        <div class="card-loading"></div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
    <div 

        class="settings-page page-deck">
        <div>
            <div>Base deck</div>
            <div class="deck character-deck">
                <div 
                    class="card"
                    v-for="card in baseDeck"
                    :key="card.points"
                    :class="{ toggled: card.inModifierDeck }">

                    <div class="card-inner">
                        <span v-text="card.name"
                            @click="toggleCard(card)"/>
                    </div>

                    <div class="toggle">
                        <icon :icon="card.inModifierDeck ? 'check' : 'times'"></icon>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="character">
            <div>{{character.name}} deck</div>
            <div class="deck character-deck">
                <div 
                    class="card"
                    v-for="card in characterDeck"
                    :key="card.points"
                    :class="{ toggled: card.inModifierDeck }">

                    <div class="card-inner">
                        <span v-text="card.name"
                            @click="toggleCard(card)"/>
                    </div>

                    <div class="toggle">
                        <icon :icon="card.inModifierDeck ? 'check' : 'times'"></icon>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div>Additional extra lorem ipsum</div>
            <div class="deck character-deck">
                <div 
                    class="card"
                    v-for="card in additionalDeck"
                    :key="card.points"
                    :class="{ toggled: card.inModifierDeck }">

                    <div class="card-inner">
                        <img 
                            :src="require(`@/assets/gloomhaven/images/${card.image}`)"
                            @click="toggleCard(card)"/>
                    </div>

                    <div class="toggle">
                        <icon :icon="card.inModifierDeck ? 'check' : 'times'"></icon>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faCheck, faTimes)

export default {
    name: 'settings-deck',
    computed: {
        character: ({$store}) => $store.state.character,
        characterDeck: ({$store}) => $store.state.characterDeck,
        baseDeck: ({$store}) => $store.state.baseDeck,
        additionalDeck: ({$store}) => $store.state.additionalDeck,
        isLoading: ({$store}) => $store.state.loading
    },
    methods: {
        toggleCard(card) {
            this.$store.commit('toggleCard', card)
        }
    }
}
</script>

<style lang="scss" scoped>
    .deck {
        display: flex;
        flex-flow: row wrap;
        padding: 0 5px;
        margin-bottom: 20px;

        div {
            width: 100%;
        }

        .card-loading {
            padding-top: 65%;
            background: #f2f2f2;
            border-radius: 5%/7.25%;
        }

        .card {
            width: 20%;
            line-height: 0;
            position: relative;
            flex-shrink: 1;

            &::before {
                content: '';
                display: block;
                padding-top: 67%;
            }

            .card-inner {
                overflow: hidden;
                position: absolute;
                top: 50%;
                left: 50%;
                width: 100%;
                padding: 5%;
                transform: translate(-50%, -50%);
            }

            img {
                opacity: 0.9;
                position: relative;
                // margin: -2px;
                // width: calc(100% + 4px);
                width: 100%;
                border-radius: 5%/7.25%;
            }

            .toggle {
                position: absolute;
                bottom: 15%;
                right: 20%;
                border-radius: 50%;
                background: #fff;
                display: inline-flex;
                width: 20%;
                align-items: center;
                justify-content: center;
                flex-shrink: 1;
                color: #910000;
                pointer-events: none;

                &::before {
                    content: '';
                    display: block;
                    padding-top: 100%;
                }

                svg {
                    width: 80%;
                    height: 80%;
                    position: absolute;
                    top: 10%;
                    left: 10%;
                }
            }

            &.toggled {
                .card-inner {
                    padding: 2%;
                }

                img {
                    opacity: 0.99;
                }    

                .toggle {
                    color: #008106;
                }
            }

            &:not(.toggled) {
                img {
                    filter: grayscale(0.75);
                }
            }
        }
    }
</style>
