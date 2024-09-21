import Form from "./Form";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";

function Login() {
    const navigate = useNavigate();

    const handleLoginSuccess = (data) => {
        localStorage.setItem(ACCESS_TOKEN, data.access);
        localStorage.setItem(REFRESH_TOKEN, data.refresh);
        navigate("/");
    };

    return <Form route="/api/token/" method="login" onSuccess={handleLoginSuccess} />;
}

export default Login;
