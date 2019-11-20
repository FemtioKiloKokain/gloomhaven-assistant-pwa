<template>
    <section class="modify-deck">
        <header>
            <div>
                <span
                    class="icon"
                    v-if="chosenCharacter.icon"
                    v-html="chosenCharacter.icon"
                />

                <h2>{{ chosenCharacter.name }}</h2>
                <span class="arrow">^</span>
            </div>
            <select @change="chooseCharacter">
                <option
                    v-for="character in characters"
                    :key="character.slug"
                    v-text="character.name"
                    :value="character.value"
                />
            </select>
        </header>

        <div class="deck-wrapper">
            <header>
                <span v-html="require('@/assets/general-icons/gh.svg')" />
                Base deck
            </header>
            <div class="cards-wrapper">
                <div
                    v-for="card in base"
                    :key="card.name"
                    class="card-holder"
                    :style="{ '--c': card.colorHex }"
                    :active="card.inModifierDeck"
                    @click="card.inModifierDeck = !card.inModifierDeck">

                    <span class="check-cross">
                        <span 
                            v-if="card.inModifierDeck" 
                            v-html="require('@/assets/general-icons/check.svg')" />
                        <span 
                            v-else 
                            :style="{color: '#9f3027'}"
                            v-html="require('@/assets/general-icons/cross.svg')" />
                    </span>

                    <img 
                        v-if="uiStyle === 'traditional'" 
                        class="card-image card"
                        :src="require(`@/assets/gloomhaven/images/${card.image}`)">
                    <div v-else :class="['card', card.variant]">
                        <div 
                            v-if="card.status" 
                            class="extra keep-svg-style" 
                            v-html="card.status" />

                        <coin class="coin" :card="card" />

                        <div 
                            v-if="card.roll" 
                            class="extra keep-svg-style" 
                            v-html="require('@/assets/status-icons/roll.svg')" />
                    </div>
                    <div class="card-description" v-html="card.description" />
                </div>
            </div>
        </div>
        <div class="deck-wrapper" v-if="$store.state.character">
            <header>
                <span v-html="chosenCharacter.icon" />
                {{ chosenCharacter.name }} deck
            </header>
            <div class="cards-wrapper">
                <div
                    v-for="card in characterDeck"
                    :key="card.name"
                    class="card-holder"
                    :style="{ '--c': card.colorHex }"
                    :active="card.inModifierDeck"
                    @click="card.inModifierDeck = !card.inModifierDeck">
                    
                    <span class="check-cross">
                        <span 
                        v-if="card.inModifierDeck" 
                        v-html="require('@/assets/general-icons/check.svg')" />
                        <span 
                            v-else 
                            :style="{color: '#9f3027'}"
                            v-html="require('@/assets/general-icons/cross.svg')" />
                    </span>

                    <img 
                        v-if="uiStyle === 'traditional'" 
                        class="card-image card"
                        :src="require(`@/assets/gloomhaven/images/${card.image}`)">
                    <div v-else :class="['card', card.variant]">
                        <div 
                            v-if="card.status" 
                            class="extra keep-svg-style" 
                            v-html="card.status" />

                        <coin class="coin" :card="card" />
                        <div 
                            v-if="card.roll" 
                            class="extra keep-svg-style" 
                            v-html="require('@/assets/status-icons/roll.svg')" />
                    </div>
                    <div class="card-description" v-html="card.description" />
                </div>
            </div>
        </div>
        <div class="deck-wrapper">
            <header>
                <span 
                    class="keep-svg-style" 
                    :style="{width: '1.75em'}"
                    v-html="require('@/assets/general-icons/negative1.svg')" />
                Additional cards
            </header>
            <div class="cards-wrapper">
                <div
                    v-for="card in additionalDeck"
                    :key="card.name"
                    class="card-holder"
                    :style="{ '--c': card.colorHex }"
                    :active="card.inModifierDeck"
                    @click="card.inModifierDeck = !card.inModifierDeck">
                    
                    <span class="check-cross">
                        <span 
                            v-if="card.inModifierDeck" 
                            v-html="require('@/assets/general-icons/check.svg')" />
                        <span 
                            v-else 
                            :style="{color: '#9f3027'}"
                            v-html="require('@/assets/general-icons/cross.svg')" />
                    </span>

                    <img 
                        v-if="uiStyle === 'traditional'" 
                        class="card-image card"
                        :src="require(`@/assets/gloomhaven/images/${card.image}`)">
                    <div v-else :class="['card', card.variant]">

                        <div 
                            v-if="card.status" 
                            class="extra keep-svg-style" 
                            v-html="card.status" />

                        <coin class="coin" :card="card" />

                        <div 
                            v-if="card.roll" 
                            class="extra keep-svg-style" 
                            v-html="require('@/assets/status-icons/roll.svg')" />
                    </div>
                    <div class="card-description" v-html="card.description" />
                </div>
            </div>
        </div>
        <button @click="indexedDB.deleteDatabase('localforage')">Rensa</button>
        <select @click="setStyle">
            <option value="flat">Flat</option>
            <option value="traditional">Traditional</option>
        </select>
    </section>
