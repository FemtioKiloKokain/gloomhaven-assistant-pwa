<template>
    <span
        class="icon"
        :class="{'keep-svg-style': iconstyle != 'flat'}"
        v-html="require(`@/assets/icons/${iconstyle}/${name}.svg`)">
    </span>
</template>
<script>
export default {
    name: 'icon',
    props: {
        name: String,
        iconstyle: {
            type: String,
            default: 'normal'
        }
    }
}
</script>
<style lang="scss" scoped>
    .icon {
        position: relative;
        overflow: hidden;
    }
</style>

