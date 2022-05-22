import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import { Formik } from "formik";
import Button from "../../components/Button/Button";
import * as Yup from "yup";
import Loader from "../../components/Loader/Loader";
import { useState, useEffect } from "react";
import {
  Form,
  FormRow,
  Field,
  FieldStyle,
  Select,
  Option,
  Label,
  ErrorMessage,
  FormSuccessMessage,
} from "../../lib/style/generalStyles";
import { getAllUsers, logInUser } from "../api/users";

const SignIn = () => {
  const [successMessage, setSuccessMessage] = useState(null);
  return (
    <>
      <Header isSecondary />
      <Section title={"Sign in"} isMainSection={true} isCentered={true}>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("E-mail is not valid")
              .required("Email is required"),
            password: Yup.string().min(8).required("Password is required"),
          })}
          onSubmit={async (values, actions) => {
            try {
              const res = await logInUser(values);

              const users = await getAllUsers(res.access_token);

              const user = users.find((user) => user.email === values.email);

              localStorage.setItem("accessToken", res.access_token);
              actions.setSubmitting(false);
              actions.resetForm({
                email: "",
                password: "",
              });

              setSuccessMessage({
                error: false,
                massage: `Hi ${
                  user.first_name + " " + user.last_name
                }, login was successful.`,
              });

              setTimeout(() => {
                setSuccessMessage(null);
              }, 3000);
            } catch (err) {
              setSuccessMessage({
                error: true,
                massage: "Error occured!",
              });
              actions.setSubmitting(false);
            }
          }}
        >
          {(formik) => (
            <Form isCentered>
              {successMessage && (
                <FormRow>
                  <FormSuccessMessage isError={successMessage.error}>
                    {successMessage.massage}
                  </FormSuccessMessage>
                </FormRow>
              )}
              <FormRow>
                <Label>Email</Label>
                <Field
                  type="email"
                  name="email"
                  placeholder="E-mail ..."
                  disabled={formik.isSubmitting}
                />
                <ErrorMessage component={"div"} name="email" />
              </FormRow>
              <FormRow>
                <Label>Password</Label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password..."
                  disabled={formik.isSubmitting}
                />
                <ErrorMessage component={"div"} name="password" />
              </FormRow>

              <FormRow>
                <Button
                  isOutline={true}
                  isFormButton={true}
                  disabled={formik.isSubmitting}
                  isCentered
                >
                  {formik.isSubmitting ? "Processing..." : "Sign in"}
                </Button>
              </FormRow>
            </Form>
          )}
        </Formik>
      </Section>
    </>
  );
};

export default SignIn;
