import React, { useEffect, useState } from 'react'
import useFetchAuth from './lib/useFetchAuth'
import PrizeCards from './PrizeCards'

function Prizes({end}) {
  const [prizes, setPrizes] = useState([])
  const fetchPrizes = useFetchAuth(`${end}/giveaways`)

  useEffect(() => {
    fetchPrizes().then(setPrizes)
  },[])

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