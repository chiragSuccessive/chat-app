import bcrypt from 'bcrypt';
import users from './constants/constants';
// import * as jwt from 'jsonwebtoken';

const isUserPresent = (email) => {
    let present = false;
    users.forEach( user => {
        if(user.email === email) {
            present = true;
        }
    })
    return present;
}
const getUserByEmail = (email) => {
    let oneUser;
    users.forEach( user => {
        if(user.email === email) {
            oneUser = user;
        }
    })
    return user;
}
const resolvers = {
    Query: {},
    Mutation: {
        async login(_, {email, password}) {
            if(!isUserPresent(email)) {
                throw new Error('No user with that email');
            }
            const user = getUserByEmail(email);
            const valid = await bcrypt.compare(password, user.password);
            if (!valid) {
                throw new Error('Incorrect password');
            }
            console.log('-::::::::::IN RESOLVER');
            
            // return token
        }
    },
}

export default resolvers;