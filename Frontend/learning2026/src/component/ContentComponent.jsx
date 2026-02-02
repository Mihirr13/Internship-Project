import React from 'react'
import "../assets/css/content.css"

export default function ContentComponent() {
  return (
    <div className='fullpage'>
        
      <div className='content'>
        <h5>Name : Tyson Van Ngo</h5>
        <h5>DOB : May 5, 2001</h5>
        <h5>Role : Flex (Initiator, Controller)</h5>
        <h5>Game Name : TenZ</h5>

        <h5>Career :</h5>
        <p>
          He began his esports career in October 2019 as a Counter-Strike:
          Global Offensive player for Cloud9. In April 2020, he transitioned
          to Valorant, playing for Cloud9. He took a break from professional
          Valorant in January 2021 to focus on full-time streaming on Twitch.
          Later in April, he was loaned to Sentinels. He went on to win the VCT
          Stage Two Masters in Reykjavík later that year. In June 2021, his
          Cloud9 contract was bought out by Sentinels, where he would remain
          until the end of his professional career in September 2024.
        </p>

        <h5>Achievements :</h5>
        <ul>
          <li>VALORANT Champions 2024 4th</li>
          <li>VALORANT Masters Madrid 2024 Winner</li>
          <li>VALORANT Masters Berlin 2021 Winner</li>
          <li>VALORANT Masters Reykjavík 2021 Winner</li>
          <li>North America Stage 1 Masters Winner</li>
        </ul>
      </div>

      <div className='player'></div>

    </div>
  )
}
