<template>
    <div 
        id="app"
        :style="{
            '--color': character ? character.color : '#fff',
            '--vh': `${vh}px`
            }">

        <div class="char">
            <div v-if="character">
                <span 
                    class="character-icon"
                    v-html="character.icon" />
                <span class="character-name">{{character.name}}</span>
            </div>
            <div v-else>
                <span class="character-name">Gloomhaven</span>
            </div>
        </div>

        <div class="page">
            <div 
                v-if="character"
                v-html="character.icon"
                class="page-background" />
            <div 
                class="loading"
                v-if="loading">

                <span>
                    <icon icon="spinner" />
                </span>
            </div>
            <transition name="page">
                <router-view/>
            </transition>
        </div>

        <div class="menu">
            <!-- <div class="circle"></div> -->
            <router-link :to="{name: 'attack'}">
                <span v-html="require('@/assets/attack.svg')" />
            </router-link>
            <router-link :to="{name: 'deck'}">
                <span v-html="require('@/assets/deck2.svg')" :style="{marginRight: '-2px'}"/>
                <!-- <span class="text">Profile</span> -->
            </router-link>
            <router-link :to="{name: 'profile'}">
                <span><icon icon="user"></icon></span>
                <!-- <span class="text">Profile</span> -->
            </router-link>
            <router-link :to="{name: 'profile'}">
                <span><icon icon="users"></icon></span>
                <!-- <span class="text">Profile</span> -->
            </router-link>
        </div>
    </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faUsers, faSpinner } from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faUsers, faSpinner)

const vh = window.innerHeight * 0.01

export default {
    data() {
        return {
            vh: vh
        }
    },
    computed: {
        character: ({$store}) => $store.state.character,
        deck: ({$store}) => $store.getters.deck,
        loading: ({$store}) => $store.state.loading
    },
    created() {
        this.$store.dispatch('preloadImages', this.deck)
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

    * {
        box-sizing: border-box;
    }
}
#app {
    --yellow: #d1a016;
    --purple: #7847a8;
    --red: #e74342;
    --blue: #3277ba;

    font-family: 'Grenze', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #d7d7d7;
    height: calc(var(--vh, 1vh) * 100);
    width: 100%;
    background: #000;
    overflow: hidden;
    position: fixed;
    transform: translateZ(0);
    display: flex;
    flex-flow: column;

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

    .page-enter-active, .page-leave-active {
        transition: opacity 0.33s, transform 0.33s;
    }

    .page-enter, .page-leave-to {
        opacity: 0;
        position: fixed;
        transform: translateY(2.5%);
        left: 0;
        right: 0;
    }

    .char {
        padding: 0.25em 0.2em 0;
        display: flex;
        flex-flow: row wrap;
        font-family: 'Pirata One', 'Grenze', sans-serif;
        box-shadow: 0 0 10px #000;
        position: relative;
        z-index: 10000;
        border-bottom: 1px solid #111;

        > div {
            display: flex; 
            flex-flow: row wrap;
            align-items: center;
            font-size: 2em;
        }

        .character-name {
            padding-left: 0.5em;
        }

        .character-icon {
            display: block;
            width: 60px;
            height: 60px;
            position: relative;
            color: var(--color);
            margin-right: -0.5em;

            svg {
                width: 100%;
                height: auto;
            }
        }
    }

    .loading {
        position: absolute;
        flex: 1 auto;
        height: 100%;
        width: 100%;
        background: rgba(0,0,0,0.75);
        z-index: 10000;
        backdrop-filter: blur(2px);
        display: flex;
        align-items: center;
        font-size: 5em;
        justify-content: center;
    }

    .page {
        flex: 1 auto;
        overflow: auto;
        position: relative;
        transform: translateX(0);
        padding-top: 0.5em;

        .page-background {
            height: 100%;
            width: 100%;
            position: fixed;
            margin: 0 auto;
            top: 0;
            left: 0;
            // display: flex;
            // justify-content: center;
            opacity: 0.05;
            z-index: -1;
            overflow: hidden;

            svg {
                position: absolute;
                top: 0;
                left: 0;
                width: 300%;
                height: 300%;
                transform: 
                    translateX(-7.5%)
                    translateY(-32.5%);
            }
        }
    }

    .menu {
        margin-top: auto;
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        // border-top: 3px solid var(--color);
        box-shadow: 0 0 10px #000;
        background: #000;
        flex-shrink: 0;
        position: relative;
        z-index: 10000;
        // padding-bottom: 0.5em;

        .circle {
            width: 3em;
            height: 3em;
            border-radius: 50%;
            border: 2px solid #fff;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }

        a {
            margin: 0 1em;
            flex: 1 auto;
            text-align: center;
            color: #d7d7d7;
            height: 100%;
            box-shadow: inset 0 3px 0 rgba(255,255,255,0.15);

            &.router-link-exact-active {
                box-shadow: inset 0 3px 0 var(--color);
            }

            span {
                padding: 0.85em .5em;
                display: inline-block;
                height: 100%;
                // border-radius: 50%;
                width: 3.5em;
                height: 3.5em;
            }

            svg {
                height: 100%;
                width: auto;
            }
        }
    }

    *:not(.keep-svg-style) > svg {
        fill: currentColor;
    }
}
</style>
