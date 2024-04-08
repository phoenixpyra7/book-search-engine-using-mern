const typeDefs = `#graphql
type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
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
    token: ID!  
    user: User
}

input BookInput {
    bookId: ID!
  authors: [String]!
  description: String
  title: String!
  image: String
  link: String
}

type Query {
    users: [User]
    user(username: String!): User
    me: User
    books(username: String): [Book]
    book(bookId: ID!): Book
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
    userId: ID!,
    bookData: BookInput!
    ): User 
  removeBook(
    userId: ID!,
    bookId: ID!
    ): User
  }
`;

module.exports = typeDefs ;
