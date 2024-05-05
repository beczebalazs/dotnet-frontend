import { FC } from "react";

import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { theme } from "../../../theme";
import { useTranslation } from "react-i18next";
import { TBackground, TButton, TTextFields } from "../../../types";
import ChooseBackground from "../../common/choose-background/ChooseBackground";
import LoginTextFields from "../../login/login-text-fields/LoginTextFields";
interface Props {
    textfieldType: TTextFields;
    buttonType: TButton;
    isIcon: boolean;
    backgroundImage?: string;
    backgroundType: TBackground;
}

const Login: FC<Props> = (props) => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleSignUp = () => {
        navigate("/sign-up");
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
                }}
            >
                {t("auth.loginLayout.title")}
            </Typography>
            <LoginTextFields
                isIcon={props.isIcon}
                textfieldType={props.textfieldType}
                buttonType={props.buttonType}
            />

            <Grid
                sx={{ mt: theme.spacing(5), cursor: "pointer" }}
                onClick={handleSignUp}
            >
                <Typography sx={{ color: "primary.main" }}>
                    {t("auth.loginLayout.signUp")}
                </Typography>
            </Grid>
        </ChooseBackground>
    );
};

export default Login;
