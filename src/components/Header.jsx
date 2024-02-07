import { useSelector } from "react-redux";

function Header(){
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    return (
        <div className="w-full h-20 top-0 fixed border-b p-3 flex items-center justify-between text-white">
            <h3 className="font-squada-one text-3xl">Pitay</h3>
            {isLoggedIn ? <h3>LOGGED IN</h3> : <h3>NOT LOGGED IN</h3>}
            <nav className="w-1/4">
                <ol className="w-full h-full flex justify-center">
                    <li className="">
                        <button className="border w-32 text-center p-3">Log In</button>
                    </li>
                    <li className="">
                        <button className="border w-32 text-center p-3">Sign Up</button>
                    </li>
                </ol>
            </nav>
        </div>
    );
}

export default Header;