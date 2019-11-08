<template>
    <div id="app" :style="style">
        <div class="page">
            <!-- <div 
                v-if="character"
                v-html="character.icon"
                class="page-background" /> -->
                
            <transition name="page">
                <router-view v-if="initialized"/>
            </transition>
        </div>

        <!-- <div class="menu">
            <nav>
                <router-link :to="{name: 'Attack'}">
                    <div v-html="require('@/assets/attack.svg')" />
                </router-link>
                <router-link :to="{name: 'Deck'}">
                    <div v-html="require('@/assets/deck2.svg')" />
                </router-link>
                <router-link :to="{name: 'Profile'}" class="character-icon">
                    <div 
                        v-if="character" 
                        v-html="icon">
                        
                    </div>
                    <div v-else>hej</div>
                </router-link>
            </nav>
        </div> -->
    </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faUsers, faSpinner } from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faUsers, faSpinner)

export default {
    data() {
        return {
            initialized: true
        }
    },
    computed: {
        character: ({$store}) => $store.state.character,
        loading: ({$store}) => $store.state.loading,
        style: ({character}) => {
            const color = character ? character.color : '#fff'

            return {
                '--color': color
            }
        },
        icon: ({character}) => character
            ? character.icon
            : ''
    },
    async beforeCreate() {
        // await this.$store.restored

        // this.$store.dispatch('initialize')
        //     .then(() => this.initialized = true )
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Pirata+One&display=swap');
@import url('https://fonts.googleapis.com/css?family=Grenze&display=swap');

html,
body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;

    * {
        box-sizing: border-box;
    }
}

#app {
    --yellow: #d1a016;
    --purple: #7847a8;
    --red: #e74342;
    --blue: #3277ba;

    --border-radius: 5%/7.25%;

    font-family: 'Dank Mono', 'Grenze', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    text-align: center;
    color: #d7d7d7;
    width: 100%;
    height: 100%;
    background: #000;
    padding: 14px;


    h1,
    h2,
    h3,
    h4 {
        font-weight: 400;
        font-family: 'Pirata One', 'Grenze', Helvetica
    }

    h2 {
        font-size: 2em;
    }

    .page-enter-active, 
    .page-leave-active {
        transition: opacity 0.33s, transform 0.33s;
    }

    .page-enter, 
    .page-leave-to {
        opacity: 0;
        position: fixed;
        transform: translateY(2.5%);
        left: 0;
        right: 0;
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
