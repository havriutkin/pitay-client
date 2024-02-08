import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginPassword, signup } from "../features/auth/authThunks";
import { useNavigate } from "react-router";

function Login(){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formType, setFormType] = useState("login");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleFromChange = (ev) => {
        setFormType(prev => ev.target.value);
    }

    const handleUsernameChange = (ev) => {
        setUsername(prev => ev.target.value);
    }

    const handleEmailChange = (ev) => {
        setEmail(prev => ev.target.value);
    }

    const handlePasswordChange = (ev) => {
        setPassword(prev => ev.target.value);
    }
    
    const handleSubmit = (ev) => {
        const userData = {
            ... (formType === 'signup' && {username} ),
            email,
            password
        }
        if (formType === 'signup') {
            dispatch(signup(userData));
        } else {
            dispatch(loginPassword(userData));
        }
        navigate('/');
    }

    return (
        <div className="w-screen h-screen bg-dark-blue flex items-center justify-around">
            <div className="bg-light-blue p-3
                            border border-white h-3/4 w-1/3 
                            flex flex-col items-center justify-around text-white">
                <h3 className="font-open-sans text-4xl">Login Form</h3>
                <div className="w-full h-1/4 flex items-center justify-center font-open-sans">
                    <button value="login" onClick={handleFromChange} 
                            className={`w-1/3 border p-3 transition-all duration-500 
                                        ${formType === 'login' ? 'bg-lighter-blue' : ''}`}>
                        Log In
                    </button>
                    <button value="signup" onClick={handleFromChange} 
                            className={`w-1/3 border p-3 transition-all duration-500 
                                        ${formType === 'login' ? '' : 'bg-lighter-blue'}`}>
                        Sign Up
                    </button>
                </div>
                <div className="w-full h-1/4 p-3 flex flex-col items-center justify-around text-left">
                    {formType === 'login' ? "" : 
                    <input type="text" placeholder="Username" className="w-2/3 p-2 m-2 text-black" 
                            value={username} onChange={handleUsernameChange}/>}
                    <input type="text" placeholder="Email Address" className="w-2/3 p-2 m-2 text-black"
                            value={email} onChange={handleEmailChange}/>
                    <input type="text" placeholder="Password" className="w-2/3 p-2 m-2 text-black"
                            value={password} onChange={handlePasswordChange}/>
                </div>
                <div className="w-full h-1/4 flex items-center justify-center">
                    <button className="w-2/3 h-1/3 bg-custom-green text-2xl" onClick={handleSubmit}>
                        {formType === 'login' ? "Log In" : "Sign Up"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login;