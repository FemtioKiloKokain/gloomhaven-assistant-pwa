<template>
    <div class="attack-modifier-deck">
        <div class="deck-inner">
            <div 
                class="double-card-draw"
                @click="$store.dispatch('drawCard', true)">
                <span 
                    class="advantage-icon"
                    v-html="require('@/assets/status-icons/strengthen.svg')" />
                <span 
                    class="disadvantage-icon"
                    v-html="require('@/assets/status-icons/muddle.svg')" />
            </div>
            <div class="card">
                <img 
                    @click="$store.dispatch('drawCard')"
                    class="back"
                    :src="require('@/assets/images/attack_mod_back.jpg')" />
            </div>

            <div class="flipped-cards">
                <attack-modifier-card
                    v-for="(cards, i) in drawnCards"
                    :key="cards[0].name"
                    :index="i"
                    :cards="cards"
                    :style="{'--z': i}" />
            </div>
            <!-- <div class="deck-stats">
                {{deck.length}}/{{deck.length + $store.state.drawnCards.flat().length}}
            </div> -->
        </div>
    </div>
</template>
<script>
import AttackModifierCard from '@/components/AttackModifierCard'

export default {
    name: 'attack-modifier-deck',
    components: {
        AttackModifierCard
    },
    computed: {
        //Only render last four drawn cards to keep the DOM cleaner and improve performance
        drawnCards: ({$store}) => {
            const cards = $store.state.drawnCards
            return cards.slice(Math.max(cards.length - 4, 0))
        },
        deck: ({$store, drawnCards}) => $store.getters.deck
            .filter(card => drawnCards.map(c => c.name).indexOf(card.name) < 0 )
    },
    methods: {
        drawCard() {
            if(this.deck.length) this.$store.dispatch('drawCard')
            else this.$store.dispatch('shuffleDeck')
        }
    }
}
</script>

<style lang="scss">
    .attack-modifier-deck {
        padding: 0 40px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        position: relative;
        z-index: 1000;
        max-width: 500px;

        .deck-inner {
            width: 100%;
            position: relative;
            line-height: 0;

            > .card {
                img {
                    position: relative;
                    z-index: 1;
                    box-shadow: 0 0 8px rgba(0,0,0,5);
                    max-width: 100%;
                    border-radius: 5%/7.25%;
                }
            }

            .flipped-cards {
                height: 100%;
                width: 100%;
                position: absolute;
                top: 0;
                left: 0;
                pointer-events: none;
                perspective: 1000px;
                transform-style: preserve-3d;
                z-index: 2;

                // .flip-card {
                //     display: none;

                //     &:last-child {
                //         display: block;
                //     }
                // }

                * {
                    pointer-events: none;
                }

            }

            .double-card-draw {
                width: 50px;
                height: 33px;
                position: absolute;
                z-index: 100000;
                right: 5px;
                top: 5px;
                background: rgba(0,0,0,.5);

                span {
                    position: absolute;
                    height: 100%;
                    width: 50%;
                    overflow: hidden;

                    svg {
                        width: 125%;
                        position: absolute;

                        path {
                            display: none;

                            + path + path {
                                display: initial;
                            }
                        }
                    }
                }

                .advantage-icon {
                    left: 0;

                    svg {
                        left: 0;
                    }
                }

                .disadvantage-icon {
                    right: 0;

                    svg {
                        right: 0;
                    }
                }
            }
        }

        .deck-stats {
            top: 20px;
            margin-top: 14px;
            color: #fff;
            font-size: 0.75em;
            text-align: right;
            padding-right: 10px;
            position: relative;
            // z-index: 1000;
        }
    }
</style>
