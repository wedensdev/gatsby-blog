import * as React from "react";
import Layout from "../components/Layout";

const AboutPage = () => {
  return (
    <Layout pageTitle={"About Page"}>
      <p>Hi there, This is about page.</p>
    </Layout>
  );
};

export const Head = () => <title>About</title>;
export default AboutPage;
