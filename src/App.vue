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

        <div class="menu">
            <nav>
                <router-link :to="{name: 'Attack'}">
                    <div v-html="require('@/assets/attack.svg')" />
                </router-link>
                <router-link :to="{name: 'Deck'}">
                    <!-- <span>Deck</span> -->
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
        </div>
    </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faUsers, faSpinner } from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faUsers, faSpinner)

export default {
    data() {
        return {
            initialized: false
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
        await this.$store.restored

        this.$store.dispatch('initialize')
            .then(() => this.initialized = true )
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

    --border-radius: 5%/7.25%;

    font-family: 'Grenze', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    text-align: center;
    color: #d7d7d7;
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
        // transform: translateX(0);
        padding-top: 0.5em;
        padding-bottom: 60px;

        .page-background {
            height: calc(100% - 60px);
            width: 100%;
            position: fixed;
            margin: 0 auto;
            top: 0;
            left: 0;
            opacity: 0.1;
            z-index: -1;
            overflow: hidden;

            svg {
                position: absolute;
                top: 0;
                left: 0;
                width: 300%;
                height: 200%;
                transform: 
                    translateX(-12.5%)
                    translateY(-25%);
            }
        }
    }

    .menu {
        position: absolute;
        margin-top: auto;
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        flex-shrink: 0;
        z-index: 10000;
        height: 75px;
        align-items: flex-end;
        bottom: 0;

        nav {
            height: 50px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin: 0 10px;
            // border-top: 3px solid var(--color);
            background: #000;
            box-shadow: 0 -1px 4px 1px rgba(0,0,0,.7);

            a {
                color: #777;
                text-align: center;
                width: calc(50% - 35px);
                padding: 10px;

                div{
                    height: 100%;
                    width: 100%;
                    display: block;
                    position: relative;
                }

                &.router-link-exact-active {
                    color: #fff;
                }

                svg {
                    height: 100%;
                    width: auto;
                }
            }
        }

        .character-icon {
            position: relative;
            color: var(--color);

            svg {
                height: 120%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
            }
        }
    }

    *:not(.keep-svg-style) > svg {
        fill: currentColor;
    }
}
</style>
