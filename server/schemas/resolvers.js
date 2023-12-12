const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // get the logged-in user
    me: async (_, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('savedBooks');
      }
      throw new Error('Not logged in');
    },
  },
  Mutation: {
    // add a user
    addUser: async (_, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    // log in a user
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error("Can't find this user");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new Error('Wrong password!');
      }
      const token = signToken(user);
      return { token, user };
    },
    // save a book
    saveBook: async (_, { bookData }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedBooks: bookData } },
          { new: true, runValidators: true }
        );
        return updatedUser;
      }
      throw new Error('Not logged in');
    },
    // delete a book
    deleteBook: async (_, { bookId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId } } },
          { new: true }
        );
        return updatedUser;
      }
      throw new Error('Not logged in');
    },
  },
};

module.exports = resolvers;