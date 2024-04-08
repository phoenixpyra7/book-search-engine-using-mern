const typeDefs = `#graphql
type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
}
type UserType {
    _id: ID
    username: String
  }

type Book {
    _id: ID
    bookId: String!
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}

type Auth {
    token: String  
    user: User
}

input BookInput {
  authors: [String!]!
  description: String!
  title: String!
  image: String!
  link: String
}

type Query {
    me: User!
  
}

type Mutation {
    addUser(
    username: String!, 
    email: String!,
    password: String!
    ): Auth 
  login(
    email: String!, 
    password: String!
    ): Auth 
  saveBook(
    bookData: BookInput
    ): User 
  removeBook(
    bookId: ID!
    ): User
  }
`;

module.exports = typeDefs;
