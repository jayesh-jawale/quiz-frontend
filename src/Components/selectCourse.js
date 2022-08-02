import { CourseCards } from "./courseCards";

export function SelectCourse() {
    return (
      <div>
        <div className="quiz-header">
            <div className="quiz-header-text">
            Hey there, Please select course. Let's test your Knowledge.!
            </div>      
        </div>
        <CourseCards/>

      </div>
    );
}