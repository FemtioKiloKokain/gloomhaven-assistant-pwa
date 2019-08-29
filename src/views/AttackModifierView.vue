<template>
    <section>
        <attack-modifier />
        <character-box />
    </section>
</template>

<script>
import AttackModifier from '@/components/AttackModifier'
import CharacterBox from '@/components/CharacterBox'

export default {
    name: 'attack-view',
    components: {
        AttackModifier,
        CharacterBox
    }
}
</script>

<style lang="scss" scoped>
    > section {
        max-width: 100%;
        overflow: hidden;
    }
</style>
