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
                class="effect-wrapper"
                v-for="(effect, key) in status"
                :key="key"
                :data-active="effect"
                @click="$store.dispatch('toggleStatus', key)">

                <span 
                    class="keep-svg-style" 
                    v-html="require(`@/assets/status-icons/${key}.svg`)" />
            </div>
        </div>
    </div>
</template>

<script>
import Counter from '@/components/Counter'

export default {
    name: 'character-box',
    components: {
        Counter,
    },
    computed: {
        character: ({$store}) => $store.state.character,
        status: ({$store}) => $store.state.status
    }
}
</script>

<style lang="scss">
    .character-box {
        padding: 30px 0px;
        display: flex;
        flex-flow: column wrap;
        align-items: flex-start;
        margin: 0 auto;

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
            padding: 20px 20px;
            max-width: 280px;
            width: 100%;
            margin: 40px auto 0;

            .effect-wrapper {
                display: inline-block;
                padding: 10px;
                width: 25%;
                margin-top: -12%;
                position: relative;

                span {
                    position: absolute;
                    // border: 1px solid red;
                    left: 12px;
                    top: 12px;
                    right: 12px;
                    bottom: 12px;
                    transform: rotate(45deg);
                    // opacity: 0.5;
                    overflow: hidden;
                    transition: all 0.05s;
                    filter: grayscale(1);

                    svg {
                        transform: rotate(-45deg);
                    }
                }

                &::after {
                    content: '';
                    display: block;
                    padding-top: 100%;
                }

                &::before {
                    content: '';
                    display: block;
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    right: 10px;
                    bottom: 10px;
                    transform: rotate(45deg);
                    border: 1px solid rgba(#f5f5f5, .2);
                    border-radius: 3px;
                    z-index: 10;
                    box-shadow: 
                        0 0 0 2px #000;
                }

                &:first-child {
                    margin-left: -12.5%;
                }

                &:last-child {
                    margin-right: -12.5%;
                }

                &[data-active="true"] {
                    span {
                        opacity: 1;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        filter: grayscale(0);
                    }
                }
            }
        }

        // .portrait-wrapper {
        //     width: auto;
        //     overflow: hidden;
        //     width: 33%;
        //     position: relative;
        //     border-radius: 5px;

        //     .border {
        //         position: absolute;
        //         z-index: 2;
        //         top: 0;
        //         left: 0;
        //         height: 100%;
        //         width: 100%;
        //         border: 2px solid #000;
        //         border-radius: 4px;
        //         overflow: hidden;
        //         box-shadow: 
        //             inset 0 0 0 8px #000,
        //             inset 0 0 5px 8px rgba(0,0,0,1);

        //         .inner-border {
        //             position: absolute;
        //             top: 0.25em;
        //             left: 0.25em;
        //             right: 0.25em;
        //             bottom: 0.25em;
        //             border: 4px double var(--color);
        //             z-index: -1;
        //             overflow: hidden;
        //             // border-radius: 2px;
        //         }
        //         // mix-blend-mode: multiply;

        //         .corner {
        //             // display: none;
        //             background-color: var(--color);
        //             width: .75em;
        //             height: .75em;
        //             position: absolute;
        //             box-shadow: 
        //                 0 0 2px var(--color),
        //                 0 0 2px 1px rgba(0,0,0,0.5);
        //             z-index: -1;
        //             // border: 1px solid #000;
                    

        //             // &::before,
        //             // &::after {
        //             //     content: '';
        //             //     display: block;
        //             //     position: absolute;
        //             //     color: var(--color);
        //             // }

        //             // &::before {
        //             //     height: calc(100% - 0.2em);
        //             //     width: calc(100% - 0.2em);
        //             // }

        //             &.top-left {
        //                 top: 0;
        //                 left: 0;

        //                 // &::before {
        //                 //     top: 0;
        //                 //     left: 0;
        //                 //     border-right: 1px solid;
        //                 //     border-bottom: 1px solid;
        //                 // }
        //             }

        //             &.top-right {
        //                 top: 0;
        //                 right: 0;
                        
        //                 // &::before {
        //                 //     top: 0;
        //                 //     right: 0;
        //                 //     border-left: 1px solid;
        //                 //     border-bottom: 1px solid;
        //                 // }
        //             }

        //             &.bottom-right {
        //                 bottom: 0;
        //                 right: 0;

        //                 // &::before {
        //                 //     bottom: 0;
        //                 //     right: 0;
        //                 //     border-left: 1px solid;
        //                 //     border-top: 1px solid;
        //                 // }
        //             }

        //             &.bottom-left {
        //                 bottom: 0;
        //                 left: 0;

        //                 // &::before {
        //                 //     bottom: 0;
        //                 //     left: 0;
        //                 //     border-right: 1px solid;
        //                 //     border-top: 1px solid;
        //                 // }
        //             }
        //         }
        //     }
        // }

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

<style lang="scss">
    .character-icon svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: 
            translate(-50%,-53%);
        width: 100%;
        background: none;
    }
</style>
