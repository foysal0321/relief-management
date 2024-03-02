/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../redux/hooks"
import { setUser } from "../../redux/feauters/auth/authSlice"
import { useLoginUserMutation } from "../../redux/feauters/auth/authApi"
import { veryfiToken } from "../../utils/veryfiToken"
import { toast } from "sonner"
//import { veryfiToken } from "../../utils/veryfiToken"

function Login() {
  const { register, handleSubmit } = useForm()
  const dispath = useAppDispatch()
  const [login] = useLoginUserMutation()
  const navigate = useNavigate()


  const onSubmit = async (data: any) => {
    const tostId = toast.loading('Login..')
    try {
      const userInfo = {
        email: data.email,
        password: data.password
      }

      const res = await login(userInfo).unwrap()
      const user = veryfiToken(res.token)

      dispath(setUser({
        user: user,
        token: res.token
      }))
      toast.success('Successfuly Login', { id: tostId, duration: 2000 })
      navigate('/dashboard')

    } catch (err) {
      toast.error('Something wrong', { id: tostId, duration: 2000 })
      console.log(err);
    }
  }


  return (
    <div className="">
      <div className="max-w-[500px] mx-auto py-20  ">
        <h1 className="text-4xl font-bold text-center">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="py-6 mt-8">
          <label className="input input-bordered flex items-center h-16 gap-2 m-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
            <input type="text" id="email" {...register('email')} className="grow" placeholder="Email" required />
          </label>

          <label className="input input-bordered flex items-center h-16 gap-2 m-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
            <input type="password" id="password" {...register('password')} className="grow" placeholder="Password" required />
          </label>
          <input className="btn btn-success mt-4  text-white md:w-[500px]" type="Submit" />
        </form>
        <p className="text-center"> Don't have an account? <Link to='/register' className="text-green-600 font-bold">Register</Link></p>
      </div>
    </div>
  )
}

export default Login
