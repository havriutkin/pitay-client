import { useState } from "react";
import CustomTextField from "../components/CustomTextField";
import { createLesson } from "../features/lesson/lessonThunks";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

function LessonForm(){
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleTitleChange = (ev) => {
        setTitle(() => ev.target.value);
    };

    const handleSubmit = () => {
        if (!title) {
            console.log('Empty title');
            return
        } 
        dispatch(createLesson({title: title}));
        navigate('/');
    }

    return(
        <div className="w-screen h-screen bg-dark-blue flex items-center justify-around">
            <div className="bg-light-blue p-3
                            border border-white h-3/4 w-1/3 
                            flex flex-col items-center justify-around text-white">
                <h3 className="font-open-sans text-4xl">Create Lesson</h3>
                <div className="w-full h-1/3 p-3 flex flex-col items-center justify-around text-left">    
                    <CustomTextField required 
                                variant="outlined" label="Title" 
                                value={title} onChange={handleTitleChange}/>
                </div>
                <div className="w-full h-1/3 flex items-center justify-center">
                    <button className="w-2/3 h-1/3 bg-custom-green text-2xl" onClick={handleSubmit}>
                        Create
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LessonForm;