import { useParams } from 'react-router-dom'

function Team1() {
    const params = useParams()
    const team = params.team.replace("t", "T")
  return (
    <div>Team: {team}</div>
  )
}

export default Team1