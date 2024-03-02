/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form"
import Input from "../../ui/Input"
import { useAddCommunityMutation } from "../../redux/feauters/community/communityApi"
import Swal from "sweetalert2"


function CreateCommunity() {

    const { register, handleSubmit, reset } = useForm()
    const [addCommunity] = useAddCommunityMutation(undefined)


    const submit = (formData: any) => {
        addCommunity(formData)
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
        <div>
            <div className="py-20 max-w-[500px] mx-auto ">
                <h2 className="text-2xl py-6 font-bold text-slate-600">You can make a comment</h2>

                <form onSubmit={handleSubmit(submit)} >
                    <Input type='text' label='Name' register={register} name='name' />
                    <Input type='text' label='Comment' register={register} name='comment' />

                    <button className="btn mt-8 btn-success text-white w-80 md:w-[500px] ">Comment</button>
                </form>
            </div>
        </div>
    )
}

export default CreateCommunity
