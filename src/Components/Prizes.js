import React, { useEffect, useState } from 'react'
import useFetchAuth from './lib/useFetchAuth'
import PrizeCards from './PrizeCards'
import {artistState} from './atom'
import { useRecoilValue } from 'recoil'

function Prizes({end}) {
  const [prizes, setPrizes] = useState([])
  const artistId = useRecoilValue(artistState)
  const fetchPrizes = useFetchAuth(`${end}/artists/${artistId}`)

  useEffect(() => {
    fetchPrizes().then(setPrizes)
    //eslint-disable-next-line
  },[])

 //prize.artist.id?
  const renderPrizes = prizes.map(prize => {
    return <PrizeCards
    key={prize.id}
    prize={prize}
    />
  })

  return (
    <div>{renderPrizes}</div>
  )
}

export default Prizes