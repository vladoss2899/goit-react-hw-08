import { useId } from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import * as Yup from "yup";

import css from "./RegistrationForm.module.css";

const RegistrSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Must be a valid email").required("Required"),
  password: Yup.string().min(8, "Too Short!").required("Required"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = (formData, actions) => {
    dispatch(register(formData));
    console.log(formData);

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={RegistrSchema}
    >
      <Form className={css.RegistrationForm}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field
          className={css.inputField}
          type="text"
          name="name"
          id={nameFieldId}
          placeholder="Name"
        />
        <ErrorMessage className={css.errorMsg} name="name" component="span" />

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

        <button className={css.RegistrationFormBtn} type="submit">
          Click to register
        </button>
      </Form>
    </Formik>
  );
}
