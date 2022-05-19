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
} from "../../lib/style/generalStyles";

const LogIn = () => {
  const [loader, setLoader] = useState(true);

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
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.strinify(values, null, 2));
                actions.setSubmitting(false);
                actions.resetForm({
                  email: "",
                  password: "",
                });
              }, 1000);
            }}
          >
            {(formik) => (
              <Form>
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
