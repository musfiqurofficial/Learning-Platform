import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';

const Courses = () => {
    const courses = useLoaderData()
    return (
        <div className='grid grid-cols-3 gap-3 w-10/12 mx-auto my-10'>
            {
                courses.map(course => <Course key={course._id} course={course}></Course>)
            }
        </div>
    );
};

export default Courses;