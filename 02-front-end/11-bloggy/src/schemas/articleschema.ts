import * as Yup from "yup";

export const articleSchema = Yup.object({
  title: Yup.string()
    .required("Title is required")
    .min(4, "Title must be atleast 4 characters"),
  image: Yup.string().required("Image is required").url("Must be a valid URL"),
  content: Yup.string()
    .required("Content is required")
    .min(10, "Content must be at least 10 characters")
    .max(500, "Content cannot be more than 500 characters"),
});
