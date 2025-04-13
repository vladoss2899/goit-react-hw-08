import { useId } from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import * as Yup from "yup";

import css from "./LoginForm.module.css";

const RegistrSchema = Yup.object().shape({
  email: Yup.string().email("Must be a valid email").required("Required"),
  password: Yup.string().min(8, "Too Short!").required("Required"),
});

export default function LoginForm() {
  const dispatch = useDispatch();

  const emailFieldId = useId();
  const passwordFieldId = useId();

  const onLogin = (formData, actions) => {
    dispatch(logIn(formData));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={onLogin}
      validationSchema={RegistrSchema}
    >
      <Form className={css.LoginForm}>
        <label htmlFor={emailFieldId}>Email</label>
        <Field
          className={css.inputField}
          type="email"
          name="email"
          id={emailFieldId}
          placeholder="Enter your email"
          autoComplete="off"
        />
        <ErrorMessage className={css.errorMsg} name="email" component="span" />

        <label htmlFor={passwordFieldId}>Password</label>
        <Field
          className={css.inputField}
          type="password"
          name="password"
          id={passwordFieldId}
          placeholder="Enter password"
          autoComplete="current-password"
        />
        <ErrorMessage
          className={css.errorMsg}
          name="password"
          component="span"
        />

        <button className={css.LoginFormBtn} type="submit">
          Click to logIn
        </button>
      </Form>
    </Formik>
  );
}
