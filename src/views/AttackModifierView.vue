<template>
    <div class="section" ref="section">
        <attack-modifier />
        <modify-deck />
    </div>
</template>

<script>
import AttackModifier from '@/components/AttackModifier'
import ModifyDeck from '@/components/ModifyDeck'

export default {
    name: 'attack-view',
    components: {
        AttackModifier,
        ModifyDeck
    }
}
</script>

<style lang="scss" scoped>
    .section {
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-columns: 100% 100%;
        grid-template-rows: 100%;
        overflow-x: scroll;
        overflow-y: visible;
        scroll-snap-type: mandatory;
        scroll-snap-type: x mandatory;

        > section,
        > div {
            scroll-snap-align: start;
        }
    }
</style>
