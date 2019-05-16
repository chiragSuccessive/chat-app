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
type MovieDetail {
    title: String
    year: Int
    rated: String,
    runtime: Int,
    countries: [String]!
    genres: [String]!
    directors: [String]!
    actors: [String]!
    plot: String
    poster: String
    imdb: String
}
type Query{
    users: [User]
    messages:[Message]
    user(id: ID!): User
    friends(name: String!, email: String!): [String]
    search(text: String!): [MovieDetail]
}
type Mutation{
    sendMessage(text: String!, from: String!, to: String!): Message
    addMovie(title: String!, actors: [String]!, countries: [String]!): MovieDetail
s}
type Subscription{
    messageSent: Message
}
`
export default typeDefs;