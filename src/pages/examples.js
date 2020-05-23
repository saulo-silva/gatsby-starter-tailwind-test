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
        <p>sss sgfdss asdf sadf ads fasdf ads fasdf asd fa</p>
      </SectionComponent>

      <SectionComponent title={"Dois"}>
        <p>Teste de conteúdo</p>
      </SectionComponent>

      <div className="flex content-between pt-16 pb-4 flex-wrap sm:h-64 min-h-full bg-blue-500 m-auto max-w-screen-md my-8 px-4 text-white border-l-8 border-blue-800 rounded-sm">
        <div className="w-full p-2">
          <h3 className="mb-4">Qual o seu nome?</h3>
          <input
            className="w-full bg-white text-gray-900 placeholder-gray-600 rounded-none form-input"
            id="first-name"
            placeholder="Digite seu nome"
            type="text"
          />
        </div>
        <div className="w-full text-right">
          <button className="bg-orange-500 hover:bg-orange-600 hover:text-white font-bold py-2 px-4 rounded-full">
            Avançar
          </button>
        </div>
      </div>

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

export default ExamplesPage;
