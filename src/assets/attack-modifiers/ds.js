const icon = require('@/assets/character-icons/doomstalker.svg');
const poison = require('@/assets/status-icons/poison.svg');
const wound = require('@/assets/status-icons/wound.svg');
const muddle = require('@/assets/status-icons/muddle.svg');
const immobilize = require('@/assets/status-icons/immobilize.svg');
const stun = require('@/assets/status-icons/stun.svg');
const target = require('@/assets/status-icons/target.svg');

export default [
    {
        name: 'am-ds-01',
        points: 172,
        image: 'attack-modifiers/DS/am-ds-01.png',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        icon
    },
    {
        name: 'am-ds-02',
        points: 173,
        image: 'attack-modifiers/DS/am-ds-02.png',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        icon
    },
    {
        name: 'am-ds-03',
        points: 174,
        image: 'attack-modifiers/DS/am-ds-03.png',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        icon
    },
    {
        name: 'am-ds-04',
        points: 175,
        image: 'attack-modifiers/DS/am-ds-04.png',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        icon
    },
    {
        name: 'am-ds-05',
        points: 176,
        image: 'attack-modifiers/DS/am-ds-05.png',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>, <em>Roll</em>',
        roll: true,
        icon
    },
    {
        name: 'am-ds-06',
        points: 177,
        image: 'attack-modifiers/DS/am-ds-06.png',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>, <em>Roll</em>',
        roll: true,
        icon
    },
    {
        name: 'am-ds-07',
        points: 178,
        image: 'attack-modifiers/DS/am-ds-07.png',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>, <em>Roll</em>',
        roll: true,
        icon
    },
    {
        name: 'am-ds-08',
        points: 179,
        image: 'attack-modifiers/DS/am-ds-08.png',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>, <em>Roll</em>',
        roll: true,
        icon
    },
    {
        name: 'am-ds-09',
        points: 180,
        image: 'attack-modifiers/DS/am-ds-09.png',
        colorHex: '#7a5b42',
        content: '+2',
        variant: 'standard',
        status: muddle,
        description: '<em>Muddle</em>, Attack <em>+2</em>',
        icon
    },
    {
        name: 'am-ds-10',
        points: 181,
        image: 'attack-modifiers/DS/am-ds-10.png',
        colorHex: '#848366',
        content: '+1',
        variant: 'standard',
        status: poison,
        description: '<em>Poison</em>, Attack <em>+1</em>',
        icon
    },
    {
        name: 'am-ds-11',
        points: 182,
        image: 'attack-modifiers/DS/am-ds-11.png',
        colorHex: '#e15811',
        content: '+1',
        variant: 'standard',
        status: wound,
        description: '<em>Wound</em>, Attack <em>+1</em>',
        icon
    },
    {
        name: 'am-ds-12',
        points: 183,
        image: 'attack-modifiers/DS/am-ds-12.png',
        colorHex: '#9f3027',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>, <em>Immobilize</em>',
        status: immobilize,
        icon
    },
    {
        name: 'am-ds-13',
        points: 184,
        image: 'attack-modifiers/DS/am-ds-13.png',
        colorHex: '#324165',
        content: stun,
        variant: 'status',
        description: '<em>Stun</em>',
        icon
    },
    {
        name: 'am-ds-14',
        points: 185,
        image: 'attack-modifiers/DS/am-ds-14.png',
        colorHex: '#aa1a17',
        content: target,
        variant: 'status',
        description: '<em>Add target</em>, <em>Roll</em>',
        roll: true,
        icon
    },
    {
        name: 'am-ds-15',
        points: 186,
        image: 'attack-modifiers/DS/am-ds-15.png',
        colorHex: '#aa1a17',
        content: target,
        variant: 'status',
        description: '<em>Add target</em>, <em>Roll</em>',
        roll: true,
        icon
    },
    {
        name: 'am-ds-16',
        points: 187,
        image: 'attack-modifiers/DS/am-ds-16.png',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        icon
    },
    {
        name: 'am-ds-17',
        points: 188,
        image: 'attack-modifiers/DS/am-ds-17.png',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        icon
    },
];
