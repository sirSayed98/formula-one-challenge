import SeasonWrapper from '@components/Season/SeasonWrapper'
import SeasonState from '@context/Season/state'
const SeasonPage = () => {
  return (
    <SeasonState>
      <SeasonWrapper />
    </SeasonState>
  )
}

export default SeasonPage
