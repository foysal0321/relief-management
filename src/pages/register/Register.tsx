/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { useCreateUserMutation } from "../../redux/feauters/auth/authApi"


function Register() {

  const { register, handleSubmit } = useForm()
  const [creteUser] = useCreateUserMutation()
  const navigate = useNavigate()


  const handle = async (data: any) => {
    const tostId = toast.loading('Register..')

    try {
      const userInfo = {
        name: data.name,
        email: data.email,
        password: data.password
      }
      await creteUser(userInfo)
      toast.success('Successfuly Login', { id: tostId, duration: 2000 })
      navigate('/login')

    } catch (err) {
      toast.error('Something wrong', { id: tostId, duration: 2000 })
    }
  }


  return (
    <div className="max-w-[500px] mx-auto py-20">
      <h1 className="text-4xl font-bold text-center">Register</h1>
      <form onSubmit={handleSubmit(handle)} className="py-6 mt-8">
        <label className="input input-bordered flex items-center h-16 gap-2 m-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
          <input id="name" {...register('name')} type="text" className="grow" placeholder="Username" required />
        </label>

        <label className="input input-bordered flex items-center h-16 gap-2 m-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
          <input id="email" {...register('email')} type="text" className="grow" placeholder="Email" required />
        </label>

        <label className="input input-bordered flex items-center h-16 gap-2 m-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
          <input id="password" {...register('password')} type="password" className="grow" placeholder="Password" required />
        </label>
        <input className="btn btn-success text-white md:w-[500px]" type="Submit" />
      </form>
      <p className="text-center"> Already have an account? <Link to='/login' className="text-green-600 font-bold">Login</Link></p>
    </div>
  )
}

export default Register
