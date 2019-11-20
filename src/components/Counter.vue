<template>
    <div class="counter-wrapper">
        <div 
            class="counter"
            :style="{'--c': color}">
            
            <ripple                
                class="btn decrement"
                @click.native="$store.dispatch(decrement)" />
            <div class="amount">
                <!-- <span class="icon" v-html="icon" /> -->
                <span class="title">{{title}}</span>
                <span class="value">{{value}}</span>
                
            </div>
            <ripple 
                class="btn increment"
                @click.native="$store.dispatch(increment)" />
        </div>
    </div>
</template>
<script>
import Ripple from '@/components/UI/Ripple'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus, faMinus)

export default {
    name: 'counter',
    components: {
        Ripple
    },
    props: {
        title: String,
        value: Number,
        increment: String,
        decrement: String,
        color: {
            type: String,
            default: '#555'
        },
        icon: String,
        // iconStyle: Object
    }
}
</script>
<style lang="scss">
    .counter-wrapper {
        margin: 0 calc(var(--gutter) / 2) var(--gutter);
        display: flex;
        flex-direction: column;
        flex: 1 1;
        justify-content: center;
        
        > span {
            font-size: 0.75em;
            display: block;
            text-align: left;
            text-indent: 1em;
            font-style: italic;
        }

        .counter {
            display: flex;
            flex-flow: row wrap;
            font-size: 1em;
            align-items: center;
            border-radius: 1em;
            background: var(--c);
            overflow: hidden;
            justify-content: center;

            .amount {
                height: 100%;
                // color: #f5f5f5;
                // text-shadow: .15vw .15vw #333;
                display: flex;
                justify-content: center;
                align-items: flex-end;
                position: relative;
                z-index: 3;
                overflow: visible;
                flex-direction: row;
                border-left: 1px solid #000;
                border-right: 1px solid #000;
                font-style: italic;
                flex-grow: 1;
                background: #f5f5f5;
                // padding-bottom: .5em;
                // line-height: .9;

                .icon {
                    height: .8em;

                    svg {
                        height: 100%;
                    }

                    &::after {
                        display: inline-block;
                        content: '';
                        transform: translateY(-.1em);
                        padding: 0 .25em;
                    }
                }

                .value {
                    font-size: 1em;
                    // background: #fff;
                    color: #333;
                    height: 100%;
                    margin-left: auto;
                    width: 2.5em;
                    border-left: 1px solid #000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    
                }

                .title {
                    height: 100%;
                    font-size: .8em;
                    font-style: italic;
                    color: #333;
                    margin-right: 0.2em;
                    margin-left: auto;
                    display: flex;
                    align-items: center;

                    // &::after {
                    //     content: ':';
                    // }
                }
            }
        }

        .btn {
            background: #fff;
            color: #fff;
            width: 2.3em;
            // height: 2em;
            display: flex;
            justify-content: center;
            align-items: center;
            background: var(--c);
            // padding: 0.5em;
            position: relative;
            z-index: 2;
            overflow: hidden;

            &::before {
                color: #f5f5f5;
                transform: translateY(-0.1em);
                font-size: 1.5em;
                // text-shadow: 0 0 0 #fff, 1px 1px rgba(0,0,0,0.2);
            }

            &.decrement {
                // border-radius: 1em 0 0 1em;

                &::before {
                    content: '-';
                }
                // box-shadow: inset 1px 1px 0 1px rgba(0,0,0,.2);
            }

            &.increment {
                // border-radius: 0 1em 1em 0;

                &::before {
                    content: '+';
                }
                // box-shadow: inset -1px 1px 0 1px rgba(0,0,0,.2);
            }
        }
    }
</style>
