/* eslint-disable @typescript-eslint/no-explicit-any */
import { MenuIcon, SidebarClose } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo (1).png'
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { logout, selectCurrentUser } from '../../redux/feauters/auth/authSlice';
import { toast } from 'sonner';


const NavbarMenu = () => {

  // ===== dark mode 
  const [theme, setTheme]: any = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  )

  useEffect(() => {
    localStorage.setItem("theme", theme)
    const localTheme: any = localStorage.getItem("theme")
    document.querySelector('html')?.setAttribute("data-theme", localTheme)
  }, [theme])

  const handleDark = (e: any) => {
    if (e.target.checked) {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  // ======= navabr
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };


  const dispath = useAppDispatch()
  const navigate = useNavigate()
  const user = useAppSelector(selectCurrentUser)

  // ======= user logout
  const handleLogout = () => {
    dispath(logout())
    toast.success('Successfuly Logout', { duration: 2000 })
    navigate('/login')
  }

  // ======= Array containing navigation items
  const navItems = [
    <Link to="/about">About Us</Link>,
    <Link to="/relief-goods">All Donations</Link>,
    <Link to="/donors-leaderboard">Donors Leaderboard</Link>,
    user && <Link to="/community">Community</Link>,
    user && <Link to="/volunteer">Volunteer</Link>,
    user && <Link to='/dashboard'>Dashboard</Link>,
    user ? <button onClick={handleLogout} className='btn btn-sm btn-primary'>Logout</button>
      : <Link to='/login' className='btn btn-sm btn-primary'>Login</Link>,

    <label className="cursor-pointer grid place-items-center">
      <input type="checkbox"
        onChange={handleDark}
        checked={theme === 'light' ? false : true}
        value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
      <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
      <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
    </label>

  ];


  return (
    <div className="bg-zinc-300">
      <div className='flex justify-between items-center h-20 max-w-[1300px] mx-auto text-zinc-950 p-6'>
        <Link to='/'>
          <img src={logo} alt="" />
        </Link>
        <ul className='hidden lg:flex'>
          {navItems.map((item: any, i) => (
            <li
              key={i}
              className='p-2 rounded-xl m-1 duration-300 hover:text-black'
            >
              {item}
            </li>
          ))}
        </ul>
        <div onClick={handleNav} className='block lg:hidden'>
          {nav ? <SidebarClose size={20} /> : <MenuIcon size={20} />}
        </div>
        <ul
          className={
            nav
              ? 'fixed lg:hidden left-0 top-0 w-[280px] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-50'
              : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
          }
        >
          <Link to='/'>
            <img src={logo} alt="" />
          </Link>
          {navItems.map((item: any, id) => (
            <li
              key={id}
              className='p-4 text-white border-b rounded-xl  cursor-pointer border-gray-600'
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavbarMenu;