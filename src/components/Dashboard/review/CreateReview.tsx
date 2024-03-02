/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form"
import Input from "../../../ui/Input"
import { useAddReviewMutation } from "../../../redux/feauters/user-reviews/reviewApi"
import { useAppSelector } from "../../../redux/hooks"
import { selectCurrentUser } from "../../../redux/feauters/auth/authSlice"
import Swal from "sweetalert2"

function CreateReview() {

  const { register, handleSubmit, reset } = useForm()
  const [addReview] = useAddReviewMutation(undefined)
  const user: any = useAppSelector(selectCurrentUser)

  const handle = (data: any) => {
    const reviewData = {
      name: data.name,
      address: data.address,
      description: data.description,
      email: user?.email
    }
    addReview(reviewData)
      .then((data: any) => {
        if (data?.data?.acknowledged) {
          Swal.fire({
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      });

    reset()
  }


  return (
    <div className="max-w-[800px] mx-auto py-16">
      <h2 className="text-3xl py-6 font-bold">Create Review</h2>

      <form onSubmit={handleSubmit(handle)}>
        <Input type='text' label='Name' register={register} name='name' />
        <Input type='text' label='Address' register={register} name='address' />

        <label className="form-control w-full max-w-xs">
          <span className="label-text py-1">Description</span>
          <textarea {...register('description')} placeholder="Descriptions" className="textarea textarea-bordered textarea-md w-80 md:w-[500px] p-7 " ></textarea>
        </label>
        <button className="btn mt-8 btn-success text-white w-80 md:w-[500px] ">Submit</button>
      </form>

    </div>
  )
}

export default CreateReview
