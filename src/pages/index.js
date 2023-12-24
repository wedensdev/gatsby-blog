import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle={"Home Page"}>
      <p>I am making this by following</p>
      <StaticImage
        alt="large"
        src="https://www.stockvault.net/data/2007/03/01/100489/preview16.jpg"
      />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
