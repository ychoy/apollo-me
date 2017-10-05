export const typeDefs = `
type Album {
   id: ID!                # "!" denotes a required field
   name: String
}
# This type specifies the entry points into our API. In this case
# there is only one - "albums" - which returns a list of albums.

type Query {
   albums: [Album]    # "[]" means this is a list of albums
}
`;
