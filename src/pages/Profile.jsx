import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authThunks";
import { useNavigate } from "react-router";

function Profile(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);

    const handleLogOut = () => {
        dispatch(logout());
        navigate('/');
    }

    return (
        <div className="w-screen h-screen bg-light-blue flex items-center justify-around">
            <div className="w-2/3 h-2/3 p-5 text-center border flex flex-col items-center justify-center
                            bg-dark-blue text-white font-open-sans">
                <div className="w-full h-1/4 flex items-center justify-around">
                    <h1 className="text-3xl">{`Hi, ${user.username}!`}</h1>
                </div>
                <div className="w-full h-3/4 flex flex-col items-center justify-around">
                    <p className="text-lg">Your lessons will be here!</p>
                </div>
                <div className="w-full flex flex-col items-center justify-around">
                    <button className="border p-3" onClick={handleLogOut}>Log Out</button>
                </div>
            </div>
        </div>
    )
}

export default Profile;