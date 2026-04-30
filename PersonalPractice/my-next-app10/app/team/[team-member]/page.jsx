import React from 'react'
import teamArrs from '@/app/lib/teamArrs'
import Link from 'next/link'

async function TeamMember({params}) {
    const paramsData = await params
    const id = paramsData['team-member']
    const member = teamArrs[id]

  return (
    <div>
      <h1>Team Member: {member.name}</h1>
      <p>Role: {member.role}</p>
      <Link href="/team">
        <button>Go back to the rest of the team</button>
      </Link> 
    </div>
  )
}

export default TeamMember