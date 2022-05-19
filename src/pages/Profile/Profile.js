import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import { Formik } from "formik";
import Button from "../../components/Button/Button";
import { Grid } from "../../lib/style/generalStyles";
import { useState } from "react";
import { profileCard, profileCardParagraph } from "../Profile/ProfileStyle";
import Sidebar from "../../components/Sidebar/Sidebar";

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

const Profile = () => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      <Header isSecondary setIsSidebarOpened={setIsSidebarOpened} />
      <Sidebar
        isSidebarOpened={isSidebarOpened}
        setIsSidebarOpened={setIsSidebarOpened}
      />
      <Section title={"Profile"} isMainSection>
        <Grid>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",

              githubUsername: "",
              zepelinUsername: "",
              activeFacultyYear: "",
              isAdmin: false,
            }}
            validationSchema={Yup.object({
              firstName: Yup.string().required("First Name is required"),
              lastName: Yup.string().required("Last Name is required"),
              email: Yup.string()
                .email("Invalid email address")
                .required("Email Name is required"),

              githubUsername: Yup.string().required(
                "Github username is required"
              ),
              zepelinUsername: Yup.string().required(
                "Zepelin username  is required"
              ),
              activeFacultyYear: Yup.string().required(
                "Active Faculty Year Name is required"
              ),
            })}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
                actions.resetForm({
                  firstName: "",
                  lastName: "",
                  email: "",

                  githubUsername: "",
                  zepelinUsername: "",
                  activeFacultyYear: "",
                  isAdmin: false,
                });
              }, 1000);
            }}
          >
            {(formik) => (
              <Form>
                <FormRow>
                  <Field
                    type="text"
                    name="firstName"
                    placeholder="First name . . ."
                    disabled={formik.isSubmitting}
                    disabled={isToggled == false}
                  />
                  <ErrorMessage component={"div"} name="firstName" />
                </FormRow>

                <FormRow>
                  <Field
                    type="text"
                    name="lastName"
                    placeholder="Last name . . ."
                    disabled={formik.isSubmitting}
                    disabled={isToggled == false}
                  />
                  <ErrorMessage component={"div"} name="lastName" />
                </FormRow>

                <FormRow>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email name . . ."
                    disabled={formik.isSubmitting}
                    disabled={isToggled == false}
                  />
                  <ErrorMessage component={"div"} name="email" />
                </FormRow>

                <FormRow>
                  <Field
                    type="text"
                    name="githubUsername"
                    placeholder="Github Username . . ."
                    disabled={formik.isSubmitting}
                    disabled={isToggled == false}
                  />
                  <ErrorMessage component={"div"} name="githubUsername" />
                </FormRow>

                <FormRow>
                  <Field
                    type="text"
                    name="zepelinUsername"
                    placeholder="Zepelin Username . . ."
                    disabled={formik.isSubmitting}
                    disabled={isToggled == false}
                  />
                  <ErrorMessage component={"div"} name="zepelinUsername" />
                </FormRow>

                <FormRow>
                  <Select
                    id="activeFacultyYear"
                    {...formik.getFieldProps("activeFacultyYear")}
                    disabled={isToggled == false}
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
                {isToggled == false ? (
                  <FormRow></FormRow>
                ) : (
                  <FormRow>
                    <Button modifiers={["heading", "outline"]}>Update</Button>
                  </FormRow>
                )}
              </Form>
            )}
          </Formik>
          <>
            {isToggled == false ? (
              <>
                <profileCard>
                  <profileCardParagraph>zatvoreno</profileCardParagraph>
                </profileCard>
              </>
            ) : (
              <Formik
                initialValues={{
                  oldPassword: "",
                  password: "",
                  passwordConfirmation: "",
                }}
                validationSchema={Yup.object({
                  oldPassword: Yup.string()
                    .min(8, "password must be at least 8 characters long")
                    .required("Email Name is required"),
                  password: Yup.string()
                    .min(8, "password must be at least 8 characters long")
                    .required("Email Name is required"),
                  passwordConfirmation: Yup.string()
                    .test(
                      "password-match",
                      "Password must match",

                      function (value) {
                        return this.parent.password === value;
                      }
                    )
                    .required("Email Name is required"),
                })}
                onSubmit={(values, actions) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                    actions.resetForm({
                      oldPassword: "",

                      password: "",
                      passwordConfirmation: "",
                    });
                  }, 1000);
                }}
              >
                {(formik) => (
                  <Form>
                    <FormRow>
                      <Field
                        type="password"
                        name="oldPassword"
                        placeholder="Password . . ."
                        disabled={formik.isSubmitting}
                      />
                      <ErrorMessage component={"div"} name="password" />
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
                      <Field
                        type="password"
                        name="passwordConfirmation"
                        placeholder="Password confirmation. . ."
                        disabled={formik.isSubmitting}
                      />
                      <ErrorMessage
                        component={"div"}
                        name="passwordConfirmation"
                      />
                    </FormRow>
                    <FormRow>
                      <Button modifiers={["heading", "outline"]}>
                        Submitting
                      </Button>
                    </FormRow>
                  </Form>
                )}
              </Formik>
            )}
          </>
          <button onClick={() => setIsToggled(!isToggled)}>Toggle State</button>
        </Grid>
      </Section>
    </>
  );
};

export default Profile;
