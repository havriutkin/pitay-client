import { AppBar, Button, Container } from "@mui/material";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Header(){
    const navigate = useNavigate();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    const notLoggedNav = (
        <nav className="w-1/4">
            <ol className="w-full h-full flex items-center justify-center 
                        font-roboto list-none">
                <li>
                    <Button variant="text" onClick={() => navigate('/')}
                            className="text-white text-lg hover:bg-gray-500 m-5">
                        HOME
                    </Button>
                </li>
                <li>
                    <Button variant="text" onClick={() => navigate('/login')}
                            className="text-white text-lg hover:bg-gray-500 m-5">
                        LOGIN
                    </Button>
                </li>
            </ol>
        </nav>
    );

    const loggedNav = (
        <nav className="w-1/4">
            <ol className="w-full h-full flex items-center justify-center 
                        font-roboto list-none">
                <li>
                    <Button variant="text" onClick={() => navigate('/')}
                            className="text-white text-lg hover:bg-gray-500 m-5">
                        HOME
                    </Button>
                </li>
                <li>
                    <Button variant="text" onClick={() => navigate('/profile')}
                            className="text-white text-lg hover:bg-gray-500 m-5">
                        PROFILE
                    </Button>
                </li>
            </ol>
        </nav>
    );

    return (
        <div className="w-full h-20 top-0 fixed 
                        flex items-center justify-between
                        text-white bg-light-blue
                        shadow-xl">
            <h1 className="ml-5 tracking-wider font-squada-one">PITAY</h1>    
            {isLoggedIn ? loggedNav : notLoggedNav}
        </div>
    )

    return (
        <div className="w-full h-20 top-0 fixed border-b p-3 flex items-center justify-between text-white">
            <h3 className="font-squada-one text-3xl">Pitay</h3>
            {isLoggedIn ? loggedNav : notLoggedNav}
        </div>
    );
}

export default Header;