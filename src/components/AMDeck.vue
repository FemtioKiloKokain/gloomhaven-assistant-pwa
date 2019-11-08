<template>
    <div class="attack-modifier-deck">
        <div class="deck-inner">
            <!-- <div class="double-card-draw" @click="$store.dispatch('drawCard', true)">
                <span
                    class="advantage-icon"
                    v-html="require('@/assets/status-icons/strengthen.svg')"
                />
                <span
                    class="disadvantage-icon"
                    v-html="require('@/assets/status-icons/muddle.svg')"
                />
            </div> -->
            <div class="card">
                <img
                    @click="$store.dispatch('drawCard')"
                    class="back"
                    :src="require('@/assets/images/attack_mod_back.jpg')"
                />
            </div>

            <div 
                class="flipped-cards" 
                v-if="drawnCards[0]">
                <!-- <attack-modifier-card
                    v-for="(cards, i) in drawnCards"
                    :key="cards[0].name"
                    :index="i"
                    :cards="cards"
                :style="{'--z': i}" />-->
                <AMCard :cards="drawnCards"/>
                        
            </div>

            <!-- <div class="animation-container" ref="animation-container">
                <lottie
                    v-for="(anim, index) in animations"
                    class="keep-svg-style"
                    :name="anim"
                    :key="index"
                    :loop="false"
                />
            </div> -->

            <!-- <div class="deck-stats">
                {{deck.length}}/{{deck.length + $store.state.drawnCards.flat().length}}
            </div>-->
        </div>
    </div>
</template>
<script>
import AMCard from '@/components/AMCard';
// import Lottie from '@/components/UI/Lottie';
import debounce from 'debounce';

export default {
    name: 'am-deck',
    components: {
        AMCard,
        // Lottie
    },
    data() {
        return {
            animations: []
        };
    },
    computed: {
        //Only render last four drawn cards to keep the DOM cleaner and improve performance
        drawnCards: ({ $store }) => {
            const drawnCards = $store.state.drawnCards
            return [drawnCards[drawnCards.length - 1], drawnCards[drawnCards.length - 2]].flat()
        },
        deck: ({ $store, drawnCards }) =>
            $store.getters.deck.filter(
                card => drawnCards.map(c => c.name).indexOf(card.name) < 0
            )
    },
    methods: {
        drawCard() {
            if (this.deck.length) this.$store.dispatch('drawCard');
            else this.$store.dispatch('shuffleDeck');
        },
        cleanUp: debounce(function() {
            this.animations = [];
        }, 2000)
    },
    // mounted() {
    //     const subscribe = this.$store.subscribe((mutation, state) => {
    //         if (mutation.type === 'blessDeck') {
    //             this.animations.push('bless');
    //             this.cleanUp();
    //         }
    //     });
    // }
};
</script>

<style lang="scss" scoped>
.test-enter-active, 
.test-leave-active {
  transition: opacity 1s;
}
.test-leave-active {
    transition-delay: 1s;
}
.test-enter, 
.test-leave-to {
  opacity: 0;
}

.attack-modifier-deck {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 1000;
    margin: 5px;

    .deck-inner {
        width: 100%;
        position: relative;
        line-height: 0;

        > .card {
            img {
                position: relative;
                z-index: 1;
                box-shadow: 0 0 8px rgba(0, 0, 0, 5);
                width: 100%;
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
            font-family: 'Pirata One';

            // .flip-card {
            //     display: none;

            //     &:last-child {
            //         display: block;
            //     }
            // }

            * {
                pointer-events: none;
            }

            .cards {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                display: flex;
                justify-content: center;
                // transform: translateY(0);
            }
        }

        // .double-card-draw {
        //     position: absolute;
        //     z-index: 100000;
        //     right: -25px;
        //     top: 20px;
        //     background: #333;
        //     border-radius: 8px;
        //     line-height: 0;
        //     color: #fff;
        //     display: flex;
        //     font-size: 42px;
        //     line-height: 0;
        //     justify-content: center;
        //     box-shadow: -3px 3px 0 0 rgba(#222, 1);
        //     flex-direction: column;
        //     padding-bottom: 0.1em;
        //     transition: all 0.1s;

        //     &:active {
        //         transform: translate(-2px, 2px);
        //         box-shadow: -1px 1px 0 0 rgba(#222, 0.75);
        //     }

        //     span {
        //         width: 38px;
        //         display: block;
        //         position: relative;

        //         + span {
        //             margin-top: -0.2em;
        //         }

        //         &::before {
        //             content: '';
        //             display: block;
        //             padding-top: 100%;
        //         }

        //         svg {
        //             width: 100%;
        //             position: absolute;
        //             top: 0;

        //             path {
        //                 display: none;

        //                 + path + path {
        //                     display: initial;
        //                 }
        //             }
        //         }
        //     }

        //     .advantage-icon {
        //         left: 0;

        //         svg {
        //             left: 0;
        //         }
        //     }

        //     .disadvantage-icon {
        //         right: 0;

        //         svg {
        //             right: 0;
        //         }
        //     }
        // }
    }

    .animation-container {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 2%;
        left: 2%;
        // background: rgba(#fff, 0.5);
        z-index: 10;
        pointer-events: none;

        .lottie {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            svg {
                filter: drop-shadow(4px 4px 0px rgba(0, 0, 0, 0.4))
                    drop-shadow(0 0 50px rgba(0, 0, 0, 1));
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
