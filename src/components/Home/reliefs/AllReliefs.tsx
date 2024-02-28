/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { useGetAllReliefsQuery } from "../../../redux/feauters/reliefs/reliefApi"


function AllReliefs() {

    const { data, isLoading, isError } = useGetAllReliefsQuery(undefined)
    let content;

    if (isLoading) content = <span className="loading loading-dots loading-lg"></span>

    if (data) {
        content = data.map((item: any, i: string) => <div key={i} className="py-2">
            <div  className="card card-compact w-[350px] bg-base-100 shadow-xl">
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
        <div className="max-w-[1150px] mx-auto py-16">
            <p className="text-center">START DONATING FOR THEM</p>
            <h2 className="text-4xl py-6 text-center">Checkout Popular Causes</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-1">

                {content}

            </div>

        </div>
    )
}

export default AllReliefs
