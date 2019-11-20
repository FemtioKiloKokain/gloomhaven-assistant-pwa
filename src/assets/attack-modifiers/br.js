const icon = require('@/assets/character-icons/brute.svg');
const pierce3 = require('@/assets/status-icons/pierce-number.svg').replace('$', '3');
const stun = require('@/assets/status-icons/stun.svg');
const disarm = require('@/assets/status-icons/disarm.svg');
const muddle = require('@/assets/status-icons/muddle.svg');
const target = require('@/assets/status-icons/target.svg');
const shield = require('@/assets/shield-self.svg')
const push1 = require('@/assets/status-icons/push-number.svg').replace('$', '1');

export default [
    {
        name: 'am-br-01',
        points: 100,
        image: 'attack-modifiers/BR/am-br-01.png',
        colorHex: '#ce8f46',
        content: pierce3,
        variant: 'status',
        description: '<em>Pierce 3</em>, <em>Roll</em>',
        roll: true,
        icon
    },
    {
        name: 'am-br-02',
        points: 101,
        image: 'attack-modifiers/BR/am-br-02.png',
        colorHex: '#324165',
        content: stun,
        variant: 'status',
        description: '<em>Stun</em>, <em>Roll</em>',
        roll: true,
        icon
    },
    {
        name: 'am-br-03',
        points: 102,
        image: 'attack-modifiers/BR/am-br-03.png',
        colorHex: '#324165',
        content: stun,
        variant: 'status',
        description: '<em>Stun</em>, <em>Roll</em>',
        roll: true,
        icon
    },
    {
        name: 'am-br-04',
        points: 103,
        image: 'attack-modifiers/BR/am-br-04.png',
        colorHex: '#6e7b7f',
        content: disarm,
        variant: 'status',
        description: '<em>Disarm</em>, <em>Roll</em>',
        roll: true,
        icon
    },
    {
        name: 'am-br-05',
        points: 104,
        image: 'attack-modifiers/BR/am-br-05.png',
        colorHex: '#7a5b42', 
        content: muddle,
        variant: 'status',
        description: '<em>Muddle</em>, <em>Roll</em>',
        roll: true,
        icon
    },
    {
        name: 'am-br-06',
        points: 105,
        image: 'attack-modifiers/BR/am-br-06.png',
        colorHex: '#aa1a17',
        content: target,
        variant: 'status',
        description: '<em>Add target</em>, <em>Roll</em>',
        roll: true,
        icon
    },
    {
        name: 'am-br-07',
        points: 106,
        image: 'attack-modifiers/BR/am-br-07.png',
        colorHex: '#aa1a17',
        content: target,
        variant: 'status',
        description: '<em>Add target</em>, <em>Roll</em>',
        roll: true,
        icon
    },
    {
        name: 'am-br-08',
        points: 107,
        image: 'attack-modifiers/BR/am-br-08.png',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: '<em>Shield 1</em>, Attack <em>+1</em>',
        status: shield,
        icon
    },
    {
        name: 'am-br-09',
        points: 108,
        image: 'attack-modifiers/BR/am-br-09.png',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        icon
    },
    {
        name: 'am-br-10',
        points: 109,
        image: 'attack-modifiers/BR/am-br-10.png',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        icon
    },
    {
        name: 'am-br-11',
        points: 110,
        image: 'attack-modifiers/BR/am-br-11.png',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        icon
    },
    {
        name: 'am-br-12',
        points: 111,
        image: 'attack-modifiers/BR/am-br-12.png',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        icon
    },
    {
        name: 'am-br-13',
        points: 112,
        image: 'attack-modifiers/BR/am-br-13.png',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        icon
    },
    {
        name: 'am-br-14',
        points: 113,
        image: 'attack-modifiers/BR/am-br-14.png',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        icon
    },
    {
        name: 'am-br-15',
        points: 114,
        image: 'attack-modifiers/BR/am-br-15.png',
        colorHex: '#729643',
        content: '+3',
        variant: 'standard',
        description: 'Attack <em>+3</em>',
        icon
    },
    {
        name: 'am-br-16',
        points: 115,
        image: 'attack-modifiers/BR/am-br-16.png',
        colorHex: '#565251',
        content: push1,
        variant: 'status',
        description: '<em>Push 1</em>, <em>Roll</em>',
        roll: true,
        icon
    },
    {
        name: 'am-br-17',
        points: 116,
        image: 'attack-modifiers/BR/am-br-17.png',
        colorHex: '#565251',
        content: push1,
        variant: 'status',
        description: '<em>Push 1</em>, <em>Roll</em>',
        roll: true,
        icon
    },
    {
        name: 'am-br-18',
        points: 117,
        image: 'attack-modifiers/BR/am-br-18.png',
        colorHex: '#565251',
        content: push1,
        variant: 'status',
        description: '<em>Push 1</em>, <em>Roll</em>',
        roll: true,
        icon
    },
    {
        name: 'am-br-19',
        points: 118,
        image: 'attack-modifiers/BR/am-br-19.png',
        colorHex: '#565251',
        content: push1,
        variant: 'status',
        description: '<em>Push 1</em>, <em>Roll</em>',
        roll: true,
        icon
    },
    {
        name: 'am-br-20',
        points: 119,
        image: 'attack-modifiers/BR/am-br-20.png',
        colorHex: '#565251',
        content: push1,
        variant: 'status',
        description: '<em>Push 1</em>, <em>Roll</em>',
        roll: true,
        icon
    },
    {
        name: 'am-br-21',
        points: 120,
        image: 'attack-modifiers/BR/am-br-21.png',  
        colorHex: '#565251',
        content: push1,
        variant: 'status',
        description: '<em>Push 1</em>, <em>Roll</em>',
        roll: true,
        icon
    },
    {
        name: 'am-br-22',
        points: 121,
        image: 'attack-modifiers/BR/am-br-22.png',
        colorHex: '#ce8f46',
        content: pierce3,
        variant: 'status',
        description: '<em>Pierce 3</em>, <em>Roll</em>',
        roll: true,
        icon
    },
]