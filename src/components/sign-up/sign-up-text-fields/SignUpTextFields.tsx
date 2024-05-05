import { FC } from "react";

import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import { Button, InputAdornment, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { TTextFields, TButton } from "../../../types";
import { useFormik } from "formik";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { theme } from "../../../theme";

type Input =
    | "email"
    | "password"
    | "passwordconfirmation"
    | "username"
    | "firstname"
    | "lastname";

interface Props {
    textfieldType: TTextFields;
    buttonType: TButton;
    isIcon: boolean;
    input: Input[];
}

const validationSchema = (t: any, input: string[]) =>
    yup.object({
        ...(input.includes("firstname") && {
            firstname: yup
                .string()
                .matches(
                    /^[a-zA-Z]*$/,
                    t("auth.signupTextfiealds.validFirstName")
                )
                .required(t("auth.signupTextfiealds.requiredFirstName")),
        }),
        ...(input.includes("lastname") && {
            lastname: yup
                .string()
                .matches(
                    /^[a-zA-Z]*$/,
                    t("auth.signupTextfiealds.validLastName")
                )
                .required(t("auth.signupTextfiealds.requiredLastName")),
        }),
        ...(input.includes("username") && {
            username: yup
                .string()
                .required(t("auth.signupTextfiealds.requiredUsername")),
        }),
        ...(input.includes("email") && {
            email: yup
                .string()
                .email(t("auth.signupTextfiealds.validEmail"))
                .required(t("auth.signupTextfiealds.requiredEmail")),
        }),
        ...(input.includes("password") && {
            password: yup
                .string()
                .required(t("auth.signupTextfiealds.requiredPassword"))
                .min(8, t("auth.signupTextfiealds.least8Characters"))
                .matches(/[A-Z]/, t("auth.signupTextfiealds.uppercasePassword"))
                .matches(/[a-z]/, t("auth.signupTextfiealds.lowercasePassword"))
                .matches(/[0-9]/, t("auth.signupTextfiealds.numberPassword"))
                .matches(
                    /[!@#$&*]/,
                    t("auth.signupTextfiealds.symbolPassword")
                ),
        }),
        ...(input.includes("passwordconfirmation") && {
            passwordconfirmation: yup
                .string()
                .oneOf(
                    [yup.ref("password")],
                    t("auth.signupTextfiealds.matchPassword")
                )
                .required(t("auth.signupTextfiealds.requiredConfirmation")),
        }),
    });

const SignUpTextFields: FC<Props> = (props) => {
    const { t } = useTranslation();

    const translatedEmail: string = t("auth.signupTextfiealds.email");
    const translatedPassword: string = t("auth.signupTextfiealds.password");
    const translatedPasswordConfirmation: string = t(
        "auth.signupTextfiealds.passwordConfirmation"
    );
    const translatedFirstName: string = t("auth.signupTextfiealds.firstName");
    const translatedLastName: string = t("auth.signupTextfiealds.lastName");
    const translatedUsername: string = t("auth.signupTextfiealds.username");

    const initialValues: { [key: string]: string } = {};
    props.input.forEach((name) => {
        initialValues[name.toLowerCase()] = "";
    });

    const formik = useFormik({
        initialValues,
        validationSchema: validationSchema(t, props.input),
        onSubmit: (values) => {
            console.log(values);
        },
    });
    return (
        <>
            <Grid
                component={"form"}
                onSubmit={formik.handleSubmit}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {props.input.includes("firstname") &&
                props.input.includes("lastname") ? (
                    <Grid container spacing={2}>
                        <Grid xxs={6} sx={{ mt: theme.spacing(6) }}>
                            <TextField
                                sx={{ width: theme.spacing(15.5) }}
                                variant={props.textfieldType}
                                type="text"
                                name="firstname"
                                id="firstname"
                                placeholder={translatedFirstName}
                                value={formik.values.firstname}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={
                                    formik.touched.firstname &&
                                    Boolean(formik.errors.firstname)
                                }
                                helperText={
                                    formik.touched.firstname &&
                                    formik.errors.firstname
                                }
                                InputProps={
                                    props.isIcon
                                        ? {
                                              startAdornment: (
                                                  <InputAdornment position="start">
                                                      <LockIcon />
                                                  </InputAdornment>
                                              ),
                                          }
                                        : undefined
                                }
                            />
                        </Grid>
                        <Grid xxs={6} sx={{ mt: theme.spacing(6) }}>
                            <TextField
                                sx={{ width: theme.spacing(15.5) }}
                                variant={props.textfieldType}
                                type="text"
                                name="lastname"
                                id="lastname"
                                placeholder={translatedLastName}
                                value={formik.values.lastname}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={
                                    formik.touched.lastname &&
                                    Boolean(formik.errors.lastname)
                                }
                                helperText={
                                    formik.touched.lastname &&
                                    formik.errors.lastname
                                }
                                InputProps={
                                    props.isIcon
                                        ? {
                                              startAdornment: (
                                                  <InputAdornment position="start">
                                                      <LockIcon />
                                                  </InputAdornment>
                                              ),
                                          }
                                        : undefined
                                }
                            />
                        </Grid>
                    </Grid>
                ) : (
                    <>
                        {props.input.includes("firstname") && (
                            <Grid sx={{ mt: theme.spacing(6) }}>
                                <TextField
                                    sx={{ width: theme.spacing(35) }}
                                    variant={props.textfieldType}
                                    id="firstname"
                                    name="firstname"
                                    type="text"
                                    placeholder={translatedFirstName}
                                    value={formik.values.firstname}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={
                                        formik.touched.firstname &&
                                        Boolean(formik.errors.firstname)
                                    }
                                    helperText={
                                        formik.touched.firstname &&
                                        formik.errors.firstname
                                    }
                                    InputProps={
                                        props.isIcon
                                            ? {
                                                  startAdornment: (
                                                      <InputAdornment position="start">
                                                          <PersonIcon />
                                                      </InputAdornment>
                                                  ),
                                              }
                                            : undefined
                                    }
                                />
                            </Grid>
                        )}

                        {props.input.includes("lastname") && (
                            <Grid sx={{ mt: theme.spacing(6) }}>
                                <TextField
                                    sx={{ width: theme.spacing(35) }}
                                    variant={props.textfieldType}
                                    id="lastname"
                                    name="lastname"
                                    type="text"
                                    placeholder={translatedLastName}
                                    value={formik.values.lastname}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={
                                        formik.touched.lastname &&
                                        Boolean(formik.errors.lastname)
                                    }
                                    helperText={
                                        formik.touched.lastname &&
                                        formik.errors.lastname
                                    }
                                    InputProps={
                                        props.isIcon
                                            ? {
                                                  startAdornment: (
                                                      <InputAdornment position="start">
                                                          <PersonIcon />
                                                      </InputAdornment>
                                                  ),
                                              }
                                            : undefined
                                    }
                                />
                            </Grid>
                        )}
                    </>
                )}

                {props.input.includes("username") && (
                    <Grid sx={{ mt: theme.spacing(1) }}>
                        <TextField
                            sx={{ width: theme.spacing(35) }}
                            variant={props.textfieldType}
                            id="username"
                            type="text"
                            name="username"
                            placeholder={translatedUsername}
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                                formik.touched.username &&
                                Boolean(formik.errors.username)
                            }
                            helperText={
                                formik.touched.username &&
                                formik.errors.username
                            }
                            InputProps={
                                props.isIcon
                                    ? {
                                          startAdornment: (
                                              <InputAdornment position="start">
                                                  <PersonIcon />
                                              </InputAdornment>
                                          ),
                                      }
                                    : undefined
                            }
                        />
                    </Grid>
                )}
                {props.input.includes("email") && (
                    <Grid sx={{ mt: theme.spacing(1) }}>
                        <TextField
                            sx={{ width: theme.spacing(35) }}
                            variant={props.textfieldType}
                            id="email"
                            type="email"
                            name="email"
                            placeholder={translatedEmail}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                                formik.touched.email &&
                                Boolean(formik.errors.email)
                            }
                            helperText={
                                formik.touched.email && formik.errors.email
                            }
                            InputProps={
                                props.isIcon
                                    ? {
                                          startAdornment: (
                                              <InputAdornment position="start">
                                                  <EmailIcon />
                                              </InputAdornment>
                                          ),
                                      }
                                    : undefined
                            }
                        />
                    </Grid>
                )}

                {props.input.includes("password") && (
                    <Grid sx={{ mt: theme.spacing(1) }}>
                        <TextField
                            sx={{ width: theme.spacing(35) }}
                            variant={props.textfieldType}
                            type="password"
                            id="password"
                            name="password"
                            placeholder={translatedPassword}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                                formik.touched.password &&
                                Boolean(formik.errors.password)
                            }
                            helperText={
                                formik.touched.password &&
                                formik.errors.password
                            }
                            InputProps={
                                props.isIcon
                                    ? {
                                          startAdornment: (
                                              <InputAdornment position="start">
                                                  <LockIcon />
                                              </InputAdornment>
                                          ),
                                      }
                                    : undefined
                            }
                        />
                    </Grid>
                )}
                {props.input.includes("passwordconfirmation") && (
                    <Grid sx={{ mt: theme.spacing(1) }}>
                        <TextField
                            sx={{ width: theme.spacing(35) }}
                            variant={props.textfieldType}
                            type="password"
                            name="passwordconfirmation"
                            id="passwordconfirmation"
                            placeholder={translatedPasswordConfirmation}
                            value={formik.values.passwordconfirmation}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                                formik.touched.passwordconfirmation &&
                                Boolean(formik.errors.passwordconfirmation)
                            }
                            helperText={
                                formik.touched.passwordconfirmation &&
                                formik.errors.passwordconfirmation
                            }
                            InputProps={
                                props.isIcon
                                    ? {
                                          startAdornment: (
                                              <InputAdornment position="start">
                                                  <LockIcon />
                                              </InputAdornment>
                                          ),
                                      }
                                    : undefined
                            }
                        />
                    </Grid>
                )}
                <Grid sx={{ mt: theme.spacing(3) }}>
                    <Button
                        sx={{ width: theme.spacing(35) }}
                        variant={props.buttonType}
                        type="submit"
                    >
                        {t("auth.signupTextfiealds.save")}
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default SignUpTextFields;
