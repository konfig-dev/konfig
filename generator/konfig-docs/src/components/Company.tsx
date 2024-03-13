import Layout from "@theme/Layout";
import React from "react";

type APIProps = {
  company: string;
};

export function Company({ company }: APIProps) {
  return (
    <Layout title={company} description={company}>
      <div></div>
    </Layout>
  );
}
