import { GraphQLClient } from "graphql-request";

const NEXT_DATOCMS_API_TOKEN = 'd8ed492bd179ff1c66f496fc660cb5'

export function request({ query, variables, preview }) {
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${NEXT_DATOCMS_API_TOKEN}`
    }
  });
  return client.request(query, variables);
}