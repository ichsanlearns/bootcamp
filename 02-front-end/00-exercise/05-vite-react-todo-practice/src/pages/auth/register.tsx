import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface RegisterFormValues {
  email: string;
  password: string;
}

const registerSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too Short!").required("Required"),
});

export default function Register() {
  const initialValues: RegisterFormValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values: RegisterFormValues) => {
    try {
      const response = await fetch(
        "https://healthyrange-us.backendless.app/api/data/user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));

        throw new Error(errorData.message || "Registration failed");
      }
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center py-12 px-4 text-white">
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div>
              <label>Email: </label>
              <Field type="email" name="email" autoComplete="email" />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <label>Password: </label>
              <Field type="password" name="password" autoComplete="password" />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <button type="submit">Register</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
