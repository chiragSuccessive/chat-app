const users = [
    {
        id: '0',
        name: 'deepak',
        email: 'deepak@gmail.com',
        friends: ['2']
    },
    {
        id: '1',
        name: 'chirag',
        email: 'chirag@gmail.com',
        friends: ['0', '2']
    },
    {
        id: '2',
        name: 'trainee',
        email: 'trainee@gmail.com',
        friends: ['0','1']
    },
];
const messages = [
    {text: 'Hello World!', from: 'deepak', to: 'chirag'},
    {text: 'Hey', from: 'chirag', to: 'deepak'}
]
export {users, messages };