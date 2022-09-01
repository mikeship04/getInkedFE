import React from 'react'

function PrizeCards({prize}) {

return (
    <>
    <div>{prize.header}</div>
    <div>{prize.description}</div>
    <div>{prize.closing_date}</div>
    <div>{prize.img_url}</div>
    <div>{prize.full_details}</div>
    </>
)
}

export default PrizeCards