import ResetPassword from "../../components/auth-layouts/reset-password/ResetPassword";
import authTheme from "../../config/authTheme.json";
import { TBackground, TButton, TTextFields } from "../../types";

const ResetPasswordPage = () => {
    return (
        <ResetPassword
            isIcon={authTheme.isIcon}
            textfieldType={authTheme.textfieldType as TTextFields}
            buttonType={authTheme.buttonType as TButton}
            backgroundType={authTheme.backgroundType as TBackground}
            backgroundImage={authTheme.backgroundImage}
        />
    );
};

export default ResetPasswordPage;
