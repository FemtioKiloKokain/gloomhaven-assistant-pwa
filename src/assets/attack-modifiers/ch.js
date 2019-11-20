const icon = require('@/assets/character-icons/cragheart.svg');
const immobilize = require('@/assets/status-icons/immobilize.svg');
const muddle = require('@/assets/status-icons/muddle.svg');
const push2 = require('@/assets/status-icons/push-number.svg').replace('$', '2');
const air = require('@/assets/element-icons/air.svg');
const leaf = require('@/assets/element-icons/leaf.svg');

export default [
    {
        name: 'am-ch-01',
        points: 154,
        color: 'green',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        image: 'attack-modifiers/CH/am-ch-01.png',
        icon
    },
    {
        name: 'am-ch-02',
        points: 155,
        color: 'green',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        image: 'attack-modifiers/CH/am-ch-02.png',
        icon
    },
    {
        name: 'am-ch-03',
        points: 156,
        color: 'green',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        image: 'attack-modifiers/CH/am-ch-03.png',
        icon
    },
    {
        name: 'am-ch-04',
        points: 157,
        color: 'red',
        colorHex: '#b94638',
        content: '-2',
        variant: 'standard',
        description: 'Attack <em>-2</em>',
        image: 'attack-modifiers/CH/am-ch-04.png',
        icon
    },
    {
        name: 'am-ch-05',
        points: 158,
        color: 'green',
        colorHex: '#729643',
        content: '+2',
        variant: 'standard',
        description: 'Attack <em>+2</em>',
        image: 'attack-modifiers/CH/am-ch-05.png',
        icon
    },
    {
        name: 'am-ch-06',
        points: 159,
        color: 'green',
        colorHex: '#729643',
        content: '+2',
        variant: 'standard',
        description: 'Attack <em>+2</em>',
        image: 'attack-modifiers/CH/am-ch-06.png',
        icon
    },
    {
        name: 'am-ch-07',
        points: 160,
        color: 'wine',
        colorHex: '#9f3027',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>, <em>Immobilize</em>',
        image: 'attack-modifiers/CH/am-ch-07.png',
        status: immobilize,
        icon
    },
    {
        name: 'am-ch-08',
        points: 161,
        color: 'wine',
        colorHex: '#9f3027',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>, <em>Immobilize</em>',
        image: 'attack-modifiers/CH/am-ch-08.png',
        status: immobilize,
        icon
    },
    {
        name: 'am-ch-09',
        points: 162,
        color: 'brown',
        colorHex: '#7a5b42',
        content: '+2',
        variant: 'standard',
        description: 'Attack <em>+2</em>, <em>Muddle</em>',
        image: 'attack-modifiers/CH/am-ch-09.png',
        status: muddle,
        icon
    },
    {
        name: 'am-ch-10',
        points: 163,
        color: 'brown',
        colorHex: '#7a5b42',
        content: '+2',
        variant: 'standard',
        description: 'Attack <em>+2</em>, <em>Muddle</em>',
        image: 'attack-modifiers/CH/am-ch-10.png',
        status: muddle,
        icon
    },
    {
        name: 'am-ch-11',
        points: 164,
        color: 'stone',
        colorHex: '#565251',
        content: push2,
        variant: 'status',
        description: '<em>Push 2</em>, <em>Roll</em>',
        image: 'attack-modifiers/CH/am-ch-11.png',
        roll: true,
        icon
    },
    {
        name: 'am-ch-12',
        points: 165,
        color: 'stone',
        colorHex: '#565251',
        content: push2,
        variant: 'status',
        description: '<em>Push 2</em>, <em>Roll</em>',
        image: 'attack-modifiers/CH/am-ch-12.png',
        roll: true,
        icon
    },
    {
        name: 'am-ch-13',
        points: 166,
        color: 'leafGreen',
        colorHex: '#a1a83d',
        content: leaf,
        variant: 'element',
        description: 'Create <em>Leaf</em>, <em>Roll</em>',
        image: 'attack-modifiers/CH/am-ch-13.png',
        roll: true,
        icon
    },
    {
        name: 'am-ch-14',
        points: 167,
        color: 'leafGreen',
        colorHex: '#a1a83d',
        content: leaf,
        variant: 'element',
        description: 'Create <em>Leaf</em>, <em>Roll</em>',
        image: 'attack-modifiers/CH/am-ch-14.png',
        roll: true,
        icon
    },
    {
        name: 'am-ch-15',
        points: 168,
        color: 'leafGreen',
        colorHex: '#a1a83d',
        content: leaf,
        variant: 'element',
        description: 'Create <em>Leaf</em>, <em>Roll</em>',
        image: 'attack-modifiers/CH/am-ch-15.png',
        roll: true,
        icon
    },
    {
        name: 'am-ch-16',
        points: 169,
        color: 'leafGreen',
        colorHex: '#a1a83d',
        content: leaf,
        variant: 'element',
        description: 'Create <em>Leaf</em>, <em>Roll</em>',
        image: 'attack-modifiers/CH/am-ch-16.png',
        roll: true,
        icon
    },
    {
        name: 'am-ch-17',
        points: 170,
        color: 'airGray',
        colorHex: '#a1b0a6',
        content: air,
        variant: 'element',
        description: 'Create <em>Air</em>, <em>Roll</em>',
        image: 'attack-modifiers/CH/am-ch-17.png',
        roll: true,
        icon
    },
    {
        name: 'am-ch-18',
        points: 171,
        color: 'airGray',
        colorHex: '#a1b0a6',
        content: air,
        variant: 'element',
        description: 'Create <em>Air</em>, <em>Roll</em>',
        image: 'attack-modifiers/CH/am-ch-18.png',
        roll: true,
        icon
    },
];
