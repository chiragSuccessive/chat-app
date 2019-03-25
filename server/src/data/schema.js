const typeDefs =  `
type User {
    id: String!,
    name: String!,
    email: String!,
    friends: [ID]
}
type Message {
    text: String!
    from: String!
    to: String!
}
type Query{
    users: [User]
    messages: [Message] 
    user(id: ID!): User
    friends(id: ID!): [String]!
}
type Mutation{
    sendMessage(text: String!, from: String!, to: String!): Message
}
`
export default typeDefs;