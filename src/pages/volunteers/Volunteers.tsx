/* eslint-disable @typescript-eslint/no-explicit-any */
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { useGetVolunteersQuery } from "../../redux/feauters/volunteers/volunteerApi"


function Volunteers() {
  const { data } = useGetVolunteersQuery(undefined)

  return (
    <div className="max-w-[1200px] mx-auto py-16">
      <div className="flex flex-wrap justify-between py-10 p-5">
        <h2 className="text-4xl font-bold ">Our Volunteers</h2>
        <p className="max-w-[800px] text-xl py-6 lg:py-0">Charity law within the UK varies among England and Wales, Scotland and Northern Ireland, but the fundamental principles are the same. Most organizations that are charities are required to registered with the appropriate regulato</p>
      </div>


      <div className=" grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 py-16">
        {
          data?.map((d: any, i: string) => (
            <div key={i} className="w-80 md:w-96 bg-base-100 shadow-md text-center">
              <figure><img className="h-[350px] w-full" src={d.image} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="text-xl font-bold">{d.name}</h2>
                <p className="text-orange-600">Volunteer</p>
                <div className="flex flex-wrap justify-center gap-6 py-4">
                  <Linkedin />
                  <Twitter />
                  <Facebook />
                  <Instagram />
                </div>

              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Volunteers
