 const { User } = require("../models");
 const { signToken, AuthenticationError } = require("../utils/auth");



 const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
  //       const userData = await User.findOne({ _id: context.user._id }).select(
  //         "-__v -password"
  //       );
  //       return userData;
  //     }
  //     throw AuthenticationError;
  //   },
  // },
  return User.findOne({ _id: context.user._id }).populate("saveBooks");
}
throw new AuthenticationError("You need to be logged in!");
},
},

  Mutation: {
    // addUser: async (parent, args) => {
    //   const user = await User.create(args);
    //   const token = signToken(user);
    //   return { token, user };
    // },
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      if (!user) {
        throw new AuthenticationError;
      }
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw AuthenticationError;
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },
    saveBook: async (parent, { bookData }, context) => {
    //   if (context.user) {
    //     const updatedUser = await User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $addToSet: { savedBooks: bookData } },
    //       { new: true, runValidators: true }
    //     );
    //     return updatedUser;
    //   }
    //   throw AuthenticationError;
    // },
    const user = await User.findOneAndUpdate(
      userId,
      { $push: { saveBooks: bookData } },
      { new: true }
    );
    return user;
  },
    removeBook: async (parent, { userId, bookId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId: bookId } } },
          { new: true }
        );
        return updatedUser;
      }
      throw AuthenticationError;
    }
  }
};

module.exports = resolvers;