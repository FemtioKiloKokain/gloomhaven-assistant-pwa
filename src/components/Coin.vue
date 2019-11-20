<template>
    <div :class="['coin', card.variant]">
        <div ref="coin" class="coin-inner">
            <span
                ref="front"
                class="keep-svg-style coin-front"
                v-html="card.content"
            />

            <!-- <span
                ref="back"
                class="coin-back"
                v-html="require('@/assets/attack.svg')"
            /> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'coin',
    props: {
        card: Object
    }
}
</script>

<style lang="scss">
    .coin {
        display: inline-block;
        position: relative;
        transform-style: preserve-3d;
        overflow: visible;
        display: flex;
        justify-content: center;
        flex-basis: 43%;
        margin: 4.5%;

        &::before {
            content: '';
            display: block;
            padding-top: 100%;
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
                // background: #fff;
                z-index: 0;
                border-radius: 50%;
                transform: translateZ(-2px);
                // box-shadow: inset 0 2vw 1vw rgba(0, 0, 0, 0.2),
                //     inset 0 -2vw 1vw rgba(0, 0, 0, 0.2);
            }

            span {
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
                filter: drop-shadow(0 2vw 1.8vw rgba(0, 0, 0, 0.1));
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

        &.bless,
        &.curse {
            .coin-front {
                filter: drop-shadow(.1vw .1vw 4vw  rgba(#333, .5));
                background: transparent;
                color: #fff;

                svg {
                    fill: #fff;
                }
            }
        }

        &.status {
            .coin-inner span {
                background: none;
                box-shadow: none;
                overflow: visible;
                transform: scale(1.1);

                svg {
                    filter: drop-shadow(0 1.6vw 1.4vw rgba(0, 0, 0, 0.1));
                }
            }
        }

        &.refresh {
            .coin-inner span {
                background: #222;

                svg {
                    width: 75%;
                }
            }
        }
    }
</style>