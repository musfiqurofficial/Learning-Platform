import React from 'react';
import Lottie from 'lottie-react'
import topsvg from '../../assets/topsvg.json'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className='w-10/12 mx-auto'>
                <div className="bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <Lottie animationData={topsvg} loop={true} />
                        <div>
                            <h1 className="text-5xl font-bold">Welcome to Geeks UI Learning Application</h1>
                            <p className="py-6">Hand-picked Instructor and expertly crafted courses, designed for the modern students and entrepreneur.</p>
                            <Link to='/courses'><button className="btn btn-primary">Get Started</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;