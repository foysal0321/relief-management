/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetDonorsQuery } from "../../redux/feauters/user-donors/donorsApi"


function Leaderboard() {
    const {data, isLoading} = useGetDonorsQuery(undefined)
    //console.log(data);
    
    return (
        <div className="py-20 max-w-[1200px] mx-auto">
            <div className="">
                <h2 className="text-3xl font-bold py-6 p-5">Donors Leaderboard</h2>
            </div>
            {
                isLoading && 
                <span className="loading loading-dots loading-lg"></span>
            }
            <div className="overflow-x-auto p-4 text-center">
            <table className="table table-zebra">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Contributions</th>
                        <th>Achive</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                        data?.map((d: any, i: string) => (
                            <tr key={i}>
                        <td>{i + 1}</td>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar placeholder">
                                    <div className="bg-neutral text-neutral-content rounded-full w-12">
                                        <span className="text-xl">AI</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{d.name}</div>
                                    <div className="text-sm opacity-50">{d.address}</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p>{d.amount}</p>
                        </td>
                        <td>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </td>

                    </tr>
                        ))
                    }
                                       
                </tbody>
            </table>
        </div>
            
        </div>
    )
}

export default Leaderboard
