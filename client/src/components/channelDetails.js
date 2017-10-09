/* check if the query is loading (data.loading), 
  then check to make sure that there is no error (data.error), 
  and finally render the channel name and MessagesList 
 */

const ChannelDetails = ({ data: {loading, error, channel }, match }) => {
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  if(channel === null){
    return <NotFound />
  }
  return (<div>
      <div className="channelName">
        {channel.name}
      </div>
      <MessageList messages={channel.messages}/>
    </div>);
}

export const channelDetailsQuery = gql`
  query ChannelDetailsQuery($channelId : ID!) {
    channel(id: $channelId) {
      id
      name
      messages {
        id
        text
      }
    }
  }
`;

// wrap the component with the channelDetails query, and export it
export default (graphql(channelDetailsQuery, {
  options: (props) => ({
    variables: { channelId: props.match.params.channelId },
  }),
})(ChannelDetails));