/* eslint-disable @typescript-eslint/no-explicit-any */

type TInput = {
  type: string
  label: string
  register: any
  name: string
}

function Input({ type, label, register, name }: TInput) {
  return (

    <label className="form-control w-full max-w-xs py-1">
      <span className="label-text py-2">{label}</span>
      <input type={type} {...register(name)} placeholder="Type here" className="input input-bordered w-80 md:w-[500px] p-6" required />
    </label>

  )
}

export default Input
