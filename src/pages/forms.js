import React from "react";
import {Formik, Form, Field} from 'formik';
import Layout from "../components/layout";
import SEO from "../components/seo";

function FormsPage() {

  return (
    <Layout>
      <SEO
        title="Formik"
      />
      <h1>Social Profiles</h1>
      <div className="grid grid-cols-l sm:grid-cols-2 gap-4 rounded-md">
        <Formik
          initialValues={{
            social: {
              facebook: 'facebook',
              twitter: 'twitter',
            },
          }}
          onSubmit={values => {
            // same shape as initial values
            console.log(values);
          }}
        >
          <Form className="border border-solid p-3">
            <h3 className="font-medium text-3xl">Formik</h3>
            <div className="mb-4">
              <label
                className="block mb-2 text-xs font-bold uppercase"
                htmlFor="social.facebook"
              >
                Facebook
              </label>
              <Field name="social.facebook" className="form-input"/>
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-xs font-bold uppercase"
                htmlFor="social.twitter"
              >
                Twitter
              </label>
              <Field name="social.twitter" className="form-input"/>
            </div>
            <button type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit
            </button>
          </Form>
        </Formik>
        <div className="border border-solid p-3 rounded-md">
          <h3 className="font-medium text-3xl">
            aaa
          </h3>
        </div>
      </div>
    </Layout>
  )
}

export default FormsPage