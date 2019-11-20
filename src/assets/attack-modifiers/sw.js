const icon = require('@/assets/character-icons/spellweaver.svg');
const stun = require('@/assets/status-icons/stun.svg');
const wound = require('@/assets/status-icons/wound.svg');
const immobilize = require('@/assets/status-icons/immobilize.svg');
const curse = require('@/assets/status-icons/curse.svg');
const fire = require('@/assets/element-icons/fire.svg');
const frost = require('@/assets/element-icons/frost.svg');
const leaf = require('@/assets/element-icons/leaf.svg');
const air = require('@/assets/element-icons/air.svg');
const light = require('@/assets/element-icons/light.svg');
const dark = require('@/assets/element-icons/dark.svg');

export default [
    {
        name: 'am-sw-01',
        points: 378,
        image: 'attack-modifiers/SW/am-sw-01.png',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        icon
    },
    {
        name: 'am-sw-02',
        points: 379,
        image: 'attack-modifiers/SW/am-sw-02.png',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        icon
    },
    {
        name: 'am-sw-03',
        points: 380,
        image: 'attack-modifiers/SW/am-sw-03.png',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        icon
    },
    {
        name: 'am-sw-04',
        points: 381,
        image: 'attack-modifiers/SW/am-sw-04.png',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        icon
    },
    {
        name: 'am-sw-05',
        points: 382,
        image: 'attack-modifiers/SW/am-sw-05.png',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        icon
    },
    {
        name: 'am-sw-06',
        points: 383,
        image: 'attack-modifiers/SW/am-sw-06.png',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        icon
    },
    {
        name: 'am-sw-07',
        points: 384,
        image: 'attack-modifiers/SW/am-sw-07.png',
        colorHex: '#324165',
        content: stun,
        variant: 'status',
        description: '<em>Stun</em>, <em>Roll</em>',
        roll: true,
        icon
    },
    {
        name: 'am-sw-08',
        points: 385,
        image: 'attack-modifiers/SW/am-sw-08.png',
        colorHex: '#e15811',
        content: '+1',
        variant: 'standard',
        status: wound,
        description: '<em>Wound</em>, Attack <em>+1</em>',
        icon
    },
    {
        name: 'am-sw-09',
        points: 386,
        image: 'attack-modifiers/SW/am-sw-09.png',
        colorHex: '#9f3027',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>, <em>Immobilize</em>',
        status: immobilize,
        icon
    },
    {
        name: 'am-sw-10',
        points: 387,
        image: 'attack-modifiers/SW/am-sw-10.png',
        colorHex: '#83519C',
        content: '+1',
        variant: 'standard',
        description: '<em>Curse</em>, Attack <em>+1</em>',
        status: curse,
        icon
    },
    {
        name: 'am-sw-11',
        points: 388,
        image: 'attack-modifiers/SW/am-sw-11.png',
        colorHex: '#F55C1F',
        content: '+2',
        varirant: 'standard',
        description: 'Create <em>Fire</em>, Attack <em>+2</em>',
        status: fire,
        icon
    },
    {
        name: 'am-sw-12',
        points: 389,
        image: 'attack-modifiers/SW/am-sw-12.png',
        colorHex: '#F55C1F',
        content: '+2',
        description: 'Create <em>Fire</em>, Attack <em>+2</em>',
        status: fire,
        icon
    },
    {
        name: 'am-sw-13',
        points: 390,
        image: 'attack-modifiers/SW/am-sw-13.png',
        colorHex: '#61C2CA',
        content: '+2',
        description: 'Create <em>Frost</em>, Attack <em>+2</em>',
        status: frost,
        icon
    },
    {
        name: 'am-sw-14',
        points: 391,
        image: 'attack-modifiers/SW/am-sw-14.png',
        colorHex: '#61C2CA',
        content: '+2',
        description: 'Create <em>Frost</em>, Attack <em>+2</em>',
        status: frost,
        icon
    },
    {
        name: 'am-sw-15',
        points: 392,
        image: 'attack-modifiers/SW/am-sw-15.png',
        colorHex: '#a1a83d',
        content: leaf,
        variant: 'element',
        description: 'Create <em>Leaf</em>, <em>Roll</em>',
        roll: true,
        icon
    },
    {
        name: 'am-sw-16',
        points: 393,
        image: 'attack-modifiers/SW/am-sw-16.png',
        colorHex: '#a1b0a6',
        content: air,
        variant: 'element',
        description: 'Create <em>Air</em>, <em>Roll</em>',
        roll: true,
        icon
    },
    {
        name: 'am-sw-17',
        points: 394,
        image: 'attack-modifiers/SW/am-sw-17.png',
        xws: 'amsw17',
        colorHex: '#F2AF1C',
        content: light,
        variant: 'element',
        description: 'Create <em>Light</em>, <em>Roll</em>',
        roll: true,
        icon
    },
    {
        name: 'am-sw-18',
        points: 395,
        image: 'attack-modifiers/SW/am-sw-18.png',
        colorHex: '#34312e',
        content: dark,
        variant: 'element',
        description: 'Create <em>Dark</em>, <em>Roll</em>',
        roll: true,
        icon
    },
]