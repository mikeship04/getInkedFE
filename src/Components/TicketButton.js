import React from 'react'
import { Button } from '@chakra-ui/react'

function TicketButton({ticket, handleBuy}) {

  function handleBuyClick() {
    handleBuy(ticket.id)
  }

  return (
    <Button
        onClick={handleBuyClick}
        key={ticket.id}
        position={'static'}
        rounded={'full'}
        size='md'
        padding='15px'
        margin='5px'
        variant='primary'
        >{ticket.name}</Button>
  )
}

export default TicketButton