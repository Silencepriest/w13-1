import React from 'react'
import {useParams, Link} from 'react-router-dom'

export default function(props) {
  const {userName, userRepo} = useParams()
  return(
    <div>
      <p>User name: {userName}</p>
      <Link id='go-back' to='/'>Go to homepage</Link>
      {userRepo?<Link id="go-repository-list" to={`/${userName}`}>go to repository list</Link>:null}
    </div>
  )
}