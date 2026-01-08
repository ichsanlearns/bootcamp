import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAuthStore } from "../../store/authStore";
import { useNavigate } from "react-router";

interface ILoginFormValues {
  email: string;
  password: string;
}

const registerSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too Short!").required("required"),
});

function Login() {
  const { setEmail } = useAuthStore();
  const navigate = useNavigate();
  const initValues: ILoginFormValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values: ILoginFormValues) => {
    try {
      const response = await fetch("");
      const data = await response.json();

      if (data.length === 0) {
        throw new Error("Invalid email or password");
      }
      setEmail(values.email);
      alert("Login Succesful");
      navigate("/");
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

export default Login;
