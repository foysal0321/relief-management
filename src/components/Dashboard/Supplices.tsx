/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pencil, Trash2 } from 'lucide-react'
import { useDeleteReliefMutation, useGetAllReliefsQuery } from '../../redux/feauters/reliefs/reliefApi'
import { Link } from 'react-router-dom'

function Supplices() {

  const {data, isLoading, isError} = useGetAllReliefsQuery(null)
  const [deleteData] = useDeleteReliefMutation()
  
  const handleDelete = (id: string) => {
    deleteData(id)
   console.log('done');
   
  }

  let content;
  if(isLoading) content = <span className="loading loading-dots loading-lg"></span>

  if(data) {
    content = data.map((item: any, i: string) => (
      <tr key={i}>
              <th>{i + 1}</th>
              <td className=''>{item.title}</td>
              <td>{item.categori}</td>
              <td>{item.amount}</td>
              <div className="flex gap-x-4">
                <Link to={`/dashboard/update-supply/${item._id}`} className='border border-gray-500 p-2 rounded-full'> <Pencil /> </Link>
                <button onClick={() => handleDelete(item._id)} className='border border-gray-500 p-2 rounded-full'> <Trash2 />  </button>
              </div>
            </tr>
    ))
  }

  if (isError) content = 'Something error!'
  return (
    <div>

      <div className="overflow-x-auto py-12 bg-slate-200">
        <h1 className='text-2xl py-6 p-4'>Supplies List</h1>
        <table className="table">
          <thead >
            <tr >
              <th></th>
              <th >Title</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody >
            
           {content}

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Supplices
