const icon = require('@/assets/character-icons/mindthief.svg');
const frost = require('@/assets/element-icons/frost.svg');
const pull1 = require('@/assets/status-icons/pull-number.svg').replace('$', '1');
const muddle = require('@/assets/status-icons/muddle.svg');
const immobilize = require('@/assets/status-icons/immobilize.svg');
const stun = require('@/assets/status-icons/stun.svg');
const disarm = require('@/assets/status-icons/disarm.svg');

export default [
    {
        name: 'am-mt-01',
        points: 213,
        image: 'attack-modifiers/MT/am-mt-01.png',
        colorHex: '#729643',
        content: '+2',
        variant: 'standard',
        description: 'Attack <em>+2</em>',
        icon
    },
    {
        name: 'am-mt-02',
        points: 214,
        image: 'attack-modifiers/MT/am-mt-02.png',
        colorHex: '#729643',
        content: '+2',
        variant: 'standard',
        description: 'Attack <em>+2</em>',
        icon
    },
    {
        name: 'am-mt-03',
        points: 215,
        image: 'attack-modifiers/MT/am-mt-03.png',
        colorHex: '#a26c47',
        content: '+0',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        icon
    },
    {
        name: 'am-mt-04',
        points: 216,
        image: 'attack-modifiers/MT/am-mt-04.png',
        colorHex: '#61C2CA',
        content: '+2',
        description: 'Create <em>Frost</em>, Attack <em>+2</em>',
        status: frost,
        icon
    },
    {
        name: 'am-mt-05',
        points: 217,
        image: 'attack-modifiers/MT/am-mt-05.png',
        colorHex: '#61C2CA',
        content: '+2',
        description: 'Create <em>Frost</em>, Attack <em>+2</em>',
        status: frost,
        icon
    },
    {
        name: 'am-mt-06',
        points: 218,
        image: 'attack-modifiers/MT/am-mt-06.png',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        roll: true,
        icon
    },
    {
        name: 'am-mt-07',
        points: 219,
        image: 'attack-modifiers/MT/am-mt-07.png',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        roll: true,
        icon
    },
    {
        name: 'am-mt-08',
        points: 220,
        image: 'attack-modifiers/MT/am-mt-08.png',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        roll: true,
        icon
    },
    {
        name: 'am-mt-09',
        points: 221,
        image: 'attack-modifiers/MT/am-mt-09.png',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        roll: true,
        icon
    },
    {
        name: 'am-mt-10',
        points: 222,
        image: 'attack-modifiers/MT/am-mt-10.png',
        colorHex: '#565251',
        content: pull1,
        variant: 'status',
        description: '<em>Push 2</em>, <em>Roll</em>',
        roll: true,
        icon
    },
    {
        name: 'am-mt-11',
        points: 223,
        image: 'attack-modifiers/MT/am-mt-11.png',
        colorHex: '#565251',
        content: pull1,
        variant: 'status',
        description: '<em>Push 2</em>, <em>Roll</em>',
        roll: true,
        icon
    },
    {
        name: 'am-mt-12',
        points: 224,
        image: 'attack-modifiers/MT/am-mt-12.png',
        colorHex: '#565251',
        content: pull1,
        variant: 'status',
        description: '<em>Push 2</em>, <em>Roll</em>',
        roll: true,
        icon
    },
    {
        name: 'am-mt-13',
        points: 225,
        image: 'attack-modifiers/MT/am-mt-13.png',
        colorHex: '#7a5b42',
        content: '+2',
        variant: 'standard',
        description: 'Attack <em>+2</em>, <em>Muddle</em>',
        status: muddle,
        icon
    },
    {
        name: 'am-mt-14',
        points: 226,
        image: 'attack-modifiers/MT/am-mt-14.png',
        colorHex: '#7a5b42',
        content: '+2',
        variant: 'standard',
        description: 'Attack <em>+2</em>, <em>Muddle</em>',
        status: muddle,
        icon
    },
    {
        name: 'am-mt-15',
        points: 227,
        image: 'attack-modifiers/MT/am-mt-15.png',
        colorHex: '#7a5b42',
        content: '+2',
        variant: 'standard',
        description: 'Attack <em>+2</em>, <em>Muddle</em>',
        status: muddle,
        icon
    },
    {
        name: 'am-mt-16',
        points: 228,
        image: 'attack-modifiers/MT/am-mt-16.png',
        colorHex: '#7a5b42',
        content: '+2',
        variant: 'standard',
        description: 'Attack <em>+2</em>, <em>Muddle</em>',
        status: muddle,
        icon
    },
    {
        name: 'am-mt-17',
        points: 229,
        image: 'attack-modifiers/MT/am-mt-17.png',
        colorHex: '#9f3027',
        content: immobilize,
        variant: 'status',
        description: '<em>Immobilize</em>, <em>Roll</em>',
        roll: true,
        icon
    },
    {
        name: 'am-mt-18',
        points: 230,
        image: 'attack-modifiers/MT/am-mt-18.png',
        colorHex: '#9f3027',
        content: immobilize,
        variant: 'status',
        description: '<em>Immobilize</em>, <em>Roll</em>',
        roll: true,
        icon
    },
    {
        name: 'am-mt-19',
        points: 231,
        image: 'attack-modifiers/MT/am-mt-19.png',
        colorHex: '#324165',
        content: stun,
        variant: 'status',
        description: '<em>Stun</em>, <em>Roll</em>',
        roll: true,
        icon
    },
    {
        name: 'am-mt-20',
        points: 232,
        image: 'attack-modifiers/MT/am-mt-20.png',
        colorHex: '#6e7b7f',
        content: disarm,
        variant: 'status',
        description: '<em>Disarm</em>, <em>Roll</em>',
        roll: true,
        icon
    },
]