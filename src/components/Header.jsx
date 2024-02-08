import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header(){
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    const notLoggedNav = (
        <nav className="w-1/4">
            <ol className="w-full h-full flex justify-center font-open-sans">
                <li className="">
                    <Link to='/' className=" no-underline border w-32 text-center p-3">Home</Link>
                </li>
                <li className="">
                    <Link to='/login' className=" no-underline border w-32 text-center p-3">Sign Up / Log In</Link>
                </li>
            </ol>
        </nav>
    );

    const loggedNav = (
        <nav className="w-1/4">
            <ol className="w-full h-full flex justify-center">
                <li className="">
                    <Link to='/' className="border w-32 text-center p-3">Home</Link>
                </li>
                <li className="">
                    <Link to='/profile' className="border w-32 text-center p-3">
                        Profile
                    </Link>
                </li>
            </ol>
        </nav>
    );

    return (
        <div className="w-full h-20 top-0 fixed border-b p-3 flex items-center justify-between text-white">
            <h3 className="font-squada-one text-3xl">Pitay</h3>
            {isLoggedIn ? loggedNav : notLoggedNav}
        </div>
    );
}

export default Header;