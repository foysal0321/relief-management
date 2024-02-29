/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { selectCurrentUser } from "../../../redux/feauters/auth/authSlice";
import { useAppSelector } from "../../../redux/hooks";
import { useAddDonorsMutation } from "../../../redux/feauters/user-donors/donorsApi";

function Modal() {
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()
    const user: any = useAppSelector(selectCurrentUser)
    const [addDonors] = useAddDonorsMutation(undefined)


    const submitData = (data: any) => {
        //console.log(data.email);
        addDonors(data)
        //navigate('/dashboard')

    }

    return (
        <div>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <div className=" flex flex-wrap justify-between items-center ">
                        <div className=" mt-4 ">
                            <h2 className="text-xl font-bold">Donate Now</h2>
                        </div>
                        <label htmlFor="my_modal_6" className="modal-action btn">
                            ✕
                        </label>
                    </div>

                    <form onSubmit={handleSubmit(submitData)} method="dialog" className="">
                        <div className="p-0 mt-2 md:p-3">
                            <div className=" form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold py-2">
                                        Full Name
                                    </span>
                                </label>
                                <input
                                    type="text"

                                    placeholder="Name"
                                    required
                                    {...register('name')}
                                    className="input input-bordered w-72 md:w-[420px] h-[50px] "
                                />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold py-2">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="email"
                                    value={user?.email}                                  
                                    {...register('email')}
                                    className="input input-bordered w-72 md:w-[420px] h-[50px]"
                                />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold py-2">Address</span>
                                </label>
                                <input
                                    type="text"

                                    placeholder="Address"
                                    required
                                    {...register('address')}
                                    className="input input-bordered w-72 md:w-[420px] h-[50px]"
                                />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold py-2">Company / Organization</span>
                                </label>
                                <input
                                    type="text"

                                    placeholder="Company"
                                    required
                                    {...register('company')}
                                    className="input input-bordered w-72 md:w-[420px] h-[50px]"
                                />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold py-2">Amount</span>
                                </label>
                                <input
                                    type="number"

                                    placeholder="Amount"
                                    required
                                    {...register('amount')}
                                    className="input input-bordered w-72 md:w-[420px] h-[50px]"
                                />
                            </div>

                            <button
                                type="submit"

                                className="btn btn-outline btn-md btn-error rounded-full w-72 md:w-[420px] mt-6"
                            >
                                Donate
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal
