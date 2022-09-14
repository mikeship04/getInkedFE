import React, { useEffect, useState} from 'react'
import useFetchAuth from './lib/useFetchAuth'
import PrizeCards from './PrizeCards'
import {artistIdState, prizeState,userState } from './atom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'

function Prizes({end}) {
  const [tickets, setTickets] = useState([])
  const setPrizes = useSetRecoilState(prizeState)
  const prizes = useRecoilValue(prizeState)
  const user = useRecoilValue(userState)
  let navigate = useNavigate()
  const prizeId= prizes[0].id
  const artistId = useRecoilValue(artistIdState)
  const fetchPrizes = useFetchAuth(`${end}/artists/${artistId}`)
  const fetchTickets = useFetchAuth(`${end}/tickets/${prizeId}`)

  function handleBuy(id) {
    fetch(`${end}/create-checkout-session`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id})
    })
    .then(res => res.json())
    .then(data => {user ? window.location = (data.url) : navigate('/Signup')})
}

  useEffect(() => {
    fetchPrizes().then(setPrizes)
    //eslint-disable-next-line
  },[])

  useEffect(() => {
    fetchTickets().then(setTickets)
    //eslint-disable-next-line
  },[])

 //prize.artist.id?
  const renderPrizes = prizes.map(prize => {
    return <PrizeCards
    handleBuy={handleBuy}
    key={prize.id}
    prize={prize}
    tickets={tickets}
    />
  })

  return (
    <div>{renderPrizes}</div>
  )
}

export default Prizes