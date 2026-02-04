import React from 'react'
import { Link } from 'react-router-dom'

export const Shows = () => {

  return (
    <div>
        <h1>Netflix Shows</h1>
        <ul>
            <li>
             <Link to="/watch/Stranger Things">   Stranger Things</Link>
                </li>
            <li>
                <Link to="/watch/Dexter"> Dexter</Link>
            </li>
            <li>
                <Link to="/watch/Alice in Borderland">Alice in Borederland</Link>
            </li>
            <li>
                <Link to="/watch/Squid Game"> Squid Game</Link>
            </li>
        </ul>
    </div>
  )
}
