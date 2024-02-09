import Header from "../components/Header";
import { Button } from "@mui/material";

function Home(){

    return (
        <div className="w-screen h-screen bg-dark-blue flex flex-col items-center justify-around">
            <div className="h-3/4 flex items-center justify-around">
                <h1 className="font-squada-one text-8xl text-white">
                    Ask <span className="text-lighter-blue">Anonymously</span> <br/>
                    Learn <span className="text-lighter-blue">Unbound</span>
                </h1>
            </div>
            <div className="w-3/4 flex items-start justify-around">
                <Button variant="contained" className="w-1/3">Join Lesson</Button>
                <Button variant="contained" className="w-1/3">Create Lesson</Button>
            </div>
        </div>
    )
}

export default Home;