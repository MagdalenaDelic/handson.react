import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import { Formik } from "formik";
import Button from "../../components/Button/Button";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader";

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
  const [successMessage,setSuccessMessage] = useState(null);
  const [loader, setLoader] = useState(true);
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);
  return (
    <>
      <Header isSecondary setIsSidebarOpened={setIsSidebarOpened} />
      <Sidebar
        isSidebarOpened={isSidebarOpened}
        setIsSidebarOpened={setIsSidebarOpened}
      />

      {loader == true ? (
        <Loader></Loader>
      ) : (
        <Section title={"Register"} isMainSection isCentered>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              passwordConfirmation: "",
              githubUsername: "",
              zeplinUsername: "",
              activeFacultyYear: "",
              isAdmin: false,
            }}
            validationSchema={Yup.object({
              firstName: Yup.string().required(" is required"),
              lastName: Yup.string().required("Last Name is required"),
              email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
              password: Yup.string()
                .min(8, "password must be at least 8 characters long")
                .required("Email is required"),
              passwordConfirmation: Yup.string()
                .test(
                  "password-match",
                  "Password must match",

                  function (value) {
                    return this.parent.password === value;
                  }
                )
                .required("Email is required"),
              githubUsername: Yup.string().required(
                "Github username is required"
              ),
              zeplinUsername: Yup.string().required(
                "Zeplin username  is required"
              ),
              activeFacultyYear: Yup.string().required(
                "Active Faculty Year is required"
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
              registerUser(values).then((res) => {
                actions.setSubmitting(false);
                actions.resetForm({
                  firstName: "",
                  lastName: "",
                  email: "",
                  password: "",
                  passwordConfirmation: "",
                  githubUsername: "",
                  zeplinUsername: "",
                  activeFacultyYear: "",
                  isAdmin: false,
                });
                setSuccessMessage({
                  error: false,
                  message: "User registartion was successfull",
                });
                .catch((err) => {
                  setSuccessMessage({
                    error: true,
                    message: "Error occured, try again",
                  });
                });

                setTimeout(() => {
                  setSuccessMessage(null);
                });
              }, 3000);
            }}
          >
            {(formik) => (
              <Form>
               { successMessage && (
                <FormRow>
                  <FormSuccessMessage isError = {successMessage.error}>{successMessage.message}
                     </FormSuccessMessage>
                </FormRow>
                )};
                <FormRow>
                  <Label>First name </Label>
                  <Field
                    type="text"
                    name="firstName"
                    placeholder="First name . . ."
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component={"div"} name="firstName" />
                </FormRow>

                <FormRow>
                  <Label> Last Name</Label>
                  <Field
                    type="text"
                    name="lastName"
                    placeholder="Last name . . ."
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component={"div"} name="lastName" />
                </FormRow>

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
                  <Label> Password confirmation</Label>
                  <Field
                    type="password"
                    name="passwordConfirmation"
                    placeholder="Password confirmation. . ."
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component={"div"} name="passwordConfirmation" />
                </FormRow>

                <FormRow>
                  <Label>Github Username </Label>
                  <Field
                    type="text"
                    name="githubUsername"
                    placeholder="Github Username . . ."
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component={"div"} name="githubUsername" />
                </FormRow>

                <FormRow>
                  <Label>Zeplin username </Label>
                  <Field
                    type="text"
                    name="zeplinUsername"
                    placeholder="Zeplin Username . . ."
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component={"div"} name="zeplinUsername" />
                </FormRow>

                <FormRow>
                  <Label> Active Faculty Year</Label>
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
                  <Button isOutline isFormButton desabled={formik.isSubmitting}>
                    {formik.isSubmitting ? "Processting . . ." : "Register"}
                  </Button>
                </FormRow>
              </Form>
            )}
          </Formik>
        </Section>
      )}
    </>
  );
};

export default Register;
