import { FC } from "react";

import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { theme } from "../../../theme";
import { TBackground, TButton, TTextFields } from "../../../types";
import { useTranslation } from "react-i18next";
import ChooseBackground from "../../common/choose-background/ChooseBackground";
import SignUpTextFields from "../../sign-up/sign-up-text-fields/SignUpTextFields";

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
    backgroundImage?: string;
    backgroundType: TBackground;
    input: Input[];
}

const SignUp: FC<Props> = (props) => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleBackToLogin = () => {
        navigate("/login");
    };
    return (
        <ChooseBackground
            backgroundType={props.backgroundType}
            backgroundImage={props.backgroundImage}
        >
            <Typography
                sx={{
                    color: "primary.main",
                    fontWeight: "bold",
                    fontSize: theme.spacing(5),
                    [theme.breakpoints.down("md")]: {
                        fontSize: theme.spacing(4),
                    },
                }}
            >
                {t("auth.signupLayout.title")}
            </Typography>
            <SignUpTextFields
                isIcon={props.isIcon}
                textfieldType={props.textfieldType}
                buttonType={props.buttonType}
                input={props.input}
            />

            <Grid
                sx={{ mt: theme.spacing(5), cursor: "pointer" }}
                onClick={handleBackToLogin}
            >
                <Typography sx={{ color: "primary.main" }}>
                    {t("auth.signupLayout.back")}
                </Typography>
            </Grid>
        </ChooseBackground>
    );
};

export default SignUp;
