/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, useForm } from "react-hook-form"
import Input from "../../ui/Input"
import { useAddVolunteerMutation } from "../../redux/feauters/volunteers/volunteerApi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


function CreateVolunteer() {

    const {register, handleSubmit, reset} = useForm()
    const imgHostUrl = `https://api.imgbb.com/1/upload?key=70669c87852630ac66a79bbcc87d5718`;
    const [addVolunteer] = useAddVolunteerMutation(undefined)
    const navigate = useNavigate()


    const submit = (data: FieldValues | any) => {

        const formData = new FormData()
        formData.append("image", data.image[0])

        // host image
        fetch(imgHostUrl, {
            method: 'POST',
            body: formData
        })
        .then((res) => res.json())
        .then((imgData) => {
            const imgUrl = imgData.data.url
            const {name, phone, email} = data
            const volunteerData = {
                name,
                phone,
                email,
                image: imgUrl
            };
              //==== add volunteer data
            addVolunteer(volunteerData)
            .then((data: any) => {
              if (data?.data?.acknowledged) {
                  Swal.fire({
                      icon: "success",
                      title: "Your work has been saved",
                      showConfirmButton: false,
                      timer: 1500
                  });
                  navigate('/about')
              } else {
                  Swal.fire({
                      icon: "error",
                      title: "Oops...",
                      text: "Something went wrong!",
                  });
              }
          });
      reset()        
        })   
    }


  return (
    <div className="py-20 max-w-[500px] mx-auto ">
      <h2 className="text-3xl py-6 font-bold">Become a Volunteer</h2>
      
      <form onSubmit={handleSubmit(submit)} >
        <Input type='text' label='Name' register={register} name='name' />
        <Input type='email' label='Email' register={register} name='email' />
        <Input type='number' label='Phone' register={register} name='phone' />
       
        <input {...register('image')} type="file" className="file-input file-input-bordered w-80 md:w-[500px] mt-2" /> <br />
       
        <button className="btn mt-8 btn-success text-white w-80 md:w-[500px] ">Sumit</button>
      </form>
    </div>
  )
}

export default CreateVolunteer
