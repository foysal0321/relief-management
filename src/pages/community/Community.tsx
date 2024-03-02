/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetCommunitysQuery } from "../../redux/feauters/community/communityApi"
import CreateCommunity from "./CreateCommunity"

function Community() {

    const { data } = useGetCommunitysQuery(null)


    return (
        <div className="py-16">
            <h2 className="text-4xl font-bold py-6 text-center">Our Community</h2>  <hr />
            <div className="max-w-[1400px] mx-auto flex flex-wrap justify-center items-center py-6">
                <div className="md:w-[700px] w-[350px]">
                    {
                        data?.map((d: any, i: string) => (
                            <div key={i} className="chat chat-start">
                                <div className="chat-image  avatar placeholder">
                                    <div className="bg-neutral text-neutral-content rounded-full w-16">
                                        <span className="">User</span>
                                    </div>
                                </div>
                                <div className="chat-bubble bg-gray-100 p-3">
                                    <h4 className="font-bold text-black py-2">{d.name}</h4>
                                    <p className="text-gray-600">{d.comment}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="">
                    <CreateCommunity />
                </div>

            </div>
        </div>
    )
}

export default Community
