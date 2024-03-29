module.exports = {
  Query: {
    names: async () => {
      return ["Fun", "Funny", "Funky"];
    },
  },
  Mutation: {
    addName: async () => {
      return "Name Added";
    },
  },
};
