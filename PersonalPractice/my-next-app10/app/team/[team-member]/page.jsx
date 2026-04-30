import React from 'react'

async function TeamMember({params}) {
    const paramsData = await params
    const id = paramsData['team-member']

  return <div>TeamMember: {id}</div>
}

export default TeamMember