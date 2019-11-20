const icon = require('@/assets/character-icons/summoner.svg');
const wound = require('@/assets/status-icons/wound.svg');
const poison = require('@/assets/status-icons/poison.svg');
const heal = require('@/assets/heal-self.svg');
const fire = require('@/assets/element-icons/fire.svg');
const air = require('@/assets/element-icons/air.svg');
const dark = require('@/assets/element-icons/dark.svg');
const leaf = require('@/assets/element-icons/leaf.svg');

export default [
    {
        name: 'am-su-01',
        points: 356,
        color: 'green',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        image: 'attack-modifiers/SU/am-su-01.png',
        icon
    },
    {
        name: 'am-su-02',
        points: 357,
        color: 'green',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        image: 'attack-modifiers/SU/am-su-02.png',
        icon
    },
    {
        name: 'am-su-03',
        points: 358,
        color: 'green',
        colorHex: '#729643',
        content: '+2',
        variant: 'standard',
        description: 'Attack <em>+2</em>',
        image: 'attack-modifiers/SU/am-su-03.png',
        icon
    },
    {
        name: 'am-su-04',
        points: 359,
        color: 'green',
        colorHex: '#729643',
        content: '+2',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        image: 'attack-modifiers/SU/am-su-04.png',
        icon
    },
    {
        name: 'am-su-05',
        points: 360,
        color: 'orange',
        colorHex: '#e15811',
        content: wound,
        variant: 'status',
        description: '<em>Wound</em>, <em>Roll</em>',
        image: 'attack-modifiers/SU/am-su-05.png',
        roll: true,
        icon
    },
    {
        name: 'am-su-06',
        points: 361,
        color: 'orange',
        colorHex: '#e15811',
        content: wound,
        variant: 'status',
        description: '<em>Wound</em>, <em>Roll</em>',
        image: 'attack-modifiers/SU/am-su-06.png',
        roll: true,
        icon
    },
    {
        name: 'am-su-07',
        points: 362,
        color: 'olive',
        colorHex: '#848366',
        content: poison,
        variant: 'status',
        description: '<em>Poison</em>, <em>Roll</em>',
        image: 'attack-modifiers/SU/am-su-07.png',
        roll: true,
        icon
    },
    {
        name: 'am-su-08',
        points: 363,
        color: 'olive',
        colorHex: '#848366',
        content: poison,
        variant: 'status',
        description: '<em>Poison</em>, <em>Roll</em>',
        image: 'attack-modifiers/SU/am-su-08.png',
        roll: true,
        icon
    },
    {
        name: 'am-su-09',
        points: 364,
        color: 'brown',
        colorHex: '#a26c47',
        content: heal,
        variant: 'status',
        description: '<em>Heal 1</em>, <em>Roll</em>',
        image: 'attack-modifiers/SU/am-su-09.png',
        roll: true,
        icon
    },
    {
        name: 'am-su-10',
        points: 365,
        color: 'brown',
        colorHex: '#a26c47',
        content: heal,
        variant: 'status',
        description: '<em>Heal 1</em>, <em>Roll</em>',
        image: 'attack-modifiers/SU/am-su-10.png',
        roll: true,
        icon
    },
    {
        name: 'am-su-11',
        points: 366,
        color: 'brown',
        colorHex: '#a26c47',
        content: heal,
        variant: 'status',
        description: '<em>Heal 1</em>, <em>Roll</em>',
        image: 'attack-modifiers/SU/am-su-11.png',
        roll: true,
        icon
    },
    {
        name: 'am-su-12',
        points: 367,
        color: 'brown',
        colorHex: '#a26c47',
        content: heal,
        variant: 'status',
        description: '<em>Heal 1</em>, <em>Roll</em>',
        image: 'attack-modifiers/SU/am-su-12.png',
        roll: true,
        icon
    },
    {
        name: 'am-su-13',
        points: 368,
        color: 'brown',
        colorHex: '#a26c47',
        content: heal,
        variant: 'status',
        description: '<em>Heal 1</em>, <em>Roll</em>',
        image: 'attack-modifiers/SU/am-su-13.png',
        roll: true,
        icon
    },
    {
        name: 'am-su-14',
        points: 369,
        color: 'brown',
        colorHex: '#a26c47',
        content: heal,
        variant: 'status',
        description: '<em>Heal 1</em>, <em>Roll</em>',
        image: 'attack-modifiers/SU/am-su-14.png',
        roll: true,
        icon
    },
    {
        name: 'am-su-15',
        points: 370,
        color: 'fireRed',
        colorHex: '#f55c1f',
        content: fire,
        variant: 'element',
        description: 'Create <em>Fire</em>, <em>Roll</em>',
        image: 'attack-modifiers/SU/am-su-15.png',
        roll: true,
        icon
    },
    {
        name: 'am-su-16',
        points: 371,
        color: 'airGray',
        colorHex: '#a1b0a6',
        content: air,
        variant: 'element',
        description: 'Create <em>Air</em>, <em>Roll</em>',
        image: 'attack-modifiers/SU/am-su-16.png',
        roll: true,
        icon
    },
    {
        name: 'am-su-17',
        points: 372,
        color: 'darkGray',
        colorHex: '#34312e',
        content: dark,
        variant: 'element',
        description: 'Create <em>Dark</em>, <em>Roll</em>',
        image: 'attack-modifiers/SU/am-su-17.png',
        roll: true,
        icon
    },
    {
        name: 'am-su-18',
        points: 373,
        color: 'leafGreen',
        colorHex: '#a1a83d',
        content: leaf,
        variant: 'element',
        description: 'Create <em>Leaf</em>, <em>Roll</em>',
        image: 'attack-modifiers/SU/am-su-18.png',
        roll: true,
        icon
    },
    {
        name: 'am-su-19',
        points: 374,
        color: 'brown',
        colorHex: '#a26c47',
        content: '+0',
        variant: 'standard',
        description: 'Attack <em>+0</em>',
        image: 'attack-modifiers/SU/am-su-19.png',
        icon
    },
    {
        name: 'am-su-20',
        points: 375,
        color: 'green',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        image: 'attack-modifiers/SU/am-su-20.png',
        icon
    },
    {
        name: 'am-su-21',
        points: 376,
        color: 'green',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        image: 'attack-modifiers/SU/am-su-21.png',
        icon
    },
    {
        name: 'am-su-22',
        points: 377,
        color: 'green',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        image: 'attack-modifiers/SU/am-su-22.png',
        icon
    }
];
