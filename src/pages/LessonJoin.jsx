function LessonJoin(){
    return (
        <div className="w-screen h-screen bg-dark-blue flex items-center justify-around">
            <div className="bg-light-blue p-3
                            border border-white h-3/4 w-1/3 
                            flex flex-col items-center justify-around text-white">
                <h3 className="font-open-sans text-4xl">Join Lesson</h3>
                <div className="w-full h-1/3 p-3 flex flex-col items-center justify-around text-left">
                    <input type="text" placeholder="Public Key" className="w-2/3 p-2 m-2 text-black"/>
                </div>
                <div className="w-full h-1/3 flex items-center justify-center">
                    <button className="w-2/3 h-1/3 bg-custom-green text-2xl">
                        Join
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LessonJoin;