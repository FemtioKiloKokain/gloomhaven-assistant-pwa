<template>
    <div class="settings-page page-profile">
        <div class="select-wrapper">
            <select @change="chooseCharacter">
                <option :value="null" selected>Välj klass</option>
                <option 
                    v-for="(c, i) in characters"
                    :key="i"
                    :value="c.value"
                    v-text="c.name" />
            </select>
            <div class="select-overlay">
                <span v-if="character">{{character.name}}</span>
                <span v-else>Välj karaktär</span>
                <div class="arrow">
                    <span>-</span>
                    <span>-</span>
                </div>
            </div>
        </div>
        <img 
            v-if="character" 
            :src="require(`@/assets/gloomhaven/images/character-mats/${character.slug}.png`)" />
    </div>
</template>
<script>
import characters from '@/characters'

export default {
    name: 'settings-profile',
    data() {
        return {
            characters
        }
    },
    computed: {
        character: ({$store}) => $store.state.character
    },
    methods: {
        chooseCharacter: function(e){
            this.$store.dispatch('setCharacter', e.target.value)
        },
    }
}
</script>

<style lang="scss" scoped>
    .page-profile {
        padding: 20px;
        color: #fff;
        display: flex;
        flex-flow: column wrap;
        justify-content: flex-start;
        align-items: center;

        .select-wrapper {
            font-family: 'Grenze', sans-serif;
            display: inline-flex;
            position: relative;
            margin-bottom: 2em;

            select {
                background: #fff;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                width: 100%;
                opacity: 0;
            }

            .select-overlay {
                display: flex;
                flex-flow: row wrap;
                justify-content: center;
                font-size: 1.5em;
                pointer-events: none;

                .arrow {
                    // margin-left: 1em;
                    font-family: 'Pirata One', serif;
                    font-size: 2em;
                    margin-left: 0.85em;
                    transform: 
                        translateY(-10%)
                        rotate(90deg);

                    span {
                        position: absolute;

                        &:first-child {
                            transform: 
                                rotateZ(45deg);
                        }
                        
                        &:last-child {
                            transform: 
                                translateY(21%)
                                rotateX(180deg) 
                                rotateZ(45deg);
                        }
                    }
                }
            }
        }

        img {
            max-width: 100%;
        }
    }
</style>
