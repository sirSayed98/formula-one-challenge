import raceDetailsContext from '@context/RaceDetails/context'
import { Box } from '@mui/material'
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js'
import { useContext, useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { mapRaceDetailsToChartData } from './utils'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)

const PerformanceChart = () => {
  const { raceDetails } = useContext(raceDetailsContext)
  const [raceData, setRaceData] = useState([])

  useEffect(() => {
    if (raceDetails.Results?.length) {
      const chartRaceData = mapRaceDetailsToChartData(raceDetails)
      setRaceData(chartRaceData)
    }
  }, [raceDetails])

  const data = {
    labels: raceData.map(item => item.name),
    datasets: [
      {
        label: 'Compilation Time (minutes)',
        data: raceData.map(item => item.time),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Driver performances',
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'Time (mins)',
        },
      },
    },
  }

  return (
    <Box
      display={'flex'}
      flexDirection={'row-reverse'}
      sx={{ height: '300px', width: '100%' }}
    >
      <Line data={data} options={options} />
    </Box>
  )
}

export default PerformanceChart
