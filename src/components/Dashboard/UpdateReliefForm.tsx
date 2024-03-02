/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form"
import { useLoaderData, useNavigate } from "react-router-dom"
import { useUpdateReliefMutation } from "../../redux/feauters/reliefs/reliefApi"
import Swal from "sweetalert2"

function UpdateReliefForm() {

  const { register, handleSubmit, reset } = useForm()
  const data: string | any = useLoaderData()
  const [updateData] = useUpdateReliefMutation()
  const navigate = useNavigate()

  const imgHostUrl = `https://api.imgbb.com/1/upload?key=70669c87852630ac66a79bbcc87d5718`

  const handle = (d: any) => {

    const formData = new FormData()
    formData.append("image", d.image[0])

    fetch(imgHostUrl, {
      method: 'POST',
      body: formData
    })
      .then((res) => res.json())
      .then((imgData) => {
        const imgurl = imgData.data.url
        const { title, description, categori, amount } = d
        const newRelief = {
          title,
          categori,
          image: imgurl,
          description,
          amount,
        }
        const option = {
          id: data._id,
          data: newRelief
        }
        updateData(option)
        .then((data: any) => {
          if (data?.data?.acknowledged) {
              Swal.fire({
                  icon: "success",
                  title: "Your work has been update",
                  showConfirmButton: false,
                  timer: 1500
              });
               navigate('/dashboard/supplies')
          } else {
              Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Something went wrong!",
              });
          }
      });
  reset()

       
        // console.log(data._id);
      })

  }

  return (
    <div>
      <div className="w-[800px] mx-auto py-10 ">
        <h1 className="text-3xl font-bold text-center">Update Supply</h1>
        <form onSubmit={handleSubmit(handle)} className="mx-auto max-w-[500px]">

          <label className="form-control w-full max-w-xs py-2">
            <span className="label-text py-2">Title</span>
            <input type="text" {...register('title')} defaultValue={data.title} placeholder="Type here" className="input input-bordered w-80 md:w-[500px] p-7" />
          </label>

          <label className="form-control w-full max-w-xs">
            <span className="label-text py-2">Categori</span>
            <input type="text" {...register('categori')} defaultValue={data.categori} placeholder="Type here" className="input input-bordered w-80 md:w-[500px] p-7 " />
          </label>

          <label className="form-control w-full max-w-xs py-2">
            <span className="label-text py-2">Amount</span>
            <input type="number" {...register('amount')} defaultValue={data.amount} placeholder="Type here" className="input input-bordered w-80 md:w-[500px] p-7" />
          </label>

          <label className="form-control w-full max-w-xs">
            <span className="label-text py-1">Description</span>
            <textarea {...register('description')} defaultValue={data.description} placeholder="Descriptions" className="textarea textarea-bordered textarea-md w-80 md:w-[500px] p-7 " ></textarea>
          </label>
          <input {...register('image')} type="file" className="file-input file-input-bordered w-80 md:w-[500px] mt-2" /> <br />

          <button className="btn mt-8 btn-success text-white w-80 md:w-[500px] ">Create Sypply</button>
        </form>


      </div>
    </div>
  )
}

export default UpdateReliefForm
