const typedefs =  `
type login{
    email: String!,
    password: String!,
},
type Query{},
type Mutation {
    login(email: String!, password: String!): String
}
`
export default typedefs;