

// Function to enroll a student in a course using promises
export const enrollStudentInCourse = (course, userId) => {
    return new Promise((resolve, reject) => {
       if(course && userId){
            // Enroll the student
            course.enrollmentStatus = 'Close';
            course.students.push({
                userId,
                // Add more student details as needed
            });
            resolve(course);
       }else{
            reject(new Error('course not found'))
       }  
    });
};