</template>
<script>
import Coin from '@/components/Coin';
import Ripple from '@/components/UI/Ripple';
import characters from '@/characters';

export default {
    name: 'modify-deck',
    data() {
        return {
            characters,
            indexedDB
        };
    },
    components: {
        Coin,
        Ripple
    },
    computed: {
        uiStyle: ({ $store }) => $store.state.uiStyle,
        base: ({ $store }) => $store.state.baseDeck,
        characterDeck: ({ $store }) => $store.state.characterDeck,
        additionalDeck: ({ $store }) => $store.state.additionalDeck,
        chosenCharacter: ({ $store }) => {
            if (!$store.state.character)
                return {
                    name: 'Choose character',
                    color: '#000'
                };

            return $store.state.character;
        }
    },
    methods: {
        chooseCharacter: function(e) {
            this.$store.dispatch('setCharacter', e.target.value);
        },
        setStyle: function(e) {
            console.log(e.target.value);
            this.$store.dispatch('changeUiStyle', e.target.value);
        }
    }
};
</script>
<style lang="scss">
.modify-deck {
    padding: 0 14px;
    position: relative;
    z-index: 0;

    > header {
        position: relative;
        font-style: italic;
        font-size: 1.15em;
        line-height: 0.5;
        margin-top: calc(var(--gutter) * -1);
        border-bottom: 1px solid #fff;
        padding-bottom: 0.25em;

        .icon {
            width: 2em;
            margin-right: 0.75em;
            border-radius: 50%;
            padding: 0.1em;
        }

        .arrow {
            transform: translateX(0.25em) translateY(-0.05em) rotate(180deg);
            font-size: 2.25em;
            // font-style: normal;
        }

        h2 {
            display: inline-block;
        }

        div {
            position: absolute;
            background: #000;
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
        }

        select {
            width: 100%;
            padding-top: 10%;
            opacity: 0;
        }
    }

    .deck-wrapper {
        header {
            position: sticky;
            font-size: 1.25em;
            color: #fff;
            background: #000;
            padding: 0.5em;
            border-bottom: 1px solid #fff;
            font-style: italic;
            text-align: left;
            top: -1em;
            z-index: 10;
            display: flex;
            align-items: center;

            span {
                line-height: 0;
                height: 1em;
                width: 1em;
                position: relative;
                margin-right: .5em;

                svg {
                    width: 100%;
                    margin-right: .75em;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
        }
    }

    .cards-wrapper {
        display: flex;
        flex-flow: row wrap;
        margin: 0 -1vw;
        margin-top: 0.5em;
        padding-bottom: 1.5em;
        justify-content: space-between;
    }

    .card-holder {
        margin: 0.5em 0.15em;
        overflow: hidden;
        width: calc(50% - var(--gutter) * 1);
        position: relative;
        margin: 1vw;
        display: flex;
        flex-flow: row wrap;
        height: 2.25em;
        align-items: center;
        border-radius: 2vw;
        line-height: 1;
        user-select: none;

        .check-cross {
            width: 10%;
            padding-top: 1vw;
            margin-right: 1.25vw;

            svg {
                width: 100%;
            }
        }

        .card {
            background: var(--c);
            border-radius: 1vw;
            flex: 0 0 auto;
            height: 100%;
            font-family: 'Pirata One';
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0.5vw 0;
            position: relative;
            z-index: -1;
            width: 30%;
            margin-right: calc(var(--gutter) / 1.5);
            z-index: 2;
            box-shadow: 0 0 1px 1px #000;
            filter: grayscale(.75);
            opacity: .75;

            &.card-image {
                padding: 0 0;
            }

            .extra {
                width: 18%;
                display: flex;
                align-items: center;
                height: 100%;
                margin: 1.25vw;

                svg {
                    width: 100%;
                    transform: scale(2);
                }
            }
        }

        img {
            border-radius: 1.25vw;
            width: 100%;
        }

        &[active] {
            .card {
                filter: grayscale(0);
                opacity: 1;
            }
        }

        .card-description {
            font-size: .9em;
            flex: 1 1;
            text-align: left;
            line-height: 1.15;
        }
    }
}
</style>
