<template>
    <section :class="{open: !!$route.query.settings}">
        <div class="menu">
            <router-link :to="{query: {settings: 'deck'}}">
                <span v-html="require('@/assets/deck.svg')" />
                <!-- <span class="text">Deck</span> -->
            </router-link>
            <router-link :to="{query: {settings: 'profile'}}">
                <icon icon="user"></icon>
                <!-- <span class="text">Profile</span> -->
            </router-link>
            <router-link :to="{query: {settings: 'profile'}}">
                <icon icon="users"></icon>
                <!-- <span class="text">Profile</span> -->
            </router-link>
        </div>
        <transition name="slide" mode="out-in">
            <component :is="$route.query.settings"></component>
        </transition>
    </section>
</template>

<script>
import deck from '@/components/Settings/Deck'
// import profile from '@/components/Settings/Profile'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faUsers } from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faUsers)

export default {
    name: 'settings',
    props: {
        open: Boolean
    },
    components: {
        deck,
        profile
    }
}
</script>

<style lang="scss" scoped>

    section {
        position: fixed;
        top: 70px;
        bottom: 0;
        right: 0;
        width: 97.5%;
        transform: translateX(105%);
        transition: all 0.4s;
        background: #fff;
        z-index: 10;
        box-shadow: 0 0 15px rgba(0,0,0,1);
        overflow: auto;
        padding-bottom: 10px;

        &.open {
            transform: translateX(0);
        }

        .menu {
            display: flex;
            flex-flow: row;
            font-size: 1.5em;
            justify-content: center;
            border-bottom: 1px solid currentColor;
            margin-bottom: 20px;

            a {
                padding: 10px 0 0;
                justify-content: center;
                text-decoration: none;
                color: #333;
                display: flex;
                vertical-align: middle;
                flex: 1;

                .text {
                    // line-height: 1;
                    font-size: 0.75em;
                    display: inline-block;
                    padding-left: 1em;
                }
            }
        }
        
        .settings-sub-page {
            height: 100%;
            width: 100%;
            display: flex;
            flex-flow: column;
            position: absolute;
            top: 100px;
            left: 0;

            &:empty {
                display: none;
            }

            > div {
                height: 100%;
                width: 100%;
                background: #7d7d7d;
            }
        }
    }
</style>

<style lang="scss">
    .menu a svg {
        width: 1.25em;
        fill: currentColor;
    }
</style>
