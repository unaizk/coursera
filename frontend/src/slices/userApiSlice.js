import { apiSlice } from "./apiSlice";

const USER_URL = '/api/users'

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        login : builder.mutation({
            query : (data) => ({
                url : `${USER_URL}/auth`,
                method : 'POST',
                body : data
            })
        }),
        register : builder.mutation({
            query : (data) => ({
                url : `${USER_URL}`,
                method : 'POST',
                body : data
            })
        }),
        logout : builder.mutation({
            query : () => ({
                url : `${USER_URL}/logout`,
                method : 'POST',
            })
        }),
        courses : builder.mutation({
            query : () => ({
                url : `${USER_URL}/courses`,
                method : 'GET',
            })
        }),
        course : builder.mutation({
            query : (courseId) => ({
                url : `${USER_URL}/courses/${courseId}`,
                method : 'GET',
            })
        }),
        enrolledCourse : builder.mutation({
            query : (courseId) => ({
                url : `${USER_URL}/enroll-specific-course/${courseId}`,
                method : 'GET',
            })
        }),
        enrollingCourse : builder.mutation({
            query : (data) => ({
                url : `${USER_URL}/enroll-course`,
                method : 'POST',
                body : data
            })
        }),
        enrollingCourses : builder.mutation({
            query : () => ({
                url : `${USER_URL}/enroll-courses`,
                method : 'GET',
            })
        }),
        completedCourse : builder.mutation({
            query : (data) => ({
                url : `${USER_URL}/course-complete`,
                method : 'POST',
                body : data
            })
        }),

    })
})

export const {useLoginMutation, useLogoutMutation, useRegisterMutation , useCoursesMutation, useCourseMutation, useEnrolledCourseMutation,useEnrollingCourseMutation, useEnrollingCoursesMutation, useCompletedCourseMutation} = userApiSlice