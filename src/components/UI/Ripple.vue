<template>
    <div ripple
        ref="ripple"
        @mousedown="addRipple"
        @mouseup="cleanUp">

        <slot></slot>
        <div 
            class="ripple-container"
            ref="rippleContainer">

            <span 
                v-for="(ripple, i) in ripples"
                :key="i" 
                :style="ripple" />
        </div>

    </div>
</template>
<script>
import debounce from 'debounce'

export default {
    name: 'ripple',
    data () {
        return {
            width: 0,
            height: 0,
            pos: null,
            ripples: []
        }
    },
    methods: {
        addRipple(e) {
            this.ripples.push({
                left: e.offsetX - this.width / 2 + 'px',
                top: e.offsetY - this.height / 2 + 'px',
                width: this.width + 'px',
                height: this.width + 'px'
            })
        },
        cleanUp: debounce(function() { 
            this.ripples = []
        }, 2000)
    },
    mounted () {
        this.$nextTick(() => {
            this.width = this.$el.offsetWidth
            this.height = this.$el.offsetHeight
        })
    }
}
</script>
<style lang="scss">
    [ripple] {
        position: relative;
        overflow: hidden;
    }
    [ripple] .ripple-container {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
    [ripple] .ripple-container span {
        transform: scale(0);
        border-radius: 100%;
        position: absolute;
        opacity: 0.75;
        background-color: #fff;
        animation: ripple 750ms;
        pointer-events: none;
        margin-top: -1px;
    }
    @keyframes ripple {
        to {
            opacity: 0;
            transform: scale(2);
        }
    }
</style>