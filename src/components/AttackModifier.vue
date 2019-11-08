<template>
    <section class="am-wrapper">
        <!-- <div class="history">
            <div 
                class="icon-holder"
                @click="$store.dispatch('shuffleDeck')">

                <icon v-if="shouldShuffle" icon="redo-alt"></icon>
                <icon v-else icon="clock"></icon>
            </div>
            <div class="card-row-scroll">
                <transition-group 
                    class="card-row" 
                    name="history-card" 
                    tag="div">

                    <div 
                        class="history-card"
                        v-for="(cards, index) in drawnCards"                        
                        :key="index">
                        
                        <img 
                            v-for="card in cards"
                            :key="card.name"
                            :double-card="card.double"
                            :src="require(`@/assets/gloomhaven/images/${card.image}`)">
                    </div>
                </transition-group>
            </div>
        </div> -->
        <AMHistory />
        <AMCard />
        <!-- <AMHistory class="history" /> -->
        <!-- <div class="bless-curse">
            <div class="bless">
                <counter
                    title="Bless"
                    :value="$store.state.blesses.length"
                    increment="blessDeck"
                    decrement="unblessDeck"
                    color="#d1a016"
                    :icon="require('@/assets/bless.svg')"
                    :iconStyle="{
                        transform: 'translate(.1%,-3.5%)',
                        width: '117%',
                        height: '117%',
                    }" />
            </div>
            <div class="curse">
                <counter
                    title="Curse"
                    :value="$store.state.curses.length"
                    increment="curseDeck"
                    decrement="uncurseDeck"
                    color="#7847a8"
                    :icon="require('@/assets/curse.svg')"
                    :iconStyle="{
                        transform: 'translate(0,-8%)',
                        width: '110%',
                        height: '110%',
                    }" />
            </div>
        </div> -->
    </section>
</template>

<script>
import AMCard from '@/components/AMCard'
import AMHistory from '@/components/AMHistory'
import Counter from '@/components/Counter'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClock, faRedoAlt, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

library.add(faClock, faRedoAlt, faPlus, faMinus)

export default {
    name: 'attack-modifier',
    components: {
        AMCard,
        AMHistory,
        Counter
    },
    computed: {
        drawnCards: ({$store}) => $store.state.drawnCards,
        blesses: ({$store}) => $store.state.blesses,
        curses: ({$store}) => $store.state.curses,
        shouldShuffle: ({$store}) => $store.state.shouldShuffle,
    }
}
</script>

<style lang="scss" scoped>
    // .am-wrapper {
    //     display: grid;
    //     grid-template-rows: 3em calc(56vw + 3em);
    // }
</style>