import Chart from 'react-apexcharts'
import { useGetReliefsQuery } from '../../redux/feauters/reliefs/reliefApi'
import Profile from './Profile'

function Dashboard() {

  const { data } = useGetReliefsQuery(null)
  const numbers = []
  const amount = []

  if (data) {
    for (let i = 0; i < data.length; i++) {
      numbers.push(data[i].categori)
      amount.push(parseInt(data[i].amount))
    }
  }

  return (
    <div>
      <Profile />
      <div className="max-w-[500px] mx-auto py-8">
        <Chart
          type='pie'
          width={500}
          height={500}

          series={amount}
          options={{
            labels: numbers,
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          }}


        >

        </Chart>
      </div>
    </div>
  )
}

export default Dashboard


