
import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT;
export const getPosts = async () => {
    const query = gql`
    query MyQuery {
        postsConnection {
            edges {
                node {
                    author {
                        bio
                        id
                        name
                        photo {
                        url
                        }
                    }
                    createdAt
                    content {
                        html
                    }
                    slug
                    featuredImage {
                        url
                        height
                        width
                    }
                    title
                    featuredPost
                    excerpt
                    categories {
                        name
                        slug
                    }
                }
            }
        }
      }`
    const result = await request(graphqlAPI, query);
    return result.postsConnection.edges;
}