import React, { createRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar, FaFilePdf } from 'react-icons/fa';
import Pdf from 'react-to-pdf'

const ref = React.createRef();
const SIngleCourse = () => {
    const singleCourse = useLoaderData();
    const { _id, author, category_id, details, name, thumbnail_url, title, rating } = singleCourse;

    const ref = createRef();
    const options = {
        orientation: 'landscape',

    };
    return (
        <div ref={ref} className='w-full'>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={thumbnail_url} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <p className="py-6">{details}</p>
                        <div className='flex items-center my-3'>
                            <img className='w-16 rounded-full' src={author.img} alt="" />
                            <p className='text-lg font-semibold ml-3 text-lime-400'>{author.name}</p>
                        </div>
                        <div className='grid grid-cols-4 mt-2'>
                            <p className='text-2xl font-semibold'>${rating.price}</p>
                            <p className='flex items-center text-2xl font-semibold'><FaStar className='mr-1 text-yellow-400'></FaStar>{rating.number}</p>
                            <div className='btn mx-2'>
                                <Pdf targetRef={ref} filename="code-example.pdf">
                                    {({ toPdf }) => <button onClick={toPdf}><p className='flex gap-1'>Download <FaFilePdf></FaFilePdf></p></button>}
                                </Pdf>
                            </div>
                            <Link to={`/courses/cs/${_id}`}><button className="btn btn-primary">Buy this course</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SIngleCourse;