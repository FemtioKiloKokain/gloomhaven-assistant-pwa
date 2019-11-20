const icon = require('@/assets/character-icons/quartermaster.svg');
const muddle = require('@/assets/status-icons/muddle.svg');
const stun = require('@/assets/status-icons/stun.svg');
const target = require('@/assets/status-icons/target.svg');
const refresh = require('@/assets/general-icons/refresh.svg');
const pierce3 = require('@/assets/status-icons/pierce-number.svg').replace('$', '3');

export default [
    {
        name: 'am-qm-01',
        points: 272,
        image: 'attack-modifiers/QM/am-qm-01.png',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        roll: true,
        icon
    },
    {
        name: 'am-qm-02',
        points: 273,
        image: 'attack-modifiers/QM/am-qm-02.png',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        roll: true,
        icon
    },
    {
        name: 'am-qm-03',
        points: 274,
        image: 'attack-modifiers/QM/am-qm-03.png',
        colorHex: '#7a5b42',
        content: muddle,
        variant: 'status',
        description: '<em>Muddle</em>, <em>Roll</em>',
        icon
    },
    {
        name: 'am-qm-04',
        points: 275,
        image: 'attack-modifiers/QM/am-qm-04.png',
        colorHex: '#7a5b42',
        content: muddle,
        variant: 'status',
        description: '<em>Muddle</em>, <em>Roll</em>',
        roll: true,
        icon
    },
    {
        name: 'am-qm-05',
        points: 276,
        image: 'attack-modifiers/QM/am-qm-05.png',
        colorHex: '#7a5b42',
        content: muddle,
        variant: 'status',
        description: '<em>Muddle</em>, <em>Roll</em>',
        roll: true,
        icon
    },
    {
        name: 'am-qm-06',
        points: 277,
        image: 'attack-modifiers/QM/am-qm-06.png',
        colorHex: '#ce8f46',
        content: pierce3,
        variant: 'status',
        description: '<em>Pierce 3</em>, <em>Roll</em>',
        roll: true,
        icon
    },
    {
        name: 'am-qm-07',
        points: 278,
        image: 'attack-modifiers/QM/am-qm-07.png',
        colorHex: '#ce8f46',
        content: pierce3,
        variant: 'status',
        description: '<em>Pierce 3</em>, <em>Roll</em>',
        roll: true,
        icon
    },
    {
        name: 'am-qm-08',
        points: 279,
        image: 'attack-modifiers/QM/am-qm-08.png',
        colorHex: '#324165',
        content: stun,
        variant: 'status',
        description: '<em>Stun</em>, <em>Roll</em>',
        roll: true,
        icon
    },
    {
        name: 'am-qm-09',
        points: 280,
        image: 'attack-modifiers/QM/am-qm-09.png',
        colorHex: '#aa1a17',
        content: target,
        variant: 'status',
        description: '<em>Add target</em>, <em>Roll</em>',
        roll: true,
        icon
    },
    {
        name: 'am-qm-10',
        points: 281,
        image: 'attack-modifiers/QM/am-qm-10.png',
        colorHex: '#e16365',
        content: refresh,
        variant: 'refresh',
        description: '<em>Refresh</em>',
        icon
    },
    {
        name: 'am-qm-11',
        points: 282,
        image: 'attack-modifiers/QM/am-qm-11.png',
        colorHex: '#e16365',
        content: refresh,
        variant: 'refresh',
        description: '<em>Refresh</em>',
        icon
    },
    {
        name: 'am-qm-12',
        points: 283,
        image: 'attack-modifiers/QM/am-qm-12.png',
        colorHex: '#e16365',
        content: refresh,
        variant: 'refresh',
        description: '<em>Refresh</em>',
        icon
    },
    {
        name: 'am-qm-13',
        points: 284,
        image: 'attack-modifiers/QM/am-qm-13.png',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        icon
    },
    {
        name: 'am-qm-14',
        points: 285,
        image: 'attack-modifiers/QM/am-qm-14.png',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        icon
    },
    {
        name: 'am-qm-15',
        points: 286,
        image: 'attack-modifiers/QM/am-qm-15.png',
        colorHex: '#729643',
        content: '+2',
        variant: 'standard',
        description: 'Attack <em>+2</em>',
        icon
    },
    {
        name: 'am-qm-16',
        points: 287,
        image: 'attack-modifiers/QM/am-qm-16.png',
        colorHex: '#729643',
        content: '+2',
        variant: 'standard',
        description: 'Attack <em>+2</em>',
        icon
    },
    {
        name: 'am-qm-17',
        points: 288,
        image: 'attack-modifiers/QM/am-qm-17.png',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        roll: true,
        icon
    },
    {
        name: 'am-qm-18',
        points: 289,
        image: 'attack-modifiers/QM/am-qm-18.png',
        colorHex: '#729643',
        content: '+1',
        variant: 'standard',
        description: 'Attack <em>+1</em>',
        roll: true,
        icon
    },
];
