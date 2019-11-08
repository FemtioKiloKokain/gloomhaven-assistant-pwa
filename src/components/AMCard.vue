<template>
    <section class="am-card-wrapper">
        <div
            class="am-card"
            :class="{'no-cards': !drawnCards}"
            ref="card"
            @click="draw"
        >
            <div class="card-front" :style="bgStyle">
                <div
                    v-for="(card, i) in drawnCards"
                    :key="i"
                    ref="cardFront"
                    :class="['card', card.variant]"
                >
                    <div class="extra"></div>

                    <div class="coin">
                        <div ref="coin" class="coin-inner">
                            <span
                                ref="front"
                                class="keep-svg-style coin-front"
                                v-html="card.content"
                            />

                            <span
                                ref="back"
                                class="coin-back"
                                v-html="require('@/assets/attack.svg')"
                            />
                        </div>
                    </div>

                    <div class="roll">
                        <icon 
                            v-if="card.roll"
                            name="roll"
                            icon-style="no-outline" />
                    </div>

                    <span class="card-icon" v-html="card.icon" />
                </div>
            </div>
            <div class="card-back" v-html="require('@/assets/attack.svg')" />
        </div>
        <div class="am-card-toolbar">
            <ripple ref="double" class="double" @click.native="drawDouble">
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
import Ripple from '@/components/UI/Ripple';
import Icon from '@/components/UI/Icon';
import { TimelineMax } from 'gsap';

export default {
    name: 'am-card',
    components: {
        Ripple,
        Icon
    },
    computed: {
        drawnCards: ({ $store }) => {
            const drawnCards = $store.state.drawnCards;
            return drawnCards[drawnCards.length - 1];
        },
        bgStyle: function() {
            const cards = this.drawnCards 
            
            return {
                '--bg1': cards ? cards[0].colorHex : '#000',
                '--bg2': cards ? cards[cards.length - 1].colorHex : '#000'
            }
        }
    },
    methods: {
        flipCard: function(double) {
            const draw = () => this.$store.dispatch('drawCard', double);
            const card = this.$refs.card;
            const eventTarget = [this.$refs.double.$el, card];
            const timeline = new TimelineMax();
            const firstFlip = this.drawnCards ? .5 : 0

            timeline
                .set(eventTarget, { pointerEvents: 'none' })
                .to(card, firstFlip, { rotationX: '180_cw' })
                .call(draw)
                .to(card, 0.5, { rotationX: '0_cw', delay: .1 })
                .set(eventTarget, { pointerEvents: '' });
        },
        flipCoin: function(double) {
            const draw = () => this.$store.dispatch('drawCard', double);
            const coins = this.$refs.coin;
            const timeline = new TimelineMax();

            timeline
                .to(coins, 0.5, { rotationY: '180_ccw' })
                .call(draw)
                .to(coins, 0.5, { rotationY: '0_ccw' });
        },
        draw() {
            if (!this.drawnCards) {
                this.flipCard(false);
                return;
            }

            if (this.$refs.coin.length === 1) this.flipCard(false);
            else this.flipCard(false);
        },
        drawDouble() {
            if (!this.drawnCards) {
                this.flipCard(true);
                return;
            }

            if (this.$refs.coin.length === 2) this.flipCard(true);
            else this.flipCard(true);
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

    .card-front {
        backface-visibility: hidden;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: var(--bg1);
        background-image: url('https://di-uploads-pod6.dealerinspire.com/kelownatoyota/uploads/2016/12/geometric-bg-1.png');
        background-blend-mode: multiply;
        background-position: center center;
        transition: background-color 0.5s;
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
            transition: background-color 0.5s;
            z-index: 0;
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
        padding: 5%;

        .card-icon {
            width: 7.5%;
            color: #fff;
            border-radius: 50%;
            position: absolute;
            left: 5%;
            bottom: 4vw;
            filter: drop-shadow(0.25vw 0.25vw 0.5vw rgba(0, 0, 0, 0.2));

            &::before {
                content: '';
                display: block;
                padding-top: 100%;
            }

            svg {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
            }
        }

        &:only-child {
            height: 100%;
        }

        &:not(:only-child) {
            height: 56%;

            .coin {
                transform: scale(0.7);
            }

            .extra,
            .roll {
                padding: 0 0;

                &:empty {
                    display: none;
                }
            }

            &:first-child {
                top: 0;
                justify-content: flex-start;

                .card-icon {
                    top: 4vw;
                    right: 5%;
                    left: auto;
                    bottom: auto;
                }

                .coin {
                    order: 1;
                    margin: 0 -3% -4% -6%;
                }

                .extra,
                .roll {
                    order: 2;
                }
            }

            &:last-child {
                justify-content: flex-end;
                bottom: 0;

                .coin {
                    order: 2;
                    margin: 0 -6% 4% -3%;
                }

                .extra,
                .roll {
                    order: 1;
                }
            }
        }
    }

    .coin {
        display: inline-block;
        position: relative;
        transform-style: preserve-3d;
        overflow: visible;
        display: flex;
        justify-content: center;
        flex-basis: 47%;
        margin: 4.5%;

        &::before {
            content: '';
            display: block;
            padding-top: 100%;
        }
    }

    .coin-inner {
        display: inline-block;
        position: relative;
        transform-style: preserve-3d;
        overflow: visible;
        display: flex;
        justify-content: center;
        width: 100%;

        &::before {
            content: '';
            display: block;
            padding-top: 100%;
            width: 100%;
            background: #fff;
            z-index: 0;
            border-radius: 50%;
            transform: translateZ(-2px);
            box-shadow: inset 0 2vw 1vw rgba(0, 0, 0, 0.2),
                inset 0 -2vw 1vw rgba(0, 0, 0, 0.2);
        }

        span {
            font-size: 25vw;
            background: #fff;
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #222;
            backface-visibility: hidden;
            border-radius: 50%;
            box-shadow: inset 0 0 4vw rgba(255, 255, 255, 0.3),
                0 2vw 3vw -2vw rgba(0, 0, 0, 0.4);
        }

        svg {
            height: 100%;
            width: 100%;
        }

        .coin-front {
            transform: translateZ(0px);
            z-index: 3;
        }

        .coin-back {
            transform: translateZ(-4px) rotateX(180deg) rotateZ(180deg);
            background: #fff;
            z-index: 1;

            svg {
                height: 50%;
                width: 50%;
            }
        }
    }

    .extra,
    .roll {
        flex-basis: 21%;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        filter: drop-shadow(0 2px 3px rgba(0,0,0,.15));

        svg {
            width: 100%;
            height: auto;
            display: inline-block;
        }

        path:first-child + path {
            display: none;
        }
    }

    // .extra {
    //     padding-top: 19%;
    // }

    .roll {
        padding-top: 5%;
    }

    &.standard .card-effect span {
        text-indent: -0.1em;
    }
}

.am-card-toolbar {
    padding: 0.5em 0;
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
        margin-right: 0.5em;
        padding: 0 1em;

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
</style>
