import { useGetCommunitysQuery } from "../../redux/feauters/community/community"
import CreateCommunity from "./CreateCommunity"

function Community() {

    const {data} = useGetCommunitysQuery(null)
    console.log('community data => ', data);
    
   

  return (
    <div>
     Community <hr /> <hr /> 

     <CreateCommunity />
    </div>
  )
}

export default Community
