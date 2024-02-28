/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLoaderData } from "react-router-dom"
import Modal from "./Modal"

function ReliefDetails() {
  const data: any = useLoaderData()


  return (
    <div>
      <div className="hero min-h-screen bg-base-200 py-12">
        <div className="hero-content flex-col lg:flex-row">
          <img src={data.image} className="w-[500px] h-[400px] rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-4xl font-bold">{data.title}</h1>
            <p className="text-2xl font-bold py-3">Category: {data.categori}</p>
            <p className="text-lg font-bold text-gray-600">${data.amount} Distributor for Acura</p>
            <p className="py-6">{data.description}</p>


            <label htmlFor="my_modal_6" className="btn btn-primary">Donate Now</label>

            <Modal  />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReliefDetails
