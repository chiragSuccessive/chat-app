import { users, messages } from './constants/constants';
const MESSAGECHANNEL = 'messageChannel';

const resolvers = {
    Query: {
        users: () => users,
        user: (root, {id}) => users.find( user => user.id == id) ,
        messages: () => messages,
        friends: (root, {name, email}) => {
            const user = users.find( user => user.name == name && user.email == email);
            const friendsName = [];
            user.friends.forEach(id => {
                users.forEach(user => {
                    if(user.id === id ) {
                        friendsName.push(user.name);
                    }
                });
            });
            return friendsName;
        }
    },
    Mutation: {
        sendMessage (root, { text, from, to }, { pubsub }) {
            const new_message = { id: messages.length + 1, text, from, to };
            messages.push(new_message);
            pubsub.publish(MESSAGECHANNEL, { messageSent: new_message });            
            return new_message;
        }
    },
    Subscription: {
        messageSent: {
            subscribe: (root, args, { pubsub }) => {
                return pubsub.asyncIterator([MESSAGECHANNEL]);
            }
        }
    }
}

export default resolvers;