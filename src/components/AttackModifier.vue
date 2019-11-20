<template>
    <section class="am-wrapper">
        <AMHistory />
        <AMCard />
        <div class="counters">
            <counter
                title="Bless"
                :value="$store.state.blesses.length"
                increment="blessDeck" 
                decrement="unblessDeck"
                color="#d1a016"
                :icon="require('@/assets/bless.svg')"/>
            <counter
                title="Curse"
                :value="$store.state.curses.length"
                increment="curseDeck" 
                decrement="uncurseDeck"
                color="#7847a8"/>
        </div>
        <div class="counters">
            <counter
                title="HP"
                :value="$store.state.hp"
                increment="increaseHp"
                decrement="decreaseHp"
                color="#e74342"
                :icon="require('@/assets/hp.svg')"
                :iconStyle="{
                    transform: 'translate(40%,25%)',
                    width: '110%',
                    height: '110%',
                }" />
            <counter
                title="EXP"
                :value="$store.state.exp"
                increment="increaseExp"
                decrement="decreaseExp"
                color="#3277ba"
                :icon="require('@/assets/exp.svg')"
                :iconStyle="{
                    transform: 'translate(50%,25%)',
                    width: '150%',
                    height: '150%',
                }" />
        </div>
        <status></status>
    </section>
</template>

<script>
import AMCard from '@/components/AMCard'
import AMHistory from '@/components/AMHistory'
import Counter from '@/components/Counter'
import Status from '@/components/Status'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClock, faRedoAlt, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

library.add(faClock, faRedoAlt, faPlus, faMinus)

export default {
    name: 'attack-modifier',
    components: {
        AMCard,
        AMHistory,
        Counter,
        Status
    },
    computed: {
        drawnCards: ({$store}) => $store.state.drawnCards,
        blesses: ({$store}) => $store.state.blesses,
        curses: ({$store}) => $store.state.curses,
        shouldShuffle: ({$store}) => $store.state.shouldShuffle,
        character: ({$store}) => $store.state.character
    }
}
</script>

<style lang="scss" scoped>
    // .am-wrapper {
    //     display: grid;
    //     grid-template-rows: 3em calc(56vw + 3em);
    // }

    .counters {
        font-size: 1.15em;
        display: flex;
        margin: calc(var(--gutter) / 2) calc(var(--gutter) / 2 * -1);
        align-items: center;
        justify-content: space-between;

        .icon {
            width: 8vw;
            margin-right: var(--gutter);
        }
    }
</style>