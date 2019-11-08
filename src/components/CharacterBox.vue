<template>
    <div class="character-box">
        <!-- <div class="portrait-wrapper">
            <div class="border">
                <div class="inner-border">
                    <div class="corner top-left"></div>
                    <div class="corner top-right"></div>
                    <div class="corner bottom-right"></div>
                    <div class="corner bottom-left"></div>
                </div>
            </div>
            <div 
                :style="{backgroundImage: `url('${character.mat}')`}"
                class="portrait" />
        </div> -->
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
        <div class="status-effects">
            <div 
                class="status-effect"
                v-for="(effect, key) in status"
                :key="key"
                :data-active="effect"
                :style="{'--status-color': statusColors[key]}"
                @click="$store.dispatch('toggleStatus', key)">

                <div class="status-inner">
                    <lottie 
                        :autoplay="false"
                        :play="effect"
                        :name="key"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Counter from '@/components/Counter'
import Lottie from '@/components/UI/Lottie'

export default {
    name: 'character-box',
    components: {
        Counter,
        Lottie
    },
    data () {
        const statusColors = {
            strengthen: '#5198d3',
            invisible: '#201d19',
            disarm: '#6e7b7f',
            immobilize: '#9f3027',
            muddle: '#7a5b42',
            poison: '#848366',
            stun: '#324165',
            wound: '#e15811'
        }

        return {
            statusColors
        }
    },
    computed: {
        character: ({$store}) => $store.state.character,
        status: ({$store}) => $store.state.status
    }
}
</script>

<style lang="scss">
    .character-box {
        display: flex;
        flex-flow: column wrap;
        align-items: flex-start;
        margin: 20px auto 0;

        .char {
            display: flex;
            flex-flow: row;
            align-items: center;
            // padding: 0 20px;
            font-size: 2em;

            h2 {
                margin: 0;
                font-size: 1em;
            }
        }

        .character-icon {
            position: relative;
            width: 2em;
            overflow: hidden;
            // border: 3px solid #000;
            // border-radius: 50%;
            color: var(--color);
            // transform: rotate(45deg);
            // background: #fff;
            // border: 4px solid var(--color);

            &::before {
                padding-top: 100%;
                display: block;
                content: '';
            }
        }

        .hp-exp {
            color: #fff;
            display: flex;
            flex-flow: row;
            justify-content: center;
            line-height: 0;
            width: 100%;
            font-size: 1.5em;
            justify-content: center;
        }

        .portrait-wrapper {
            width: auto;
            overflow: hidden;
            width: 20%;
            position: relative;
            border-radius: 50%;
            border: 3px solid var(--color);

            .portrait {
                padding-top: 100%;
                background-size: 440%;
                background-position: 13% 10%;
            }
        }

        .status-effects {
            // padding: 20px 20px;
            max-width: 270px;
            width: 100%;
            margin: 20px auto 0;
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;

            .status-effect {
                width: 25%;
                position: relative;
                transform: scale(1);
                transition: transform 0.1s;
                padding: 8px;
                
                .status-inner {
                    overflow: hidden;
                    border-radius: 50%;
                    border: 1px solid #fff;
                }

                .lottie {
                    position: relative;
                    z-index: 1;
                    padding: 2px;
                    background: transparent;
                    transition: background 0.15s;
                }

                &[data-active] {
                    .status-inner {
                        border: 0;
                    }

                    .lottie {
                        background: var(--status-color);

                        svg {
                            filter: drop-shadow(1px 1px 0px rgba(0,0,0,.2));
                        }
                    }

                    &::before {
                        // content: '';
                        display: block;
                    }
                }

                &::before {
                    display: block;
                    position: absolute;
                    top: 3px;
                    left: 3px;
                    right: 3px;
                    bottom: 3px;
                    z-index: -1;
                    box-shadow: 0 0 0 1px rgba(255,255,255,1);
                    opacity: 1;
                    border-radius: 50%;
                }

                &:active {
                    transform: scale(1.025);
                }
                

                // > div {
                //     // margin-top: -4px;
                //     // margin-left: -4px;
                // }
            }
        }

        // .portrait {
        //     padding-top: 136%; 
        //     background-size: auto 130%;
        //     background-position: 3.75% 13%;
        //     // box-shadow: inset 0 0 9px rgba(0,0,0,.8);
        //     border-radius: 1px;
        //     // border: 5px solid #322505;
        // }
    }
</style>

