import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLessonsByUser } from "../features/lesson/lessonThunks";
import { Button } from "@mui/material";

function LessonsDisplay(){
    const userData = useSelector(state => state.auth.user);
    const lessonData = useSelector(state => state.lesson);
    const dispatch = useDispatch();

    useEffect(() => {
        if (userData.id){
            dispatch(getLessonsByUser(userData.id));
        }
    }, [dispatch, userData.id]);

    if (!lessonData.lessons) {
        if (lessonData.isLoading) {
            return <p>Loading...</p>
        } else {
            return <p>No lessons yet</p>
        }
    }

    return (
        <div className=" w-full h-full flex flex-col items-center justify-center">
            {lessonData.lessons.map((lesson, index) => {
                return (
                    <div key={index} className="w-2/3 flex items-center justify-between border border-red">
                        <p className="text-lg font-semibold font-roboto">{lesson.title}</p>
                        <div className="w-1/4 flex items-center justify-between">
                            <Button variant="contained" size="small">Open</Button>
                            <Button variant="contained" color="error" size="small">Delete</Button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default LessonsDisplay;