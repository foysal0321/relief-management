import { useGetVolunteersQuery } from "../../redux/feauters/volunteers/volunteerApi"


function Volunteers() {
    const {data} = useGetVolunteersQuery(undefined)

  return (
    <div>
      <h2 className="text-3xl font-bold py-6">Our Volunteers</h2>

      <div className="grid py-16">
        {
            data?.map((d, i) => (
                <div key={i} className="card w-72 bg-base-100 shadow-xl">
  <figure><img src={d.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{d.name}</h2>
    <p>{d.address}</p>
    <p>{d.email}</p>
   
  </div>
</div>
            ))
        }
      </div>
    </div>
  )
}

export default Volunteers
