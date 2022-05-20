import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import { Formik } from "formik";
import Button from "../../components/Button/Button";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useState, useEffect } from "react";

import * as Yup from "yup";
import {
  Form,
  FormRow,
  Field,
  FieldStyle,
  Select,
  Option,
  ErrorMessage,
  Label,
  FormSuccessMessage,
} from "../../lib/style/generalStyles";
import { registerUser } from "../api/users";

const Register = () => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);

  return (
    <>
      <Header isSecondary setIsSidebarOpened={setIsSidebarOpened} />
      <Sidebar
        isSidebarOpened={isSidebarOpened}
        setIsSidebarOpened={setIsSidebarOpened}
      />
      <Section title={"Register"} isMainSection={true} isCentered={true}>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passwordConfirmed: "",
            githubUsername: "",
            zeplinUsername: "",
            activeFacultyYear: "",
            isAdmin: false,
          }}
          validationSchema={Yup.object({
            firstName: Yup.string().required("First name is required"),
            lastName: Yup.string().required("Last name is required"),
            email: Yup.string()
              .email("E-mail is not valid")
              .required("Email is required"),
            password: Yup.string().min(8).required("Password is required"),
            passwordConfirmed: Yup.string()
              .test(
                "passwords-match",
                "Passwords must match",
                function (value) {
                  return this.parent.password === value;
                }
              )
              .required("Password confirmed is required"),
            githubUsername: Yup.string().required(
              "GitHub username is required"
            ),
            zeplinUsername: Yup.string().required(
              "Zeplin username is required"
            ),
            activeFacultyYear: Yup.string().required(
              "Active faculty year is required"
            ),
          })}
          onSubmit={(values, actions) => {
            const user = {
              first_name: values.firstName,
              last_name: values.lastName,
              email: values.email,
              password: values.password,
              github_username: values.githubUsername,
              zeplin_username: values.zeplinUsername,
              active_faculty_year:
                Number(values.activeFacultyYear) === 0
                  ? null
                  : Number(values.activeFacultyYear),
              is_admin: false,
            };

            registerUser(user)
              .then((res) => {
                actions.setSubmitting(false);
                actions.resetForm({
                  firstName: "",
                  lastName: "",
                  email: "",
                  password: "",
                  passwordConfirmed: "",
                  githubUsername: "",
                  zeplinUsername: "",
                  activeFacultyYear: "",
                  isAdmin: false,
                });

                setSuccessMessage({
                  error: false,
                  massage: "User registration was successful",
                });

                setTimeout(() => {
                  setSuccessMessage(null);
                }, 3000);
              })
              .catch((err) => {
                setSuccessMessage({
                  error: true,
                  massage: "Error occured!",
                });
                actions.setSubmitting(false);
              });
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
                <Label isLeft>First name</Label>
                <Field
                  type="text"
                  name="firstName"
                  placeholder="First name..."
                  disabled={formik.isSubmitting}
                />
                <ErrorMessage component={"div"} name="firstName" />
              </FormRow>
              <FormRow>
                <Label isLeft>Last name</Label>
                <Field
                  type="text"
                  name="lastName"
                  placeholder="Last name..."
                  disabled={formik.isSubmitting}
                />
                <ErrorMessage component={"div"} name="lastName" />
              </FormRow>
              <FormRow>
                <Label isLeft>Email</Label>
                <Field
                  type="email"
                  name="email"
                  placeholder="E-mail ..."
                  disabled={formik.isSubmitting}
                />
                <ErrorMessage component={"div"} name="email" />
              </FormRow>
              <FormRow>
                <Label isLeft>Password</Label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password..."
                  disabled={formik.isSubmitting}
                />
                <ErrorMessage component={"div"} name="password" />
              </FormRow>
              <FormRow>
                <Label isLeft>Password confirmed</Label>
                <Field
                  type="password"
                  name="passwordConfirmed"
                  placeholder="Password confirmed..."
                  disabled={formik.isSubmitting}
                />
                <ErrorMessage component={"div"} name="passwordConfirmed" />
              </FormRow>
              <FormRow>
                <Label isLeft>Github username</Label>
                <Field
                  type="text"
                  name="githubUsername"
                  placeholder="GitHub username..."
                  disabled={formik.isSubmitting}
                />
                <ErrorMessage component={"div"} name="githubUsername" />
              </FormRow>
              <FormRow>
                <Label isLeft>Zeplin username</Label>
                <Field
                  type="text"
                  name="zeplinUsername"
                  placeholder="Zeplin username..."
                  disabled={formik.isSubmitting}
                />
                <ErrorMessage component={"div"} name="zeplinUsername" />
              </FormRow>
              <FormRow>
                <Label isLeft>Active faculty year</Label>
                <Select
                  id="activeFacultyYear"
                  {...formik.getFieldProps("activeFacultyYear")}
                >
                  <Option value="" disabled hidden>
                    Choose an Active faculty year
                  </Option>
                  <Option value="0">Not a student</Option>
                  <Option value="1">1st faculty year</Option>
                  <Option value="2">2nd faculty year</Option>
                  <Option value="3">3rd faculty year</Option>
                  <Option value="4">4th faculty year</Option>
                  <Option value="5">5th faculty year</Option>
                </Select>
                <ErrorMessage component={"div"} name="activeFacultyYear" />
              </FormRow>
              <FormRow>
                <Button
                  isOutline={true}
                  isFormButton={true}
                  disabled={formik.isSubmitting}
                >
                  {formik.isSubmitting ? "Processing..." : "Register"}
                </Button>
              </FormRow>
            </Form>
          )}
        </Formik>
      </Section>
    </>
  );
};
export default Register;
