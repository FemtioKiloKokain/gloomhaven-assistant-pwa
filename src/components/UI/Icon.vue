<template>
    <span
        class="icon" 
        v-html="require(`@/assets/icons/${name}.svg`)">
        
    </span>
</template>
<script>
export default {
    name: 'icon',
    props: {
        name: String
    }
}
</script>
<style lang="scss">
    .icon {
        display: inline-flex;

        svg {
            height: 1em;
            width: 1em;
        }
    }
</style>

