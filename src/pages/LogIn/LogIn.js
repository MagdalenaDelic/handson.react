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

const LogIn = () => {
  const [loader, setLoader] = useState(true);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <>
      <Header isSecondary />
      {loader == true ? (
        <Loader></Loader>
      ) : (
        <Section title={"Sign in"} isMainSection isCentered>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Email  is required"),
              password: Yup.string()
                .min(8, "password must be at least 8 characters long")
                .required("Email  is required"),
            })}
            onSubmit={async (values, actions) => {
              try {
                const res = await logInUser(values); //isto ko i then
                const users = await getAllUsers(res.access_token);
                const user = users.find((user) => users.email === values.email);

                localStorage.setItem("accessToken", res.access_token);
                actions.setSubmitting(false);
                actions.resetForm({
                  email: "",
                  password: "",
                });
                setSuccessMessage({
                  error: false,
                  message: `Hi ${
                    user.first_name + " " + user.last_name
                  }, login was successfull.`,
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
              <Form>
                {successMessage && (
                  <FormRow>
                    <FormSuccessMessage isError={successMessage.error}>
                      {successMessage.massage}
                    </FormSuccessMessage>
                  </FormRow>
                )}
                <FormRow>
                  <Label> E-mail</Label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email . . ."
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component={"div"} name="email" />
                </FormRow>

                <FormRow>
                  <Label> Password</Label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password . . ."
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component={"div"} name="password" />
                </FormRow>

                <FormRow>
                  <Button isOutline isFormButton>
                    Submitting
                  </Button>
                </FormRow>
              </Form>
            )}
          </Formik>
        </Section>
      )}
      ;
    </>
  );
};

export default LogIn;
