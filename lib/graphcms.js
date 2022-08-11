import { GraphQLClient, gql } from "graphql-request";

const graphcms = new GraphQLClient(
  "https://api-us-west-2.hygraph.com/v2/cl5t3r73o1y6b01ukchus83jv/master"
);

export async function getAllPostsWithSlug() {
  const QUERY_PATHS = gql`
    query MyQuery {
      blogs {
        slug
      }
    }
  `;

  const { blogs } = await graphcms.request(QUERY_PATHS);

  return blogs;
}

export async function getPostDataBySlug(slug) {
  const QUERY = gql`
  query MyQuery() {
    blog(where: {slug: "${slug}"}) {
      content {
        html
      }
      cover {
        url
      }
      date
      title
    }
  }
`;

  const { blog } = await graphcms.request(QUERY);

  return blog;
}
