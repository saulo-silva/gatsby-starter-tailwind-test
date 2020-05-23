import React, { useState } from "react";
import { Formik, Form, Field } from 'formik';

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  const [formData, setFormData] = useState({})
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <section>
        <div className="bg-gray-200 border border-gray-300 rounded p-8">
          <pre>{JSON.stringify(formData, null, 2) }</pre>
        </div>
        <Formik
            initialValues={{
              'first-name': '',
              'last-name': '',
              'message': '',
            }}
            onSubmit={values => {
              setFormData(values);
            }}
          >
            <Form className="mx-auto md:w-1/2">
              <p className="mb-8 leading-loose">
                Here is an example of a form built using the official Tailwind CSS
                Custom Forms plugin.{` `}
                <a
                  className="font-bold text-gray-700 no-underline"
                  href="https://github.com/tailwindcss/custom-forms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read the docs
                </a>
                .
              </p>

              <label
                className="block mb-2 text-xs font-bold uppercase"
                htmlFor="first-name"
              >
                First Name
              </label>

              <Field
                className="w-full mb-6 form-input"
                id="first-name"
                name="first-name"
                placeholder="Bill"
                type="text"
              />

              <label
                className="block mb-2 text-xs font-bold uppercase"
                htmlFor="last-name"
              >
                Last Name
              </label>

              <Field
                className="w-full mb-6 form-input"
                id="last-name"
                name="last-name"
                placeholder="Murray"
                type="text"
              />

              <label
                className="block mb-2 text-xs font-bold uppercase"
                htmlFor="message"
              >
                Message
              </label>

              <Field
                component="textarea"
                className="w-full mb-6 form-textarea"
                id="message"
                name="message"
                placeholder="Say something..."
                rows="8"
              />

              <button
                type="submit"
              className="px-4 py-2 text-sm font-bold text-white bg-gray-700 border-b-4 border-gray-800 rounded hover:border-gray-700 hover:bg-gray-600">
                Submit
              </button>
            </Form>
          </Formik>
      </section>
    </Layout>
  );
}

export default ContactPage;
