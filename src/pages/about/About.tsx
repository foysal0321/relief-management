import { Link } from "react-router-dom"
import Volunteers from "../volunteers/Volunteers"

function About() {
  return (
    <div>
      <div className="hero min-h-[400px]" style={{ backgroundImage: 'url(https://media.istockphoto.com/id/1268244465/photo/all-together-working-in-a-team.jpg?s=612x612&w=0&k=20&c=VSfgorsdK_CDqxUHDHWl7hDLDFFI4FOGnhW5Ck0bj08=)' }}>
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">About Team</h1>
          </div>
        </div>
      </div>

      <Volunteers />

      <div className="flex max-w-[1200px] mx-auto flex-wrap items-center justify-center ">
        <div className="max-w-[600px]">
          <img className="min-h-[500px]" src="https://media.istockphoto.com/id/1268244465/photo/all-together-working-in-a-team.jpg?s=612x612&w=0&k=20&c=VSfgorsdK_CDqxUHDHWl7hDLDFFI4FOGnhW5Ck0bj08=" alt="" />
        </div>
        <div className="text-center lg:text-left p-10 max-w-[600px] bg-slate-100 min-h-[500px]">
          <h1 className="text-4xl font-bold text-primary lg:mt-12">More People <br />
            More impact</h1>
          <p className="py-6 text-xl">Charity law within the UK varies among England and Wales, <br /> Scotland and Northern Ireland, but the fundamental principles are <br /> the same. Most organizations.</p>
        </div>
      </div>



      <div className=" max-w-[1200px] mx-auto flex flex-wrap justify-center items-center ">
        <div className="max-w-[600px] text-center lg:text-left p-10 bg-primary min-h-[500px] text-white">
          <h1 className="text-4xl font-bold lg:mt-12">Children International <br /> charity ratings</h1>
          <p className="py-8 text-xl text-gray-300">Charity law within the UK varies among England <br /> and Wales, Scotland and  Northern Ireland, but the <br />fundamental   principles are the same. Most organizations that are charities.</p>
          <button className=" btn btn-md bg-white">Learn More</button>
        </div>
        <div className="max-w-[600px] ">
          <img className="min-h-[500px]" src="https://media.istockphoto.com/id/496276728/photo/group-of-happy-gypsy-indian-children-desert-village-india.webp?b=1&s=170667a&w=0&k=20&c=WLTmw6Al9-LDbAalZh9oEo7T1mKnecx9Q5wBIuzEHyM=" alt="" />
        </div>
      </div>


      <div className="text-center py-20 p-5">


        <h2 className="text-5xl font-bold py-6">Want to get involved?</h2>
        <p className="text-gray-500 text-xl">The legal definition of a charitable organization varies between countries and in <br /> some instances regions of the country.</p>
        <Link to='/volunteer'>
          <button className="btn btn-primary text-white mt-8">BECOME A VOLUNTEER</button>
        </Link>
      </div>



    </div>
  )
}

export default About
