import React from 'react';
import { gql, graphql } from 'react-apollo';
import { channelsListQuery } from './ChannelsListWithData';

/*
  The mutation returns a channel object, which we can then select fields on, just as with a query. 
  The handleKeyUp function Prints input text to console and clears input field when user hits return (key code 13).
  Wire component up with GraphQL higher order component (HOC) from react-apollo.
  Call the mutate prop of HOC to execute mutation 
  */

const AddChannel = ({ mutate }) => {
  const handleKeyUp = (evt) => {
    if (evt.keyCode === 13) {
      evt.persist();
      mutate({
        variables: { name: evt.target.value },
        refetchQueries: [ { query: channelsListQuery }],
      })
      .then( res => {
        evt.target.value = '';
      });
    }
  };

  return (
    <input
      type="text"
      placeholder="New channel"
      onKeyUp={handleKeyUp}
    />
  );
};

const addChannelMutation = gql`
  mutation addChannel($name: String!) {
    addChannel(name: $name) {
      id
      name
    }
  }
`;


const AddChannelWithMutation = graphql(
  addChannelMutation,
)(AddChannel);

export default AddChannelWithMutation;
