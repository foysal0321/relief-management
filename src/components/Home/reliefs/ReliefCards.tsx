/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link } from "react-router-dom";
import { useGetReliefsQuery } from "../../../redux/feauters/reliefs/reliefApi"
import { motion } from "framer-motion";


function ReliefCards() {

    const animateType = {
        hidden: {
            scale: 0,
            opacity: 0,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
            },
        },

    }

    const { data, isLoading, isError } = useGetReliefsQuery(undefined)
    let content;

    if (isLoading) content = <span className="loading loading-dots loading-lg"></span>

    if (data) {
        content = data.map((item: any) => <div key={item._id} className="py-2">
            <div className="card card-compact w-[350px] bg-base-100 shadow-xl">
                <p className="absolute z-30 text-center btn btn-secondary btn-sm mx-4 text-white rounded-2xl mt-4">{item.categori}</p>
                <figure> <img className="relative h-[320px] w-[350px]" src={item.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                    <p> <progress className="progress progress-success w-64 h-2" value={item.amount} max="300"></progress> ${item.amount}</p>
                    <div className="flex justify-end items-center text-gray-600 text-md py-3">
                        <p>Raised: $50</p>
                        <p className="font-bold">Goal: $1,000</p>
                    </div>

                    <div className="card-actions justify-end">
                        <Link to={`/relief-goods/${item._id}`} className="btn btn-outline btn-sm">View Details</Link>
                    </div>

                </div>
            </div>
        </div>)
    }

    if (isError) content = 'Something error!'

    return (
        <motion.div
            variants={animateType}
            initial="hidden"
            animate="visible"
            className="max-w-[1200px] mx-auto py-16 p-5">
            <h2 className="text-5xl text-center py-10 text-gray-700 font-bold">End human suffering
            </h2>
            <div
                className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1   gap-1">

                {content}

            </div>
            <Link to='/relief-goods' className="btn btn-primary mt-6 text-center mx-auto w-56 flex justify-center" >See All Donation</Link>
        </motion.div>
    )
}

export default ReliefCards
