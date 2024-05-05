import { FC } from "react";

import { useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import {
    Checkbox,
    InputAdornment,
    TextField,
    Typography,
    Button,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Grid from "@mui/material/Unstable_Grid2";
import { TTextFields, TButton } from "../../../types";
import { useFormik } from "formik";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { theme } from "../../../theme";


interface Props {
    textfieldType: TTextFields;
    buttonType: TButton;
    isIcon: boolean;
}

const validationSchema = (t: any) =>
    yup.object({
        email: yup
            .string()
            .email(t("auth.loginTextfields.validEmail"))
            .required(t("auth.loginTextfields.requiredEmail")),
        password: yup
            .string()
            .matches(
                /^(?=.[A-Z])(?=.[!@#$&])(?=.[0-9])(?=.*[a-z]).{8,}$/,
                t("auth.loginTextfields.incorrectPassword")
            )
            .required(t("auth.loginTextfields.requiredPassword")),
    });

const LoginTextFields: FC<Props> = (props) => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const translatedEmail: string = t("auth.loginTextfields.email");
    const translatedPassword: string = t("auth.loginTextfields.password");

    const handleResetPassword = () => {
        navigate("/reset-password");
    };

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validationSchema(t),
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
                <Grid sx={{ mt: theme.spacing(6) }}>
                    <TextField
                        sx={{ width: theme.spacing(35) }}
                        variant={props.textfieldType}
                        id="email"
                        name="email"
                        type="email"
                        placeholder={translatedEmail}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
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
                <Grid sx={{ mt: theme.spacing(3) }}>
                    <TextField
                        sx={{ width: theme.spacing(35) }}
                        variant={props.textfieldType}
                        type="password"
                        name="password"
                        id="Password"
                        placeholder={translatedPassword}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.password &&
                            Boolean(formik.errors.password)
                        }
                        helperText={
                            formik.touched.password && formik.errors.password
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

                    <Grid
                        container
                        sx={{
                            marginTop: theme.spacing(1),
                            paddingRight: theme.spacing(1),
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                        }}
                    >
                        <Grid
                            xxs={6}
                            sx={{
                                color: "grey",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <FormControlLabel
                                sx={{
                                    "& .MuiTypography-root": {
                                        color: "grey",
                                        fontSize: theme.spacing(1.5),
                                    },
                                }}
                                control={
                                    <Checkbox
                                        sx={{
                                            padding: theme.spacing(0),
                                            marginRight: theme.spacing(1),
                                            "& .MuiSvgIcon-root": {
                                                fontSize: theme.spacing(1.8),
                                            },
                                        }}
                                        name={"Remember me"}
                                        value={"Remember me"}
                                    />
                                }
                                label={t("auth.loginTextfields.rememberMe")}
                            />
                        </Grid>
                        <Grid xxs={6}>
                            <Typography
                                sx={{
                                    color: "primary.main",
                                    fontSize: theme.spacing(1.5),
                                    cursor: "pointer",
                                }}
                                onClick={handleResetPassword}
                            >
                                {t("auth.loginTextfields.forgotPassword")}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid sx={{ mt: theme.spacing(3) }}>
                    <Button
                        sx={{ width: theme.spacing(35) }}
                        variant={props.buttonType}
                        type="submit"
                    >
                        {t("auth.loginTextfields.login")}
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default LoginTextFields;
