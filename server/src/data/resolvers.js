import { users, messages } from './constants/constants';

const resolvers = {
    Query: {
        users: () => users,
        user: (root, {id}) => users.find( user => user.id == id) ,
        messages: () => messages,
        friends: (root, {id}) => {
            console.log(':::::::::::::::::', user(id));
            const user = users.find( user => user.id == id);
            const friends = user
            return user(id);
        }
    },
    Mutation: {
        sendMessage (root, { text, from, to }, { pubsub }) {
            const new_message = { id: messages.length + 1, text, from, to };
            messages.push(new_message);
            // pubsub.publish('CHAT_CHANNEL', { messageSent: new_message });            
            return new_message;
        }
    }
}

export default resolvers;