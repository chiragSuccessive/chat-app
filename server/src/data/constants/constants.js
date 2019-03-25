const users = [
    {
        id: '0',
        name: 'deepak',
        friends: ['2']
    },
    {
        id: '1',
        name: 'tdsfrainer@gmail.com',
        friends: ['0', '2']
    },
    {
        id: '2',
        name: 'traidsfner@gmail.com',
        friends: ['0','1']
    },
];
const messages = [
    {text: 'Hello World!', from: '0', to: '1'},
    {text: 'Hey', from: '1', to: '2'}
]
export {users, messages };