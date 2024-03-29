import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/login/login.svg'
import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const nevigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const [Error, setError] = useState();

    const hadleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                nevigate(from, { replace: true })
            })
            .catch(error => setError(error.message))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col  lg:flex-row">
                <div className="text-center lg:text-left w-1/2 mr-12">
                    <img src={logo} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-2xl text-center font-bold">Login</h1>
                        <form onSubmit={hadleLogin}>
                            <div className="form-control">
                                <p>{Error}</p>
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center'>New to Car Doctor?
                            <Link to='/signup' className='text-orange-600 font-bold'> Sign Up
                            </Link></p>

                        <SocialLogin></SocialLogin>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;