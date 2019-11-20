<template>
    <div class="status-wrapper">
        <div class="status-effects">
            <div
                class="status-effect"
                v-for="(effect, key) in status"
                :key="key"
                :data-active="effect"
                :style="{ '--status-color': statusColors[key] }"
                @click="$store.dispatch('toggleStatus', key)"
            >
                <div class="status-inner">
                    <lottie :autoplay="false" :play="effect" :name="key" />
                    <span class="title">{{ key }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Lottie from '@/components/UI/Lottie';

export default {
    name: 'status',
    components: {
        Lottie
    },
    data() {
        const statusColors = {
            strengthen: '#5198d3',
            invisible: '#201d19',
            disarm: '#6e7b7f',
            immobilize: '#9f3027',
            muddle: '#7a5b42',
            poison: '#848366',
            stun: '#324165',
            wound: '#e15811'
        };

        return {
            statusColors
        };
    },
    computed: {
        character: ({ $store }) => $store.state.character,
        status: ({ $store }) => $store.state.status
    }
};
</script>

<style lang="scss">
.status-effects {
    display: flex;
    flex-flow: row wrap;
    margin: 0 calc(var(--gutter) * -1 / 2);
    justify-content: flex-start;

    .status-effect {
        // width: calc(33.333% - var(--gutter));
        margin: calc(var(--gutter) / 2);

        .status-inner {
            display: flex;
            flex-flow: row;
            justify-content: space-between;
            // padding-left: .75em;
            align-items: center;
            // border: 1px solid #f5f5f5;
            border-radius: 5vw;
            overflow: visible;
            padding: 0 3.5vw 0 1vw;
        }

        span {
            flex: 1 1 auto;
            // text-align: center;
            font-size: .9em;
            text-transform: capitalize;
            // font-style: italic;
            // box-shadow: 0 1px 0 #fff;
        }

        .lottie {
            display: inline-block;
            position: relative;
            z-index: 1;
            background: transparent;
            transition: background 0.15s;
            // border-radius: 6vw;
            // width: 100%;
            // padding-left: .5vw;
            height: 7vw;
            // margin: -1px 1vw -1px .5vw;
            transform: scale(1);
            margin-left: auto;
            width: 2em;
        }

        &[data-active] {
            .status-inner {
                background: var(--status-color);
                border-color: var(--status-color);
                // border: 0;
            }

            // span {
            //     box-shadow: 0 0 0;
            // }
            

            &::before {
                // content: '';
                display: block;
            }
        }

        &::before {
            display: block;
            position: absolute;
            top: 3px;
            left: 3px;
            right: 3px;
            bottom: 3px;
            z-index: -1;
            box-shadow: 0 0 0 1px rgba(255, 255, 255, 1);
            opacity: 1;
            border-radius: 50%;
        }

        &:active {
            transform: scale(1.025);
        }
    }
}
</style>
