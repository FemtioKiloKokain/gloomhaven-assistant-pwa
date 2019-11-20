<template>
    <section class="am-card-wrapper">
        <div
            class="am-card"
            :class="{'no-cards': !drawnCards}"
            ref="card"
            @click="flipCard()"
        >
            <div
                v-if="uiStyle === 'traditional'" 
                class="image-front traditional">

                <div
                    v-for="(card, i) in drawnCards"
                    :key="i"
                    :class="['image-card', card.variant]">

                    <img :src="require(`@/assets/gloomhaven/images/${card.image}`)">
                </div>
            </div>
            <div 
                v-else
                class="card-front" 
                :style="bgStyle">
                <div
                    v-for="(card, i) in drawnCards"
                    :key="i"
                    ref="cardFront"
                    :class="['card', card.variant]"
                    :val="(card.variant === 'standard' ? card.content : '')"
                    :style="{'--c': card.colorHex}"
                >
                    <div 
                        v-if="card.status"
                        class="extra keep-svg-style" 
                        v-html="card.status">
                    </div>
                    <coin class="coin" :card="card" :double="drawnCards.length === 2"/>
                    <div 
                        v-if="card.roll"
                        class="roll keep-svg-style" 
                        v-html="require('@/assets/status-icons/roll.svg')" />

                    <span class="card-icon" v-html="card.icon" />
                </div>
            </div>
            
            <div class="card-back" v-html="require('@/assets/attack.svg')" />
        </div>
        <div class="am-card-toolbar">
            <ripple ref="double" class="double" @click.native="flipCard(true)">
                Draw two
                <!-- <icon name="strengthen" iconstyle="flat" />
                <icon name="muddle" iconstyle="flat" /> -->
            </ripple>
            <div class="card-description">
                <span 
                    v-for="card in drawnCards" 
                    v-html="card.description"
                    :style="{'--c': card.colorHex}"
                    :key="card.name" />
            </div>
        </div>
    </section>
</template>

<script>
import Coin from '@/components/Coin'
import Ripple from '@/components/UI/Ripple';
import Icon from '@/components/UI/Icon';
import { TimelineMax } from 'gsap';

export default {
    name: 'am-card',
    components: {
        Coin,
        Ripple,
        Icon
    },
    computed: {
        uiStyle: ({ $store }) => $store.state.uiStyle,
        drawnCards: ({ $store }) => $store.state.drawnCards.slice(-1)[0],
        bgStyle: ({ drawnCards }) => {            
            return {
                '--bg1': drawnCards ? drawnCards[0].colorHex : '#000',
                '--bg2': drawnCards ? drawnCards[drawnCards.length - 1].colorHex : '#000'
            }
        }
    },
    methods: {
        flipCard: function(double = false) {
            const draw = () => this.$store.dispatch('drawCard', double);
            const card = this.$refs.card;
            const eventTarget = [this.$refs.double.$el, card];
            const timeline = new TimelineMax();
            const firstFlip = this.drawnCards ? .3 : 0

            timeline
                .set(eventTarget, { pointerEvents: 'none' })
                .to(card, firstFlip, { rotationX: '180_cw' })
                .call(draw)
                .to(card, 0.5, { rotationX: '0_cw', delay: .15 })
                .set(eventTarget, { pointerEvents: '' });
        }
    }
};
</script>

<style lang="scss">
.am-card-wrapper {
    display: grid;
    grid-template-rows: 60vw 3em;
    perspective: 1500px;
}

