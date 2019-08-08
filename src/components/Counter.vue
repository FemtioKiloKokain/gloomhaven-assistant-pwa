<template>
    <div class="counter-wrapper">
        <span>{{title}}</span>
        <div 
            class="counter"
            :style="{'--color': color}">

            <div 
                class="btn decrement"
                @click="$store.commit(decrement)">

                <span>
                    <icon icon="minus" />
                </span>
            </div>
            <div class="amount">
                <div 
                    class="icon" 
                    v-html="icon"
                    :style="iconStyle">
                </div>
                <span>{{value}}</span>
            </div>
            <div 
                class="btn increment"
                @click="$store.commit(increment)">

                <span>
                    <icon icon="plus" />
                </span>
            </div>
        </div>
    </div>
</template>
<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus, faMinus)

export default {
    name: 'counter',
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
        iconStyle: Object
    }
}
</script>
<style lang="scss">
    .counter .icon svg {
        height: 100%;
        width: 100%;
    }
</style>
<style lang="scss" scoped>
    .icon {
        position: absolute;
        height: 80%;
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: -1;
        overflow: hidden;
        opacity: 0.4;
        filter: grayscale(0.4);
        color: var(--color);
    }
    .counter-wrapper {
        padding-top: 0.5em;
        
        > span {
            font-size: 0.75em;
            display: block;
            text-align: left;
            text-indent: 1em;
        }
    }

    .counter {
        display: flex;
        flex-flow: row wrap;
        font-size: 1.1em;
        align-items: center;
        margin-top: 0.5em;

        .amount {
            height: 2em;
            width: 2em;
            color: #222;
            border-radius: 50%;
            box-shadow: 
                0 0 0px 2px rgba(0,0,0,1),
                inset 0 0 20px rgba(0,0,0,.1);
            display: flex;
            justify-content: center;
            align-items: center;
            background: #fff;
            position: relative;
            z-index: 3;
            font-weight: 600;
            overflow: hidden;

            span {
                font-size: 1.2em;
                // transform: translateY(-0.13em);
            }
        }
    }

    .btn {
        padding: 0.25em;
        background: #fff;
        color: #fff;
        width: 2.3em;
        height: 1.9em;
        display: flex;
        align-items: center;
        background: var(--color);
        padding: 0.5em;
        position: relative;
        z-index: 2;
        
        span {
            font-size: 0.75em;
        }

        &.decrement {
            border-radius: 0.95em 0 0 0.95em;
            justify-content: flex-start;
            margin-right: -0.75em;
        }

        &.increment {
            border-radius: 0 0.95em 0.95em 0;
            justify-content: flex-end;
            margin-left: -0.75em;
        }
    }
</style>
