<template>
    <div class="history-wrapper">
        <div class="history">
            <div 
                class="icon-holder" 
                @click="$store.dispatch('shuffleDeck')"
                :should-shuffle="$store.state.shouldShuffle">
                <icon name="history" iconstyle="flat"></icon>
                <span>History</span>
            </div>
            <transition-group 
                class="scroll-wrapper"
                name="history-card" 
                tag="div">

                <div 
                    v-for="card in cards"
                    class="card"
                    :key="card.name"
                    :style="{'--color': card.colorHex}">

                    <div class="coin">
                        <div class="coin-inner keep-svg-style" v-html="card.content" />
                    </div>
                </div>
            </transition-group>
        </div>
    </div>
</template>
<script>
import Icon from '@/components/UI/Icon'

export default {
    name: 'am-history',
    components: {
        Icon
    },
    computed: {
        cards: ({$store}) => {
            let cards = [...$store.state.drawnCards]
            cards = cards.slice(0, cards.length - 1)
            return cards.flat().reverse()
        }
    }
}
</script>
<style lang="scss">
    @keyframes spin { 
        0% { transform: translateY(-5%) rotate(0deg);}
        100% { transform: translateY(-5%) rotate(-360deg);}
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
        overflow: hidden;
    }
    
    .history {
        height: 100%;
        position: relative;
        padding-left: calc(100% / 6);
        overflow: hidden;
        padding-bottom: 7px;
        width: 100%;
        height: 11vw;

        .icon-holder {
            height: calc(100% - 7px);
            width: calc(100% / 6 - 7px);
            position: absolute;
            left: 0;
            z-index: 1;
            background: #000;
            color: #fff;
            box-shadow: 0 0 7px rgba(0,0,0,1);
            display: flex;
            flex-direction: column;
            font-size: .8em;
            padding-top: .25em;
            line-height: 1.3;

            span {
                display: flex;
                justify-content: center;
                align-items: center;
                perspective: 1000px;
            }

            svg {
                width: 37%;
                overflow: visible;
            }

            &[should-shuffle] svg {
                path {
                    transform-origin: 54% 55.5%;
                    animation: spin 3s linear infinite;
                    stroke: #000;
                    stroke-width: 2px;
                    stroke-linecap: round;
                    paint-order: stroke;
                    stroke-linejoin: round;
                    z-index: 2;
                    position: relative;
                }
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
            margin-left: -7px;
            overflow: scroll;
            border-radius: 2vw;
            scrollbar-width: none;

            &::-webkit-scrollbar {
                display: none;
            }
        }

        .card {
            background: var(--color);
            margin-left: 7px;
            border-radius: 2vw;
            width: calc(20% - 7px);
            flex: 0 0 auto;
            height: 100%;
            font-family: 'Pirata One';
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0.5vw 0;

            .coin {
                display: inline-block;
                position: relative;
                transform-style: preserve-3d;
                overflow: visible;
                display: flex;
                justify-content: center;
                flex-basis: 52%;
                margin: 4.5%;
                font-size: 1.1em;

                &::before {
                    content: '';
                    display: block;
                    padding-top: 100%;
                }
                
                .coin-inner {
                    display: inline-block;
                    position: relative;
                    transform-style: preserve-3d;
                    overflow: visible;
                    display: flex;
                    justify-content: center;
                    width: 100%;
                    background: #fff;
                    border-radius: 50%;
                    color: #333;
                    display: flex;
                    align-items: center;
                    line-height: 0;
                }

                svg {
                    height: 100%;
                    width: 100%;
                }
            }
        }
    }
</style>