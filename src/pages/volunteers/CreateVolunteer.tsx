/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, useForm } from "react-hook-form"
import Input from "../../ui/Input"
import { useAddVolunteerMutation } from "../../redux/feauters/volunteers/volunteerApi";


function CreateVolunteer() {

    const {register, handleSubmit} = useForm()
    const imgHostUrl = `https://api.imgbb.com/1/upload?key=70669c87852630ac66a79bbcc87d5718`;
    const [addVolunteer] = useAddVolunteerMutation(undefined)


    const submit = (data: FieldValues | any) => {

        const formData = new FormData()
        formData.append("image", data.image[0])

        fetch(imgHostUrl, {
            method: 'POST',
            body: formData
        })
        .then((res) => res.json())
        .then((imgData) => {
            const imgUrl = imgData.data.url
            const {name, address, phone, email} = data
            const volunteerData = {
                name,
                address,
                phone,
                email,
                image: imgUrl
            };
            addVolunteer(volunteerData)
            //console.log(reviewData);         
        })   
    }


  return (
    <div className="py-20 max-w-[500px] mx-auto ">
      <h2 className="text-3xl py-6 font-bold">Create A Volunteer</h2>
      
      <form onSubmit={handleSubmit(submit)} >
        <Input type='text' label='Name' register={register} name='name' />
        <Input type='text' label='Address' register={register} name='address' />
        <Input type='email' label='Email' register={register} name='email' />
        <Input type='number' label='Phone' register={register} name='phone' />
       
        <input {...register('image')} type="file" className="file-input file-input-bordered w-80 md:w-[500px] mt-2" /> <br />
       
        <button className="btn mt-8 btn-success text-white w-80 md:w-[500px] ">Sumit</button>
      </form>
    </div>
  )
}

export default CreateVolunteer
