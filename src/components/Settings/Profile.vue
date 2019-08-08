<template>
    <div class="settings-page page-profile">
        <div>
            <select @change="chooseCharacter">
                <option :value="null" selected>Välj klass</option>
                <option 
                    v-for="(c, i) in characters"
                    :key="i"
                    :value="c.value"
                    v-text="c.name" />
            </select>
        </div>
        <img :src="require(`@/assets/gloomhaven/images/character-mats/${character.slug}.png`)" />
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

        img {
            max-width: 100%;
        }
    }
</style>
