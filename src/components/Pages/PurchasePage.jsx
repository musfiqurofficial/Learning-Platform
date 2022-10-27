import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const PurchasePage = () => {
    const purchase = useLoaderData();
    const { _id, author, category_id, details, name, thumbnail_url, title, rating } = purchase;

    const handlePurchase = () => {
        toast.success('Thanks for Purchasing this course!')
    }
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <p className="py-6">{details}</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h3 className='text-3xl font-semibold mx-auto'>Purchase</h3>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="Your Email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="text" placeholder="Your Phone" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={handlePurchase} className="btn btn-primary">Purchase</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PurchasePage;