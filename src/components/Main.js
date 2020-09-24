import React, {useState} from 'react'
import {Link} from 'react-router-dom'

export default function (props) {
  const [inputText, setInputText] = useState('')
  return (
    <div>
      <input id="input-field" type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <Link id="search-button" to={`/${inputText}`}>Search</Link>
    </div>
  )
}