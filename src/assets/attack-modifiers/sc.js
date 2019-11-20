const icon = require('@/assets/character-icons/scoundrel.svg');
const pierce3 = require('@/assets/status-icons/pierce-number.svg').replace('$', '3');
const poison = require('@/assets/status-icons/poison.svg');
const muddle = require('@/assets/status-icons/muddle.svg');
const invisible = require('@/assets/status-icons/invisible.svg');

export default [
    {
        name: 'am-sc-01',
        points: 304,
        image: 'attack-modifiers/SC/am-sc-01.png',
        colorHex: '#a26c47',
        content: '+0',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        icon
    },
    {
        name: 'am-sc-02',
        points: 305,
        image: 'attack-modifiers/SC/am-sc-02.png',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        icon
    },
    {
        name: 'am-sc-03',
        points: 306,
        image: 'attack-modifiers/SC/am-sc-03.png',
        colorHex: '#729643',
        content: '+2',
        variant: 'standard',
        description: 'Attack <em>+2</em>',
        icon
    },
    {
        name: 'am-sc-04',
        points: 307,
        image: 'attack-modifiers/SC/am-sc-04.png',
        colorHex: '#729643',
        content: '+2',
        variant: 'standard',
        description: 'Attack <em>+2</em>',
        icon
    },
    {
        name: 'am-sc-05',
        points: 308,
        image: 'attack-modifiers/SC/am-sc-05.png',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        roll: true,
        icon
    },
    {
        name: 'am-sc-06',
        points: 309,
        image: 'attack-modifiers/SC/am-sc-06.png',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        roll: true,
        icon
    },
    {
        name: 'am-sc-07',
        points: 310,
        image: 'attack-modifiers/SC/am-sc-07.png',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        roll: true,
        icon
    },
    {
        name: 'am-sc-08',
        points: 311,
        image: 'attack-modifiers/SC/am-sc-08.png',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        roll: true,
        icon
    },
    {
        name: 'am-sc-09',
        points: 312,
        image: 'attack-modifiers/SC/am-sc-09.png',
        colorHex: '#ce8f46',
        content: pierce3,
        variant: 'status',
        description: '<em>Pierce 3</em>, <em>Roll</em>',
        roll: true,
        icon
    },
    {
        name: 'am-sc-10',
        points: 313,
        image: 'attack-modifiers/SC/am-sc-10.png',
        colorHex: '#ce8f46',
        content: pierce3,
        variant: 'status',
        description: '<em>Pierce 3</em>, <em>Roll</em>',
        roll: true,
        icon
    },
    {
        name: 'am-sc-11',
        points: 314,
        image: 'attack-modifiers/SC/am-sc-11.png',
        colorHex: '#848366',
        content: poison,
        variant: 'status',
        description: '<em>Poison</em>, <em>Roll</em>',
        roll: true,
        icon
    },
    {
        name: 'am-sc-12',
        points: 315,
        image: 'attack-modifiers/SC/am-sc-12.png',
        xws: 'amsc12',
        colorHex: '#848366',
        content: poison,
        variant: 'status',
        description: '<em>Poison</em>, <em>Roll</em>',
        roll: true,
        icon
    },
    {
        name: 'am-sc-13',
        points: 316,
        image: 'attack-modifiers/SC/am-sc-13.png',
        xws: 'amsc13',
        colorHex: '#848366',
        content: poison,
        variant: 'status',
        description: '<em>Poison</em>, <em>Roll</em>',
        roll: true,
        icon
    },
    {
        name: 'am-sc-14',
        points: 317,
        image: 'attack-modifiers/SC/am-sc-14.png',
        xws: 'amsc14',
        colorHex: '#848366',
        content: poison,
        variant: 'status',
        description: '<em>Poison</em>, <em>Roll</em>',
        roll: true,
        icon
    },
    {
        name: 'am-sc-15',
        points: 318,
        image: 'attack-modifiers/SC/am-sc-15.png',
        colorHex: '#7a5b42', 
        content: muddle,
        variant: 'status',
        description: '<em>Muddle</em>, <em>Roll</em>',
        roll: true,
        icon
    },
    {
        name: 'am-sc-16',
        points: 319,
        image: 'attack-modifiers/SC/am-sc-16.png',
        colorHex: '#7a5b42', 
        content: muddle,
        variant: 'status',
        description: '<em>Muddle</em>, <em>Roll</em>',
        icon
    },
    {
        name: 'am-sc-17',
        points: 320,
        image: 'attack-modifiers/SC/am-sc-17.png',
        colorHex: '#201d19', 
        content: invisible,
        variant: 'status',
        description: '<em>Invisible</em>, <em>Roll</em>',
        icon
    },
]