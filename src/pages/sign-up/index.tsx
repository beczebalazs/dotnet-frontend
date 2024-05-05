import SignUp from "../../components/auth-layouts/sign-up/SignUp";
import authTheme from "../../config/authTheme.json";
import { TBackground, TButton, TTextFields } from "../../types";

const SignUpPage = () => {
    return (
        <SignUp
            isIcon={authTheme.isIcon}
            textfieldType={authTheme.textfieldType as TTextFields}
            buttonType={authTheme.buttonType as TButton}
            backgroundType={authTheme.backgroundType as TBackground}
            backgroundImage={authTheme.backgroundImage}
            input={[
                "email",
                "password",
                "passwordconfirmation",
                "username",
                "firstname",
                "lastname",
            ]}
        />
    );
};

export default SignUpPage;
