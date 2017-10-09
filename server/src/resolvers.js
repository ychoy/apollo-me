const channels = [{
  id: '1',
  name: 'libraries',
  messages: [{
    id: '1',
    text: 'poetry reading',
  }, {
    id: '2',
    text: 'book signing',
  }]
}, {
  id: '2',
  name: 'parks',
  messages: [{
    id: '3',
    text: 'yoga at lunch?',
  }, {
    id: '4',
    text: 'lets play soccer',
  }]
}];
let nextId = 3;
let nextMessageId = 5;

export const resolvers = {
  Query: {
    channels: () => {
      return channels;
    },
  },
  Mutation: {
    addChannel: (root, args) => {
      const newChannel = { id: String(nextId++), messages: [], name: args.name };
      channels.push(newChannel);
      return newChannel;
    },
  },
};
