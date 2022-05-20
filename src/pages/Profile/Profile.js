import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import { Formik } from "formik";
import Button from "../../components/Button/Button";
import { GridSecondary } from "../../lib/style/generalStyles";
import { useState, useEffect } from "react";
// import { profileCard, profileCardParagraph } from "../Profile/ProfileStyle";
import Sidebar from "../../components/Sidebar/Sidebar";
import Loader from "../../components/Loader/Loader";
import * as Yup from "yup";
import {
  Form,
  FormRow,
  Field,
  Label,
  FieldStyle,
  Select,
  Option,
  ErrorMessage,
  ProfileCard,
  ProfileCardParagraph,
  ProfileCardTitle,
} from "../../lib/style/generalStyles";

const Profile = () => {
  const [loader, setLoader] = useState(true);
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

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
        <Section title={"Profile"} isMainSection>
          <Button isOutline isRight onClick={() => setIsToggled(!isToggled)}>
            {isToggled == true ? "cancel" : "edit"}
          </Button>

          <GridSecondary>
            <Formik
              initialValues={{
                firstName: "Magdalena",
                lastName: "Delić",
                email: "magdalena.delic1@gmail.com",
                githubUsername: "magdalena1",
                zeplinUsername: "magdalena2",
                activeFacultyYear: 2,
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
                zeplinUsername: Yup.string().required(
                  "Zeplin username  is required"
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
                    zeplinUsername: "",
                    activeFacultyYear: "",
                    isAdmin: false,
                  });
                }, 1000);
              }}
            >
              {(formik) => (
                <Form>
                  <FormRow>
                    <Label>First name:</Label>
                    <Field
                      label="First Name"
                      type="text"
                      name="firstName"
                      placeholder="First name . . ."
                      disabled={formik.isSubmitting || isToggled == false}
                    />
                    <ErrorMessage component={"div"} name="firstName" />
                  </FormRow>

                  <FormRow>
                    <Label>Last name:</Label>
                    <Field
                      type="text"
                      name="lastName"
                      placeholder="Last name . . ."
                      disabled={formik.isSubmitting || isToggled == false}
                    />
                    <ErrorMessage component={"div"} name="lastName" />
                  </FormRow>

                  <FormRow>
                    <Label>E-mail:</Label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email name . . ."
                      disabled={formik.isSubmitting || isToggled == false}
                    />
                    <ErrorMessage component={"div"} name="email" />
                  </FormRow>

                  <FormRow>
                    <Label>Github username:</Label>
                    <Field
                      type="text"
                      name="githubUsername"
                      placeholder="Github username . . ."
                      disabled={formik.isSubmitting || isToggled == false}
                    />
                    <ErrorMessage component={"div"} name="githubUsername" />
                  </FormRow>

                  <FormRow>
                    <Label>Zeplin username:</Label>
                    <Field
                      type="text"
                      name="zeplinUsername"
                      placeholder="Zeplin username . . ."
                      disabled={formik.isSubmitting || isToggled == false}
                    />
                    <ErrorMessage component={"div"} name="zeplinUsername" />
                  </FormRow>

                  <FormRow>
                    <Label>Active Faculty Year:</Label>
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
                      <Button
                        isOutline
                        isHeading
                        desabled={formik.isSubmitting}
                      >
                        {formik.isSubmitting ? "Processting . . ." : "Update"}
                      </Button>
                    </FormRow>
                  )}
                </Form>
              )}
            </Formik>
            <>
              {isToggled == false ? (
                <ProfileCard>
                  <ProfileCardTitle>Password reset</ProfileCardTitle>
                  <ProfileCardParagraph>
                    In oreder to reset password, click on Edit button.
                  </ProfileCardParagraph>
                </ProfileCard>
              ) : (
                <ProfileCard>
                  <ProfileCardTitle>Password reset</ProfileCardTitle>
                  <Formik
                    initialValues={{
                      oldPassword: "",
                      password: "",
                      passwordConfirmation: "",
                    }}
                    validationSchema={Yup.object({
                      oldPassword: Yup.string().required(
                        "Old password is required"
                      ),

                      password: Yup.string()
                        .min(8, "password must be at least 8 characters long")
                        .required("New password is required"),
                      passwordConfirmation: Yup.string()
                        .test(
                          "password-match",
                          "Password must match",

                          function (value) {
                            return this.parent.password === value;
                          }
                        )
                        .required("Password confirmation is required"),
                    })}
                    onSubmit={(values, actions) => {
                      setTimeout(() => {
                        alert("Password updated successfully");
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
                          <Label> Old password</Label>
                          <Field
                            type="password"
                            name="oldPassword"
                            placeholder="old password . . ."
                            disabled={formik.isSubmitting}
                          />
                          <ErrorMessage component={"div"} name="oldPassword" />
                        </FormRow>

                        <FormRow>
                          <Label> New password</Label>
                          <Field
                            type="password"
                            name="password"
                            placeholder="New password . . ."
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
                          <ErrorMessage
                            component={"div"}
                            name="passwordConfirmation"
                          />
                        </FormRow>

                        <FormRow>
                          <Button
                            isOutline
                            isFormButton
                            desabled={formik.isSubmitting}
                          >
                            {formik.isSubmitting
                              ? "Processting . . ."
                              : "Update password"}
                          </Button>
                        </FormRow>
                      </Form>
                    )}
                  </Formik>
                </ProfileCard>
              )}
            </>
          </GridSecondary>
        </Section>
      )}
      ;
    </>
  );
};

export default Profile;
