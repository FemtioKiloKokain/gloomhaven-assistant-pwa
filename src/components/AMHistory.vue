<template>
    <div class="history-wrapper">
        <div class="history">
            <div 
                class="icon-holder" 
                @click="$store.dispatch('shuffleDeck')"
                :should-shuffle="$store.state.shouldShuffle">
                <!-- <span class="icon" v-html="require('@/assets/general-icons/deck.svg')" /> -->
                <span class="icon" v-html="require('@/assets/general-icons/shuffle.svg')" />
                <!-- <icon name="history" iconstyle="flat"></icon> -->
                <!-- <span v-text="$store.state.shouldShuffle ? 'Shuffle' : 'History'"></span> -->
            </div>
            <transition-group 
                v-if="uiStyle === 'traditional'"
                class="scroll-wrapper"
                name="history-card" 
                tag="div">

                <div 
                    class="card-holder"
                    v-for="cards in history"
                    :key="cards[0].name">

                    <div 
                        class="card"
                        v-for="card in cards"
                        :key="card.name">

                        <img :src="require(`@/assets/gloomhaven/images/${card.image}`)">
                    </div>
                </div>
            </transition-group>
            <transition-group 
                v-else
                class="scroll-wrapper"
                name="history-card" 
                tag="div">

                <div 
                    class="card-holder"
                    v-for="cards in history"
                    :key="cards[0].name">

                    <div 
                        v-for="card in cards"
                        class="card"
                        :key="card.name"
                        :style="{'--cardColor': card.colorHex}">

                        <div 
                            v-if="card.status" 
                            class="extra keep-svg-style" 
                            v-html="card.status" />

                        <coin class="coin" :card="card" />

                        <div 
                            v-if="card.roll" 
                            class="extra keep-svg-style" 
                            v-html="require('@/assets/status-icons/roll.svg')" />
                    </div>
                </div>
            </transition-group>
        </div>
    </div>
</template>
<script>
import Coin from '@/components/Coin'
import Icon from '@/components/UI/Icon'

export default {
    name: 'am-history',
    components: {
        Coin,
        Icon
    },
    computed: {
        uiStyle: ({$store}) => $store.state.uiStyle,
        character: ({$store}) => $store.state.character,
        history: ({$store}) => {
            let cards = [...$store.state.drawnCards]
            cards = cards.slice(0, cards.length - 1)
            return cards.reverse()
        },
        content: () => {
            return card => {
                if(card.variant === 'bless' || card.variant === 'curse') {
                    return card.icon
                }

                return card.content
            }
        },
        cardStyle: () => {
            return card => {
                return {
                    '--cardColor': card.colorHex,
                    '--width': `${20 * card.length}%`
                }
            }
        }
    }
}
</script>
<style lang="scss">
    @keyframes spin { 
        0% { transform: scale(1) rotate(0deg);}
        25% { transform: scale(1.25) rotate(90deg);}
        50% { transform: scale(1) rotate(180deg);}
        75% { transform: scale(1.25) rotate(270deg);}
        100% { transform: scale(1) rotate(360deg);}
    }
    .history-card-enter {
        transform: translateX(calc(-100% - 7px));

        &:not(:only-child):first-child {
            transform: translateX(calc(-200% - 14px));
            margin-right: -20%;
        }
    }

    .history-card-leave-to {
        opacity: 1;
    }

    .history-card-leave-to {
        opacity: 0;
    }

    .history-card-enter-to {
        margin-right: 0;
        transform: translateX(0);
        transition: all .5s;
    }

    .history-card-move {
        transition: all .5s;
    }

    .history-wrapper {
        width: 100%;
    }
    
    .history {
        height: 100%;
        position: relative;
        padding-left: calc((100vw - var(--gutter) * 2) / 6);
        padding-bottom: var(--gutter);
        width: 100%;
        height: 11.5vw;
        z-index: 1;

        .icon-holder {
            height: 20%;
            width: calc((100vw - var(--gutter) * 2) / 6 - var(--gutter));
            position: absolute;
            left: 0;
            z-index: 1;
            background: #000;
            color: #fff;
            // box-shadow: 0 0 7px rgba(0,0,0,1);
            display: flex;
            flex-direction: column;
            font-size: .7em;
            // padding-top: .25em;
            line-height: 1;
            z-index: 3;
            // margin-top: -.75vw;
            overflow: hidden;
            height: 100%;
            justify-content: center;
            padding-bottom: 2%;

            span {
                display: flex;
                justify-content: center;
                align-items: center;
                perspective: 1000px;
            }

            .icon {
                width: 100%;
                overflow: visible;
                position: absolute;
                // top: 14%;
                // left: 2%;

                svg {
                    width: 60%;
                }

                + .icon {
                    position: absolute;
                    width: 60%;
                    height: 100%;
                    // color: var(--color);
                    left: 52%;
                    transform: translate(-50%, -33%);
                    filter: drop-shadow(0 0 .025vw #000);

                    svg path {
                        stroke: #000;
                        stroke-width: 1.5vw;
                        // stroke-linecap: round;
                        paint-order: stroke;
                        // stroke-linejoin: round;
                        
                    }

                    // svg {
                    //     fill:  !important;
                    // }
                }
            }

            &[should-shuffle] .icon svg {
                color: var(--color);
                animation: spin 3s linear infinite;
            }
        }

        &::after {
            // content: '';
            // display: block;
            position: absolute;
            left: 100%;
            top: 0;
            width: 1px;
            height: 100%;
            box-shadow: 0 0 10px 2px rgba(0,0,0,1);
            background: #000;
            z-index: 2;
        }

        .scroll-wrapper {
            height: 100%;
            display: flex;
            flex-flow: row;
            justify-content: flex-start;
            // padding-right: var(--gutter);
            margin-left: calc(var(--gutter) * -1);
            overflow: scroll;
            border-radius: 1vw;
            position: relative;
            scrollbar-width: none;

            &::-webkit-scrollbar {
                display: none;
            }
        }

        .card-holder {
            display: flex;
        }

        .card {
            background: var(--cardColor);
            border-radius: 1vw;
            flex: 0 0 auto;
            height: 100%;
            font-family: 'Pirata One';
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0.5vw 0;
            position: relative;
            z-index: -1;
            opacity: .9;
            width: calc((100vw - var(--gutter) * 2) / 6 - var(--gutter) * 1);
            margin-right: var(--gutter);
        }

        .extra {
            width: 18%;
            display: flex;
            align-items: center;
            height: 100%;
            margin: 1.25vw;

            svg {
                width: 100%;
                transform: scale(2);
            }
        }

        img {
            border-radius: 1vw;
            width: 100%;
        }
    }

    .traditional .history-wrapper {
        .scroll-wrapper {
            border-radius: 1vw;
        }
    }
</style>