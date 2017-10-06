const channels = [{
  id: 1,
  name: 'libraries',
}, {
  id: 2,
  name: 'parks',
}];

export const resolvers = {
  Query: {
    channels: () => {
      return channels;
    },
  },
};
