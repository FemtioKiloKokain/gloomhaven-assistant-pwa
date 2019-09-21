<template>
    <section class="deck-wrapper">
        <deck></deck>
    </section>
</template>
<script>
import Deck from '@/components/Deck'

export default {
    name: 'deck-view',
    components: {
        Deck
    }
}
</script>

<style lang="scss" scoped>
    section {
        padding: 10px 10px 0;
    }
</style>

