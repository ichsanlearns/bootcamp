import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAuthStore } from "../../store/authStore";
import { useNavigate } from "react-router-dom";

interface LoginFormValues {
  email: string;
  password: string;
}

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too Short!").required("Required"),
});

export default function Login() {
  const { setEmail } = useAuthStore();
  const navigate = useNavigate();
  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values: LoginFormValues) => {
    try {
      const response = await fetch(
        `https://healthyrange-us.backendless.app/api/data/user?where=email%3D'${values.email}'AND%20password%3D'${values.password}'`
      );
      const data = await response.json();

      if (data.length === 0) {
        throw new Error("Invalid email or password");
      }

      setEmail(values.email);
      alert("Login successful");

      navigate("/todo");
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center py-12 px-4 text-white">
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
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
              <button type="submit">Login</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
