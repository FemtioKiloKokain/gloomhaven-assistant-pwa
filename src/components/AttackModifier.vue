<template>
    <section>
        <div class="history">
            <div 
                class="icon-holder"
                @click="$store.dispatch('shuffleDeck')">

                <icon v-if="shouldShuffle" icon="redo-alt"></icon>
                <icon v-else icon="clock"></icon>
            </div>
            <div class="card-row-scroll">
                <transition-group 
                    class="card-row" 
                    name="history-card" 
                    tag="div">

                    <div 
                        class="history-card"
                        v-for="card in drawnCards.flat()"
                        :double-card="card.double"
                        :key="card.name">
                        
                        <img :src="require(`@/assets/gloomhaven/images/${card.image}`)">
                    </div>
                </transition-group>
            </div>
        </div>

        <attack-modifier-deck></attack-modifier-deck>
        <div class="bless-curse">
            <div class="bless">
                <counter
                    title="Bless"
                    :value="$store.state.blesses.length"
                    increment="blessDeck"
                    decrement="unblessDeck"
                    color="#d1a016"
                    :icon="require('@/assets/bless.svg')"
                    :iconStyle="{
                        transform: 'translate(-0.5%,-3.75%)',
                        width: '130%',
                        height: '130%',
                    }" />
            </div>
            <div class="curse">
                <counter
                    title="Curse"
                    :value="$store.state.curses.length"
                    increment="curseDeck"
                    decrement="uncurseDeck"
                    color="#7847a8"
                    :icon="require('@/assets/curse.svg')"
                    :iconStyle="{
                        transform: 'translate(0,-8%)',
                        width: '110%',
                        height: '110%',
                    }" />
            </div>
        </div>
    </section>
</template>
<script>
import AttackModifierDeck from '@/components/AttackModifierDeck'
import Counter from '@/components/Counter'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClock, faRedoAlt, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

library.add(faClock, faRedoAlt, faPlus, faMinus)

export default {
    name: 'attack-modifier',
    components: {
        AttackModifierDeck,
        Counter
    },
    computed: {
        drawnCards: ({$store}) => $store.state.drawnCards,
        blesses: ({$store}) => $store.state.blesses,
        curses: ({$store}) => $store.state.curses,
        shouldShuffle: ({$store}) => $store.state.shouldShuffle
    }
}
</script>

<style lang="scss" scoped>
    .history-card-enter, .history-card-leave-to {
        opacity: 0;
        transform: translateX(-100%);
    }

    .history-card-enter-to {
        opacity: 1;
        transform: translateX(0);
        transition: all 0.5s 0.5s;
    }

    section {
        padding: 10px 1em 0;
        overflow: visible;
    }

    .history {
        display: flex;
        flex-flow: row wrap;
        height: 40px;
        overflow: hidden;
        margin-bottom: 10px;
        position: relative;
        z-index: 100;
        margin-right: -1em;

        .icon-holder {
            font-size: 2em;
            position: relative;
            color: #777;
            line-height: 1.3;
            text-align: left;
            width: 46px;
            box-shadow: 0 0 5px rgba(0,0,0,1);
            z-index: 10;

            @keyframes shake {
                0% { transform: rotate(10deg)}
                25% { transform: rotate(-10deg)}
                50% { transform: rotate(10deg)}
                75% { transform: rotate(-10deg)}
                100% { transform: rotate(10deg)}
            }

            [data-icon="redo-alt"] {
                color: var(--color);
                animation: shake 2s ease infinite;
            }
        }

        .card-row-scroll {
            overflow: auto;
            height: 100%;
            width: calc(100% - 46px);
            -ms-overflow-style: none;  // IE 10+
            scrollbar-width: none;  // Firefox
            position: relative;
            z-index: 2;
            padding-left: 5px;

            &::-webkit-scrollbar { 
                display: none;  // Safari and Chrome
            }
        }

        .card-row {
            display: flex;
            flex-flow: row-reverse;
            line-height: 0;
            justify-content: flex-end;
            height: 100%;
            z-index: -1;

            .history-card {
                height: 100%;
                margin-right: 8px;
                transition: all 1.1s;
                display: inline-block;
                flex: 0 0 auto;
                position: relative;

                &[double-card] + [double-card]::after {
                    content: '';
                    display: block;
                    background: #fff;
                    position: absolute;
                    z-index: 1;
                    top: 50%;
                    left: 100%;
                    height: 30px;
                    width: 8px;
                    margin-top: -15px;
                }
            }

            img {
                height: 100%;
                width: auto;
                position: relative;
                z-index: 2;
                border-radius: 5%/7.25%;
                box-shadow: 0 0 4px rgba(0,0,0,.75);
            }
        }
    }

    .bless-curse {
        color: #fff;
        display: flex;
        flex-flow: row;
        justify-content: center;
        line-height: 0;
        margin-top: 20px;
        width: 100%;
        font-size: 1.5em;
        justify-content: center;
    }
</style>

<style lang="scss">
    .bless-curse .icon svg {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
    }
</style>
