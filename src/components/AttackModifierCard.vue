<template>
    <Card
        :pose="flipped ? 'visible' : 'hidden'"
        class="flip-card"
        ref="card">
                
        <Flip class="flip">
            <div class="front">
                <div 
                    class="card"
                    v-for="card in cards" 
                    :key="card.name">

                    <img :src="require(`@/assets/gloomhaven/images/${card.image}`)" />
                </div>
            </div>        
            
            <div class="back">
                <img :src="require('@/assets/images/attack_mod_back.jpg')" />
            </div>
        </Flip>
    </Card>
</template>
<script>
import posed from 'vue-pose'
export default {
    name: 'attack-modifier-card',
    data() {
        return {
            flipped: false
        }
    },
    components: {
        Card: posed.div({
            visible: { 
                'z-index': 1,
                y: '100%',
                transition: { 
                    y: { duration: 700 },
                    'z-index': { duration: 400 }
                }
            },
            hidden: { 
                'z-index': 0,
                y: '-100%'
            },
        }),
        Flip: posed.div({
            visible: { 
                rotateX: '0deg',
                y: '-97%',
                x: '2%',
                transition:{
                    x: {
                        delay: 125,
                        duration: 700
                    },
                    y: {
                        delay: 200,
                        duration: 600
                    },
                    rotateX: {
                        delay: 100,
                        duration: 700
                    }
                }
            },
            hidden: { 
                rotateX: '-180deg',
                y: '0%',
                x: '0%'
            }
        })
    },
    props: {
        cards: Array,
        index: Number
    },
    mounted() {
        this.$nextTick(() => { this.flipped = true })
    }
}
</script>
<style lang="scss" scoped>
    .flip-card {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;

        .flip {
            height: 100%;
            width: 100%;
            perspective: 1000;
            transform-style: preserve-3d;
            position: relative;
            transform-origin: right center;
            border-radius: 5%/7.25%;
            // box-shadow: 0 0 4px rgba(80, 50, 50, 0.1);
            transform-origin: center bottom;
        }

        .front, .back {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border-radius: 5%/7.25%;
            box-shadow: 0 0 10px rgba(0,0,0, 0.25);
            overflow: hidden;
        }
        
        .back {
            transform: rotateY(180deg) rotateZ(180deg);
        }

        .front {
            display: flex;
        }

        .card {
            position: relative;
            flex: 1 0 auto;
            overflow: hidden;
        }

        img {
            position: absolute;
            top: 50%;
            left: 50%;
            height: 100%;
            width: auto;
            transform: translate(-50%,-50%);
        }
    }
</style>
