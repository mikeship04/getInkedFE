import React, { useEffect} from 'react'
import useFetchAuth from './lib/useFetchAuth'
import PrizeCards from './PrizeCards'
import {artistIdState, prizeState } from './atom'
import { useRecoilValue, useSetRecoilState } from 'recoil'

function Prizes({end}) {
  const setPrizes = useSetRecoilState(prizeState)
  const prizes = useRecoilValue(prizeState)
  const artistId = useRecoilValue(artistIdState)
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