.am-card {
    height: 100%;
    width: 100%;
    border-radius: var(--border-radius);
    position: relative;
    height: 100%;
    font-family: 'Pirata One';
    transform-style: preserve-3d;
    transform: rotateX(0deg);

    --bg1: #000;
    --bg2: #000;

    &.no-cards {
        transform: rotateX(180deg) !important;
    }

    .image-front {
        height: 100%;
        width: 100%;
        overflow: hidden;
        border-radius: var(--border-radius);
        display: flex;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .card-front {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: var(--bg1);
        background-image: url('https://di-uploads-pod6.dealerinspire.com/kelownatoyota/uploads/2016/12/geometric-bg-1.png');
        background-blend-mode: multiply;
        background-position: center center;
        overflow: hidden;
        border-radius: var(--border-radius);
        z-index: 1;

        &::before {
            content: '';
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            width: 150%;
            height: 150%;
            transform: translateX(-45%) translateZ(-100px) rotateZ(-19deg);
            box-shadow: 0 0 70px rgba(0, 0, 0, 0.25);
            background-color: var(--bg2);
            background-image: url('https://di-uploads-pod6.dealerinspire.com/kelownatoyota/uploads/2016/12/geometric-bg-1.png');
            background-blend-mode: multiply;
            background-position: center center;
            z-index: 0;
        }

        &.traditional::before {
            display: none;
        }
    }

    .card-back {
        --bg:#333;
        transform: rotateX(180deg);
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        backface-visibility: hidden;
        color: #f5f5f5;
        background: var(--bg);
        z-index: 2;
        border-radius: var(--border-radius);
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 10px 2px rgba(0, 0, 0, 1);
        overflow: hidden;

        svg {
            height: 55%;
            width: auto;
            z-index: 1;
        }

        img {
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
        }

        &::before {
            content: '';
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            width: 150%;
            height: 150%;
            transform: translateX(-45%) translateZ(-100px) rotateZ(-15deg);
            box-shadow: 0 0 70px rgba(0, 0, 0, 0.25);
            background: inherit;
            background-image: url('https://di-uploads-pod6.dealerinspire.com/kelownatoyota/uploads/2016/12/geometric-bg-1.png');
            background-blend-mode: multiply;
            background-position: center center;
        }
    }

    .card {
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        position: absolute;
        width: 100%;
        perspective: 500px;
        height: 100%;
        backface-visibility: hidden;
        z-index: 200;
        flex-flow: row wrap;
        padding: 5% 2%;

        .coin {
            font-size: 27.5vw;
        }

        .card-icon {
            width: 8.75vw;
            height: 8.75vw;
            color: transparent;
            border-radius: 50%;
            position: absolute;
            left: 3.25vw;
            bottom: 3vw;
            filter: drop-shadow(0.2vw 0.2vw 0.2vw rgba(0, 0, 0, 0.2));
            display: flex;
            align-items: center;
            padding: 1.25vw;
            background: #fff;
            // color: var(--c);
            color: #333;
            box-shadow: 
                inset 0 0 .1vw #fff,
                0 0 0 .2vw #fff;

            svg {
                width: 100%;
            }
        }

        &.bless,
        &.curse {
            .card-icon {
                background: transparent;
                box-shadow: none;
                width: 9.5vw;
                height: 9.5vw;
            }
        }

        &:only-child {
            height: 100%;
        }

        &:not(:only-child) {
            height: 56%;
            padding: 5%;

            .coin {
                transform: scale(0.7);
            }

            .roll,
            .extra {
                transform: translateY(0);
            }

            &:first-child {
                top: 0;
                justify-content: flex-start;

                .card-icon {
                    top: 3vw;
                    right: 4%;
                    left: auto;
                    bottom: auto;
                }

                .coin {
                    order: 1;
                    margin: 0 -3% -4% -6%;
                }

                .extra {
                    top: 3vw;
                    left: 36%;
                }

                .roll {
                    right: auto;
                    bottom: auto;
                    left: 36%;
                    top: 0;
                }
            }

            &:last-child {
                justify-content: flex-end;
                bottom: 0;

                .coin {
                    order: 2;
                    margin: 0 -6% 4% -3%;
                }

                .extra {
                    top: auto;
                    left: auto;
                    bottom: 2.5vw;
                    right: 36%;
                }

                .roll {
                    right: 36%;
                    bottom: 0;
                }
            }
        }
    }

    .extra,
    .roll {
        width: 25%;
        position: absolute;
        filter: drop-shadow(0 .4vw .4vw rgba(0,0,0,.075));

        svg {
            width: 100%;
            height: auto;
            display: inline-block;
        }

        // svg path:first-of-type,
        // svg path:first-of-type + path {
        //     display: none;
        // }
    }

    .extra {
        left: 2.5vw;
        top: 50%;
        transform: translateY(-75%);
    }

    .roll {
        right: 2.5vw;
        bottom: 50%;
        transform: translateY(75%);
    }
}

.am-card-toolbar {
    padding: var(--gutter) 0;
    display: flex;
    justify-content: flex-start;

    .double {
        position: relative;
        background: #5198d3;
        overflow: hidden;
        display: inline-flex;
        justify-content: space-around;
        line-height: 1.85em;
        height: 100%;
        // width: 4.5em;
        border-radius: 1.5em;
        background-image: url('https://di-uploads-pod6.dealerinspire.com/kelownatoyota/uploads/2016/12/geometric-bg-1.png');
        background-blend-mode: multiply;
        background-position: center center;
        margin-right: var(--gutter);
        padding: 0 1em;
        font-style: italic;

        * {
            pointer-events: none;
        }

        span {
            position: relative;
        }
        
        svg {
            height: 100%;
            overflow: visible;
            position: absolute;
            z-index: 2;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            path:first-child + path {
                display: none;
            }
        }

        // &::before{
        //     content: '';
        //     display: block;
        //     position: absolute;
        //     z-index: 0;
        //     width: 100%;
        //     height: 100%;
        //     left: 50%;
        //     // transform: skew(-35deg);
        //     background: #7a5b42;
        //     background-image: url('https://di-uploads-pod6.dealerinspire.com/kelownatoyota/uploads/2016/12/geometric-bg-1.png');
        //     background-blend-mode: multiply;
        //     background-position: center center;
        // }
    }

    .card-description {
        flex: 1;
        color: #f5f5f5;
        display: flex;
        flex-flow: row wrap;
        border-radius: 1.5em;
        height: 100%;
        line-height: 1.85em;
        justify-content: center;
        overflow: hidden;

        span {
            padding: 0 .75em;
            flex: 1 1;
            position: relative;
            background: var(--c);
            font-size: 1em;

            // + span {
            //     box-shadow: 
            //         -2px 0 0 #000,
            //         inset 2px 0 0 #000;
            // }

            + span::before {
                content: '';
                display: block;
                height: 100%;
                width: 1px;
                background: rgba(0,0,0,1);
                position: absolute;
                left: 0;
                box-shadow: 0px 0 20px rgba(0,0,0,1);
            }
        }

        em {
            position: relative;
        }
    }
}

.traditional {
    .image-card {
        flex: 1 1 auto;
    }

    .card-back::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url('~@/assets/images/attack_mod_back.jpg');
        z-index: 10;
        background-size: cover;
        background-position: center center;
    }
}
</style>
