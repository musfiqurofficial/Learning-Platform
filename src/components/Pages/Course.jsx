import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { _id, author, category_id, details, name, thumbnail_url, title, rating } = course;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={thumbnail_url} alt="course" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl dark:text-gray-100">{name}</h2>
                    <p> {
                        details.length > 100 ?
                            <p>{details.slice(0, 100) + '...'} <Link to={`/courses/${_id}`}><span className='text-amber-300 font-semibold'>Read More</span></Link></p>
                            :
                            <p>{details}</p>

                    }</p>
                    <div className="card-actions justify-end">
                        <Link to={`/courses/${_id}`}><button className="btn btn-primary">Buy Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;