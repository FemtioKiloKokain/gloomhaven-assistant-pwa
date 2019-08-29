<template>
    <div class="attack-modifier-deck">
        <div class="deck-inner">
            <div class="card">
                <img 
                    @click="drawCard"
                    class="back"
                    :src="require('@/assets/images/attack_mod_back.jpg')" />
            </div>

            <div class="flipped-cards">
                <attack-modifier-card
                    v-for="(card, i) in drawnCards"
                    :key="i"
                    :index="i"
                    :card="card"
                    :style="{'--z': i}" />
            </div>
            <!-- <div class="deck-stats">
                {{deck.length}}/{{deck.length + drawnCards.length}}
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
        drawnCards: ({$store}) => $store.state.drawnCards,
        deck: ({$store, drawnCards}) => {
            return $store.getters.deck
                .filter(card => drawnCards.map(c => c.name).indexOf(card.name) < 0 )
        }
    },
    methods: {
        drawCard() {
            if(this.deck.length) this.$store.dispatch('drawCard')
            else this.$store.dispatch('shuffleDeck')
        }
    }
}
</script>

<style lang="scss" scoped>
    .attack-modifier-deck {
        padding: 0 60px;
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
                }
            }

            img {
                max-width: 100%;
                border-radius: 5%/7.25%;
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

                * {
                    pointer-events: none;
                }
            }
        }

        .deck-stats {
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
