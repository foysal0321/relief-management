/* eslint-disable @typescript-eslint/no-explicit-any */
import { MenuIcon, SidebarClose } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo (1).png'
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { logout, selectCurrentUser } from '../../redux/feauters/auth/authSlice';

const NavbarMenu = () => {
  const [nav, setNav] = useState(false);
  const dispath = useAppDispatch()
  const navigate = useNavigate()
  const user = useAppSelector(selectCurrentUser )
  //console.log(user);
  
  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogout = () => {
    dispath(logout())
    navigate('/login')
  }

 

  // Array containing navigation items
  const navItems = [
    { id: 1, text: <Link to="/relief-goods">All Donations</Link> },
    { id: user && 2, text:  user &&<Link to='/dashboard'>Dashboard</Link> } ,
    { id: 3, text: user ? <button onClick={handleLogout} className='btn btn-sm btn-primary'>Logout</button> : <Link to='/login' className='btn btn-sm btn-primary'>Login</Link> },
  ];

  return (
    <div className="bg-zinc-300">
      <div className='flex justify-between items-center h-20 max-w-[1300px] mx-auto px-4 text-zinc-950 '>
        <Link to='/'>
          <img src={logo} alt="" />
        </Link>      
        <ul className='hidden md:flex'>
          {navItems.map((item: any) => (
            <li
              key={item.id}
              className='p-4 rounded-xl m-2  duration-300 hover:text-black'
            >
              {item.text}
            </li>
          ))}
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <SidebarClose size={20} /> : <MenuIcon size={20} />}
        </div>

        <ul
          className={
            nav
              ? 'fixed md:hidden left-0 top-0 w-[300px] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-50'
              : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
          }
        >
          <h1 className="text-3xl font-extrabold w-full m-4 flex text-white">Event <span className="text-[#3461FF]"> 360</span></h1>

          {navItems.map((item: any) => (
            <li
              key={item.id}
              className='p-4 text-white border-b rounded-xl hover:bg-[#00df9a]  duration-300 hover:text-black cursor-pointer border-gray-600'
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavbarMenu;