import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../config/firebase";

const Login = () => {
  const navigate = useNavigate();
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User logged in:", user);
      navigate("/dashboard");
    } catch (error) {
      console.log("Login error :", error);
    }
  };
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>Login Page</h2>
      <button
        onClick={handleGoogleLogin}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
