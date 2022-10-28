import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from './Course';

const Courses = () => {
    const courses = useLoaderData()
    return (
        <div className='grid grid-cols-5 w-10/12 mx-auto'>
            <div className='lg:grid grid-cols-2 gap-3 w-10/12 mx-auto col-span-4 my-10'>
                {
                    courses.map(course => <Course key={course._id} course={course}></Course>)
                }
            </div>
            <div className=' mx-auto text-center'>
                {
                    courses.map(cs => <p className='my-10'><Link key={cs._id} to={`/courses/${cs._id}`}>{cs.name}</Link></p>)
                }
            </div>
        </div>
    );
};

export default Courses;