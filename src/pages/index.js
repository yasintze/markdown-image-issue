import React from "react";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  const { allMarkdownRemark } = data;

  return (
    <div>
      <h1>Index Page</h1>
      <hr />
      <div>
        {allMarkdownRemark.edges.map(({ node }) => (
          <div>
            <h5>{`Name: ${node.frontmatter?.title}`}</h5>
            <h5>{`Description: ${node.frontmatter?.description}`}</h5>
            <h5>{`Image: ${node.frontmatter?.featuredImage}`}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            description
            featuredImage
          }
        }
      }
    }
  }
`;

export default IndexPage;
