import { Link, Outlet } from "react-router-dom"

function About() {
  return (
		<div>
			<h1>About</h1>
      <ul>
        <Link to="team1"><li>Team 1</li></Link>
        <Link to="team2"><li>Team 2</li></Link>
        <Link to="team3"><li>Team 3</li></Link>
      </ul>
      <Outlet/>
		</div>
	)
}

export default About