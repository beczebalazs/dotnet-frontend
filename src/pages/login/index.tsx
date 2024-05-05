import Login from "../../components/auth-layouts/login/Login";
import authTheme from "../../config/authTheme.json";
import { TButton, TTextFields, TBackground } from "../../types";

const LoginPage = () => {
    return (
        <Login
            isIcon={authTheme.isIcon}
            textfieldType={authTheme.textfieldType as TTextFields}
            buttonType={authTheme.buttonType as TButton}
            backgroundType={authTheme.backgroundType as TBackground}
            backgroundImage={authTheme.backgroundImage}
        />
    );
};

export default LoginPage;
