import { useForm } from "react-hook-form"
import Input from "../../ui/Input"
import { useAddCommunityMutation } from "../../redux/feauters/community/community"

function CreateCommunity() {

    const {register, handleSubmit} = useForm()
    const [addCommunity] = useAddCommunityMutation(undefined)

    const submit = (data, e) => {
       // addCommunity(data)
       console.log(data);
       
        data.name = ''
        data.comment = ''
    }


  return (
    <div>
       <div className="py-20 max-w-[500px] mx-auto ">
      <h2 className="text-3xl py-6 font-bold">Create Comment</h2>
      
      <form onSubmit={handleSubmit(submit)} >
        <Input type='text' label='Name' register={register} name='name' />
        <Input type='text' label='Comment' register={register} name='comment' />

        <button className="btn mt-8 btn-success text-white w-80 md:w-[500px] ">Sumit</button>
      </form>
    </div>
    </div>
  )
}

export default CreateCommunity
