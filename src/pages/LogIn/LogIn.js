import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import { Formik, yupToFormErrors } from "formik";
import Button from "../../components/Button/Button";
import * as Yup from "yup";
import {
  Form,
  FormRow,
  Field,
  FieldStyle,
  Select,
  Option,
  ErrorMessage,
} from "../../lib/style/generalStyles";

const LogIn = () => {
  return (
    <>
      <Header isSecondary />
      <Section title={"Sign in"} isMainSection isCentered>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Email Name is required"),
            password: Yup.string()
              .min(8, "password must be at least 8 characters long")
              .required("Email Name is required"),
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
                <Field
                  type="email"
                  name="email"
                  placeholder="Email name . . ."
                  disabled={formik.isSubmitting}
                />
                <ErrorMessage component={"div"} name="email" />
              </FormRow>

              <FormRow>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password . . ."
                  disabled={formik.isSubmitting}
                />
                <ErrorMessage component={"div"} name="password" />
              </FormRow>

              <FormRow>
                <Button modifiers={["heading", "outline"]}>Submitting</Button>
              </FormRow>
            </Form>
          )}
        </Formik>
      </Section>
    </>
  );
};

export default LogIn;
