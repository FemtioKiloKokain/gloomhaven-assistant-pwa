<template>
    <section 
        id="app" 
        ref="test" 
        :style="style"
        :class="[$store.state.uiStyle]">

        <div class="site-swipe">
            <attack-modifier id="attack"/>
            <modify-deck id="deck" />
        </div>

        <nav>
            <a href="#attack" v-html="require('@/assets/general-icons/attack.svg')"></a>
            <a href="#deck" v-html="require('@/assets/general-icons/deck.svg')"></a>
        </nav>
    </section>
</template>

<script>
import AttackModifier from '@/components/AttackModifier'
import ModifyDeck from '@/components/ModifyDeck'

export default {
    components: {
        AttackModifier,
        ModifyDeck
    },
    computed: {
        style: ({$store}) => {
            const color = $store.state.character ? $store.state.character.color : '#fff'
                
            return {
                '--color': color
            }
        },
        chosenCharacter: ({ $store }) => {
            if (!$store.state.character) return {
                name: 'Choose character',
                color: '#000'
            } 
            
            return $store.state.character
        }
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Pirata+One&display=swap');
@import url('https://fonts.googleapis.com/css?family=Grenze&display=swap');
@import url('~@/assets/dm.css');

html,
body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    font-size: 3.75vw;

    * {
        box-sizing: border-box;
    }
}

body {
    background: #000;
    perspective: 300px;
}

#app {
    --yellow: #d1a016;
    --purple: #7847a8;
    --red: #e74342;
    --blue: #3277ba;

    --border-radius: 5%/7.25%;

    --gutter: 2vw;

    font-family: 'dm', 'Grenze', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    text-align: center;
    color: #d7d7d7;
    width: 100%;
    max-width: 100vw;
    height: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 1fr 12.5vw;
    overflow: hidden;

    .site-swipe {
        width: 100%;
        max-width: 100%;
        display: grid;
        grid-template-columns: 100% 100%;
        grid-template-rows: 100%;
        overflow-x: scroll;
        overflow-y: hidden;
        scroll-snap-type: x mandatory;
        scroll-behavior:smooth;
        position: relative;

        > section,
        > div {
            scroll-snap-align: start;
            scroll-snap-stop: always;
            padding: calc(var(--gutter) * 2);
            max-height: 100%;
            overflow: scroll;
            scrollbar-width: none;

            &::-webkit-scrollbar {
                display: none;
            }
        }
    }

    nav {
        font-size: 1.5em;
        display: flex;
        justify-content: space-around;
        width: 100%;
        font-style: italic;        
        background: #f2f2f2;
        border-top: 1px solid #fff;
        z-index: 1;
        box-shadow: 0 0 3vw #333;

        a {
            line-height: 1em;
            padding: 0em .2em;
            display: flex;
            align-items: center;
            color: #333;
            text-decoration: none;
            flex: 1 1 auto;
            justify-content: center;

            svg {
                width: 10vw;
            }

            &:target {
                color: red;
            }
        }
    }

    h1,
    h2,
    h3,
    h4 {
        font-weight: 400;
        // font-family: 'Pirata One', 'Grenze', Helvetica
    }

    h2 {
        font-size: 2em;
    }

    *:not(.keep-svg-style) > svg * {
        fill: currentColor;
    }

    button {
        background: none;
        color: #f5f5f5;
        border-radius: 4px;
        display: inline-block;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin: 0 0;
        padding: 0px 1em;
        border-width: 0;
        font-family: sans-serif;
        font-weight: normal;
        font-size: inherit;
        text-decoration: none;
        line-height: 2em;
        cursor: pointer;
        font-size: 100%;
        overflow: visible;
        border: 1px solid currentColor;

        &::-moz-focus-inner {
            border: 0;
            padding: 0;
        }
    }
}
</style>
