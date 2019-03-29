const typeDefs =  `
type User {
    id: String!,
    name: String!,
    email: String!,
    friends: [String]
}
type Message {
    text: String!
    from: String!
    to: String!
}
type Query{
    users: [User]
    messages:[Message]
    user(id: ID!): User
    friends(name: String!, email: String!): [String]
}
type Mutation{
    sendMessage(text: String!, from: String!, to: String!): Message
}
type Subscription{
    messageSent: Message
}
`
export default typeDefs;