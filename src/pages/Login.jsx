import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginPassword, signup } from "../features/auth/authThunks";
import { useNavigate } from "react-router";
import CustomTextField from "../components/CustomTextField";
import { Button } from "@mui/material";

function Login(){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formType, setFormType] = useState("login");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleFromChange = (ev) => {
        setFormType(() => ev.target.value);
        setUsername("");
        setEmail("");
        setPassword("");
    }

    const handleUsernameChange = (ev) => {
        setUsername(() => ev.target.value);
    }

    const handleEmailChange = (ev) => {
        setEmail(() => ev.target.value);
    }

    const handlePasswordChange = (ev) => {
        setPassword(() => ev.target.value);
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
                            flex flex-col items-center justify-around text-white
                             shadow-2xl">
                <h3 className="font-roboto text-4xl">Login Form</h3>
                <div className="w-full h-1/4 flex items-center justify-center font-open-sans">
                    <Button  variant="contained"value="login" onClick={handleFromChange} 
                            className={`w-1/3 border p-3 transition-all duration-500 rounded-sm rounded-r-none
                                        ${formType === 'login' ? 'bg-lighter-blue' : ''}`}>
                        Log In
                    </Button>
                    <Button variant="contained" value="signup" onClick={handleFromChange} 
                            className={`w-1/3 border p-3 transition-all duration-500 rounded-sm rounded-l-none
                                        ${formType === 'login' ? '' : 'bg-lighter-blue'}`}>
                        Sign Up
                    </Button>
                </div>
                <div className="w-full h-1/2 p-3 flex flex-col items-center justify-around text-left">
                    {formType === 'login' ? "" : 
                    <CustomTextField required 
                            variant="outlined" label="Username" 
                            value={username} onChange={handleUsernameChange}/>}
                    <CustomTextField required 
                            variant="outlined" label="Email"
                            value={email} onChange={handleEmailChange}/>
                    <CustomTextField required
                            variant="outlined" label="Password"
                            value={password} onChange={handlePasswordChange}/>
                </div>
                <div className="w-full h-1/4 flex items-center justify-center">
                    <Button variant="contained" size="large" onClick={handleSubmit}>
                        {formType === 'login' ? "Log In" : "Sign Up"}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Login;