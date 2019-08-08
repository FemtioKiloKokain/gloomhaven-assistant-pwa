<template>
    <section>
        <div class="history">
            <div 
                class="icon-holder"
                :style="{'--icon-color': shouldShuffle ? 'var(--yellow)' : '#777'}"
                @click="$store.dispatch('shuffleDeck')">

                <icon v-if="shouldShuffle" icon="redo-alt"></icon>
                <icon v-else icon="clock"></icon>
            </div>
            <div class="card-row-scroll">
                <transition-group 
                    class="card-row" 
                    name="history-card" 
                    tag="div">

                    <img
                        v-for="(card, i) in drawnCards"
                        :key="card.name"
                        :src="require(`@/assets/gloomhaven/images/${card.image}`)">

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
                        transform: 'translate(0,-4%)',
                        width: '113%',
                        height: '113%',
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
        <div class="hp-exp">
            <div class="hp">
                <counter
                    title="HP"
                    :value="$store.state.hp"
                    increment="increaseHp"
                    decrement="decreaseHp"
                    color="#e74342"
                    :icon="require('@/assets/hp.svg')"
                    :iconStyle="{
                        transform: 'translate(40%,25%)',
                        width: '110%',
                        height: '110%',
                    }" />
            </div>
            <div class="exp">
                <counter
                    title="EXP"
                    :value="$store.state.exp"
                    increment="increaseExp"
                    decrement="decreaseExp"
                    color="#3277ba"
                    :icon="require('@/assets/exp.svg')"
                    :iconStyle="{
                        transform: 'translate(50%,25%)',
                        width: '150%',
                        height: '150%',
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
    .history-card-enter, .history-card-leave-to
        /* .card-leave-active for <2.1.8 */ {
        opacity: 0;
        transform: translateX(-100%);
        // margin-right: -100%;
    }
    .history-card-enter-to {
        opacity: 1;
        transform: translateX(0);
        transition: all 0.5s 0.5s;
        // margin-right: 2%;
    }

    .history {
        display: flex;
        flex-flow: row wrap;
        height: 50px;
        overflow: hidden;
        margin-bottom: 10px;

        .icon-holder {
            width: 15%;
            float: left;
            font-size: 2em;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            color: var(--icon-color);

            @keyframes shake {
                0% { transform: rotate(10deg)}
                25% { transform: rotate(-10deg)}
                50% { transform: rotate(10deg)}
                75% { transform: rotate(-10deg)}
                100% { transform: rotate(10deg)}
            }

            [data-icon="redo-alt"] {
                animation: shake 2s ease infinite;
            }
        }

        .card-row-scroll {
            overflow: auto;
            height: 100%;
            width: 85%;
            -ms-overflow-style: none;  // IE 10+
            scrollbar-width: none;  // Firefox

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

            img {
                height: 100%;
                border-radius: 5%/7.25%;
                margin-right: 2%;
                transition: all 1.1s;
            }
        }
    }

    .bless-curse,
    .hp-exp {
        color: #fff;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        line-height: 0;
        padding: 0 50px;
        margin-top: 20px;
        // max-width: 400px;

        .bless,
        .curse,
        .hp,
        .exp {
            flex: 1 auto;
            display: flex;
            flex-flow: row;
            align-items: center;
            justify-content: center;
            padding: 0 10px;
            width: 50%;
            overflow: hidden;
            font-size: 1.5em;

            .icon {
                width: 1.25em;
                position: absolute;                
                margin-right: auto;
                margin-left: auto;
                font-size: 1.25em;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                z-index: -1;
                opacity: 0.5;

                // &:after {
                //     content: ':';
                //     position: absolute;
                //     top: 50%;
                //     right: -.5em;
                // }

                &::before {
                    content: '';
                    display: block;
                    padding-top: 100%;
                    width: 100%;
                }
            }


            .counter {
                display: flex;
                flex-flow: row wrap;

                .amount {
                    height: 2em;
                    width: 2em;
                    color: #222;
                    border-radius: 50%;
                    box-shadow: 0 0 0px 2px rgba(0,0,0,1);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    line-height: 0;
                    background: #fff;
                    position: relative;
                    z-index: 3;
                    font-weight: 600;
                }
            }

            .btn {
                padding: 0.25em;
                background: #fff;
                color: #fff;
                width: 2.3em;
                height: 2em;
                display: flex;
                align-items: center;
                background: rgba(#fff, 0.3);
                padding: 0.5em;
                position: relative;
                z-index: 2;
                
                span {
                    font-size: 0.75em;
                }

                &.decrement {
                    border-radius: 1em 0 0 1em;
                    justify-content: flex-start;
                    margin-right: -0.75em;
                }

                &.increment {
                    border-radius: 0 1em 1em 0;
                    justify-content: flex-end;
                    margin-left: -0.75em;
                }
            }
        }

        .bless {
            .amount .icon {
                color: #d1a016;
                margin-top: -0.04em;
            }

            .btn {
                background: #d1a016;
            }
        }

        .curse {
            .amount .icon {
                color: #7847a8;
            }

            .btn {
                background: #7847a8;
            }
        }
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
