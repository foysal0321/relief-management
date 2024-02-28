/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form"
import { useAddReliefsMutation } from "../../redux/feauters/reliefs/reliefApi"
import { useNavigate } from "react-router-dom"

function CreateSupply() {

  const [addData] = useAddReliefsMutation()
  const { register, handleSubmit } = useForm()
  const imgHostUrl = `https://api.imgbb.com/1/upload?key=70669c87852630ac66a79bbcc87d5718`
  const navigate = useNavigate()

  const handle = (data: any) => {
    const formData = new FormData()
    formData.append("image", data.image[0])

    fetch(imgHostUrl, {
      method: 'POST',
      body: formData
    })
      .then((res) => res.json())
      .then((imgData) => {
        const imgurl = imgData.data.url
        const { title, description, categori, amount } = data
        const newRelief = {
          title,
          categori,
          image: imgurl,
          description,
          amount,
        }
        addData(newRelief)
        navigate('/relief-goods')
        //console.log(newRelief);
      })
  }

  return (
    <div className="max-w-[800px] mx-auto py-10 ">
      <h1 className="text-3xl font-bold text-center">Create Supply</h1>
      <form onSubmit={handleSubmit(handle)} className="mx-auto max-w-[500px]">

        <label className="form-control w-full max-w-xs py-2">
          <span className="label-text py-2">Title</span>
          <input type="text" {...register('title')} placeholder="Type here" className="input input-bordered w-80 md:w-[500px] p-7" required />
        </label>

        <label className="form-control w-full max-w-xs py-2">
          <span>Category</span>
          <select {...register('categori')} className="select select-bordered  w-80 md:w-[500px]" required>
            <option disabled selected>Category</option>
            <option>Food Supplies</option>
            <option>Education</option>
            <option>Clothing</option>
            <option>Shelter Kits</option>
            <option>Water</option>
            <option>Medical Supply</option>
            <option>Tools</option>
          </select>
        </label>
        <label className="form-control w-full max-w-xs py-2">
          <span className="label-text py-2">Amount</span>
          <input type="number" {...register('amount')} placeholder="Type here" className="input input-bordered w-80 md:w-[500px] p-7" required/>
        </label>

        <label className="form-control w-full max-w-xs">
          <span className="label-text py-1">Description</span>
          <textarea {...register('description')} placeholder="Descriptions" className="textarea textarea-bordered textarea-md w-80 md:w-[500px] p-7 " ></textarea>
        </label>
        <input {...register('image')} type="file" className="file-input file-input-bordered w-80 md:w-[500px] mt-2" /> <br />

        <button className="btn mt-8 btn-success text-white w-80 md:w-[500px] ">Create Sypply</button>
      </form>


    </div>
  )
}

export default CreateSupply
