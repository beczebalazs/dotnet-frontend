import { FC } from "react";

import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { theme } from "../../../theme";
import { useTranslation } from "react-i18next";
import { TBackground, TButton, TTextFields } from "../../../types";
import ChooseBackground from "../../common/choose-background/ChooseBackground";
import ResetPasswordTextFields from "../../reset-password/reset-password-text-fields/ResetPasswordTextFields";

interface Props {
    textfieldType: TTextFields;
    buttonType: TButton;
    isIcon: boolean;
    backgroundImage?: string;
    backgroundType: TBackground;
}

const ResetPassword: FC<Props> = (props) => {
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
                    [theme.breakpoints.down("sm")]: {
                        fontSize: theme.spacing(4),
                    },
                }}
            >
                {t("auth.resetPasswordLayout.title")}
            </Typography>
            <ResetPasswordTextFields
                isIcon={props.isIcon}
                textfieldType={props.textfieldType}
                buttonType={props.buttonType}
            />

            <Grid
                sx={{ mt: theme.spacing(5), cursor: "pointer" }}
                onClick={handleBackToLogin}
            >
                <Typography sx={{ color: "primary.main" }}>
                    {t("auth.resetPasswordLayout.back")}
                </Typography>
            </Grid>
        </ChooseBackground>
    );
};

export default ResetPassword;
