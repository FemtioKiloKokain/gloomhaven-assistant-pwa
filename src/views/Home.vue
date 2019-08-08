<template>
    <section 
        class="home" 
        :style="{'--color': character ? character.color : '#fff' }">

        <!-- <div 
            class="portrait"
            v-if="character"
            :style="{backgroundImage: `url(${character.mat})`}" /> -->
        


        <div class="top">
            <div class="char" v-if="character">
                <span 
                    class="character-icon"
                    v-html="character.icon" />
                {{ character.name }}
            </div>
            <select @change="chooseCharacter" v-else>

                <option :value="null" selected>Välj klass</option>
                <option 
                    v-for="(c, i) in characters"
                    :key="i"
                    :value="c.value"
                    v-text="c.name" />
            </select>
            <span class="open-settings" @click="openSettings">
                <icon :icon="$route.query.settings ? 'times' : 'bars'"/>
            </span>
        </div>

        <settings />

        <div class="assistant">
            <attack-modifier />

            <!-- <div class="hp-exp">
                <counter
                    title="HP"
                    color="#ad020a" 
                    v-model="hp" />
                <counter
                    title="EXP"
                    color="#0088c7" 
                    v-model="exp"/>
            </div> -->
        </div>
    </section>
</template>

<script>
import characters from '@/characters'
import AttackModifier from '@/components/AttackModifier'
// import Counter from '@/components/Counter'
import Settings from '@/components/Settings'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faTimes)

export default {
    name: "home",
    components: {
        Settings,
        AttackModifier,
        // Counter
    },
    computed: {
        character: ({$store}) => $store.state.character
    },
    data () {        
        const hp = localStorage.getItem('hp')
            ? parseInt(localStorage.getItem('hp'), 10)
            : 0

        const exp = localStorage.getItem('exp')
            ? parseInt(localStorage.getItem('exp'), 10)
            : 0

        return {
            characters,
            settingsOpen: false,
            hp,
            exp
        }
    },
    methods: {
        chooseCharacter: function(e){
            this.$store.dispatch('setCharacter', e.target.value)
        },
        openSettings: function(){
            if(!this.$route.query.settings)
                this.$router.push({query: {
                    settings: 'deck'
                }})
            else
                this.$router.push({query: {}})
        },
        update: function(){
            localStorage.setItem('hp', this.hp)
            localStorage.setItem('exp', this.exp)
        }
    },
    watch: {
        hp: 'update',
        exp: 'update',
        chosenClass: function() {
            localStorage.clear()
            localStorage.setItem('chosenClass', this.chosenClass)
        }
    }
}
</script>
<style lang="scss" scoped>
    .home {
        --color: #fff;
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
        height: 100%;
        user-select: none;
        color: #222;
        // background-image: url('~@/assets/images/bg.jpg');
        // background-size: cover;
        // background:
        //     linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,1) 100%), var(--color);
        background: #000;
    }

    .top {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        padding: 5px 20px 5px 10px;
        align-items: center;
        background: #fff;
        color: #333;
        font-size: 1.75em;
        font-weight: 600;
        line-height: 0;
        border-bottom: 4px solid var(--color);
        z-index: 15;
        box-shadow: 0 0 7px rgba(0,0,0,.4);
        min-height: 70px;

        .char {
            display: flex;
            flex-flow: row;
            align-items: center;
        }

        .character-icon {
            position: relative;
            width: 2em;
            margin-right: 0.5em;
            overflow: hidden;
            // border: 3px solid #000;
            border-radius: 50%;

            &::before {
                padding-top: 100%;
                display: block;
                content: '';
            }
        }

        .open-settings {
            margin-left: auto;
        }
    }

    .portrait {
        position: absolute;
        top: 10px;
        right: 10px;
        height: calc(77px * 1.5);
        width: calc(59px * 1.5);
        background-size: auto 146%;
        background-position: 5.5% 23%;
        box-shadow: inset 0 0 9px rgba(0,0,0,.8);
        border-radius: 1px;
        border: 5px solid #322505;
    }

    .assistant {
        width: 100%;
        height: 100%;
        max-width: 500px;
        overflow: hidden;
        padding-top: 80px;
        z-index: 5;
    }

    .hp-exp {
        max-width: 350px;
        margin: 0 auto;
        padding: 20px;
        display: flex;
        justify-content: space-between;

        div {
            width: calc(50% - 10px);
        }
    }
</style>

<style lang="scss">
    .character-icon svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 115%;
    }
</style>
