import { FC } from "react";

import EmailIcon from "@mui/icons-material/Email";
import { InputAdornment, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useFormik } from "formik";
import * as yup from "yup";
import { TTextFields, TButton } from "../../../types";
import { Button } from "@mui/material";
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
            .email(t("auth.resetPasswordTextfields.validEmail"))
            .required(t("auth.resetPasswordTextfields.requiredEmail")),
    });

const ResetPasswordTextFields: FC<Props> = (props) => {
    const { t } = useTranslation();

    const translatedEmail: string = t("auth.resetPasswordTextfields.email");

    const formik = useFormik({
        initialValues: {
            email: "",
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
                    <Button
                        sx={{ width: theme.spacing(35) }}
                        variant={props.buttonType}
                        type="submit"
                    >
                        {t("auth.resetPasswordTextfields.send")}
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default ResetPasswordTextFields;
