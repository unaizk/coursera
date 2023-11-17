import { sampleCourses } from "../courses/sampleCourse.js";

// Function to enroll a student in a course using promises
export const enrollStudentInCourse = (course, userId) => {
    return new Promise((resolve, reject) => {
       if(course && userId){
            // Enroll the student
            course.enrollmentStatus = 'Enrolled';
            course.students.push({
                userId,
            });
            resolve(course);
       }else{
            reject(new Error('course not found'))
       }  
    });
};


export const enrolledSpecificCourse = (courseId, userId) =>{
    return new Promise((resolve,reject) =>{
        const course = sampleCourses.find((course) => course.id === courseId);
        console.log(course,'jjjjjjjjjjjjjjjjj');
        if (!course) {
            reject(new Error('Course not found'));
        }
        const enrolledStudent = course.students.find((student) => student.userId.equals(userId));
    
        if (!enrolledStudent) {
            reject(new Error('User not enrolled'));
        }
        resolve(course)
    })
}


