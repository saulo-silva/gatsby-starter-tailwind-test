import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import SectionComponent from "../components/SectionComponent";

function ExamplesPage() {

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Examples"
      />


      <SectionComponent title={"Teste"}>
        <p>sss sgfdss</p>
        <p>sss sgfdss</p>
        <p>sss sgfdss</p>
        <p>sss sgfdss</p>
        <p>sss sgfdss</p>
        <p>sss sgfdss</p>
        <p>sss sgfdss</p>
        <p>sss sgfdss</p>
        <p>sss sgfdss</p>
        <p>sss sgfdss</p>
      </SectionComponent>

      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2 border border-gray-300 px-8 py-2">
          <input
            className="w-full form-input"
            id="first-name"
            placeholder="Bill"
            type="text"
          />
        </div>
        <div className="w-full sm:w-1/2 h-auto bg-gray-500 h-12 px-8 py-2">
          xxx

        </div>
      </div>
    </Layout>
  );
}

export default ExamplesPage
