import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";

function Home(){
    const dispatch = useDispatch();

    return (
        <div className="w-screen h-screen bg-dark-blue flex flex-col items-center justify-around">
            <Header/>
            <div className="h-3/4 flex items-center justify-around">
                <h1 className="font-squada-one text-8xl text-white">
                    Ask <span className="text-lighter-blue">Anonymously</span> <br/>
                    Learn <span className="text-lighter-blue">Unbound</span>
                </h1>
            </div>
            <div className="w-3/4 flex items-start justify-around">
                <button className="border border-white font-open-sans text-white p-3 w-1/3">Join Lesson</button>
                <button className="border border-white font-open-sans text-white p-3 w-1/3">Create Lesson</button>
            </div>
        </div>
    )
}

export default Home;