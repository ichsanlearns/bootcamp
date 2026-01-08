import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface IRegisterFormValues {
  email: string;
  password: string;
}

const registerSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too Short!").required("required"),
});

function Register() {
  const initValues: IRegisterFormValues = {
    email: "",
    password: "",
  };
  const handleSubmit = async (values: IRegisterFormValues) => {
    try {
      const response = await fetch(
        "https://healthyrange-us.backendless.app/api/data/user",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));

        throw new Error(errorData.message || "Registration Failed");
      }
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center py-12 px-4">
      <Formik
        initialValues={initValues}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div>
              <label htmlFor="">email</label>
              <Field type="email" name="email" autoComplete="email" />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <label htmlFor="">password</label>
              <Field type="password" name="password" autoComplete="password" />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Register;
