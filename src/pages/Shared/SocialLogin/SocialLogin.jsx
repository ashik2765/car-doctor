import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext);
    const location = useLocation()
    const nevigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                nevigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }
    return (
        <div className="text-center">
            <div className="divider">OR</div>
            <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline mx-2">
                G
            </button>
            <button className="btn btn-circle btn-outline mx-2">
                f
            </button>
            <button className="btn btn-circle btn-outline mx-2">
                In
            </button>
        </div>
    );
};

export default SocialLogin;