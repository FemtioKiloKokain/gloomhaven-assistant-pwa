<template>
    <div ref="lottie" class="lottie">
        
    </div>
</template>

<script>
import lottie from 'lottie-web'

export default {
    name: 'lottie',
    data() {
        return {
            anim: null
        }
    },
    props: {
        name: String,
        play: {
            type: Boolean,
            default: false,
        },
        autoplay: {
            type: Boolean,
            default: true
        },
        loop: {
            type: Boolean,
            default: true
        }
    },
    mounted() {
        this.anim = lottie.loadAnimation({
            container: this.$refs.lottie,
            renderer: 'svg',
            loop: this.loop,
            autoplay: this.play || this.autoplay,
            animationData: require(`@/assets/lottie/${this.name}`)
        })
    },

    watch: {
        play: function(play) {
            if(play) this.anim.play()
            else this.anim.stop()
        }
    }
}
</script>

<style lang="scss" scoped>
    .lottie {
        line-height: 0;
    }
</style>
