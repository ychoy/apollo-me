const channels = 
[{
  id: 1,
  name: 'libraries',
  messages: [{
    id: '2',
    text: 'Dr. Martin Luther King Jr. Library has an open data workshop to use open data to solve problems',
  }]
}, {
  id: 2,
  name: 'parks',
  messages: [{
    id: '1',
    text: 'Yoga in the park at lunch?',
  }]
}];

let nextId = 3;

export const resolvers = {
  Query: {
    channels: () => {
      return channels;
    },
    channel: (root, { id }) => {
      return channels.find(channel => channel.id === id);
    },
  },
  Mutation: {
    addChannel: (root, args) => {
      const newChannel = { id: nextId++, name: args.name };
      channels.push(newChannel);
      return newChannel;
    },
  },
};
