import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import type { IArticle } from "../types/articletype";

import { articleSchema } from "../schemas/articleschema";

function CreateFormikPage() {
  const [isLoading, setIsLoading] = useState(false);

  const initialValues: IArticle = {
    title: "",
    image: "",
    content: "",
  };

  async function handleSubmit(values: IArticle) {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://healthyrange-us.backendless.app/api/data/articles",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(values),
        }
      );

      if (response.ok) {
        alert("Congratulations, new article craeted!");
      } else {
        alert("Failed, Please check your input");
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
      alert("Failed to created new article. Please try again after 5 minutes");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main>
      <h1>Create New Article</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={articleSchema}
      >
        {() => (
          <Form>
            <label htmlFor="title">Title</label>
            <Field id="title" name="title" type="text" />
            <ErrorMessage
              name="title"
              component="p"
              className="text-red-500 inline-block"
            />

            <label htmlFor="image">Image</label>
            <Field id="image" name="image" type="text" />
            <ErrorMessage name="image" component="p" className="text-red-500" />

            <label htmlFor="content">Content</label>
            <Field id="content" name="content" type="text" />
            <ErrorMessage
              name="content"
              component="p"
              className="text-red-500"
            />

            <button type="submit" disabled={isLoading}>
              {isLoading ? "Saving..." : "Create Article"}
            </button>
          </Form>
        )}
      </Formik>
    </main>
  );
}

export default CreateFormikPage;
