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

/**
 * A React component that displays a line chart of the compilation times of the drivers.
 *
 * This component renders a line chart of the compilation times of the drivers, with the
 * x-axis representing the driver names and the y-axis representing the compilation times
 * in minutes. The chart is responsive and has a title and legend.
 *
 * The component uses the `useContext` hook to get the race details from the `raceDetailsContext`
 * context, and the `useState` hook to store the race data. The component uses the `useEffect`
 * hook to fetch the race data from the context when the component mounts.
 *
 * The component renders a `Box` component with a `Line` chart inside it. The box is styled
 * with a height and width of 300px, and a flex direction of 'row-reverse'.
 *
 * @returns {React.ReactElement} A React element representing the PerformanceChart component.
 */
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
      justifyContent={'center'}
      sx={{ maxHeight: '300px', width: '100%' }}
    >
      <Line data={data} options={options} />
    </Box>
  )
}

export default PerformanceChart
