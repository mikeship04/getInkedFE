// ticket clusters are $1 for 4 $5 for 50 $10 for 150 $20 for 500
// we will "create" tickets in user portfolio once the purchase is complete
// need to create tickets in database BEFORE going to checkout session?  how could i do this differently?
// after completion patch to update the ticket to belong to user who purchased. now user is connected and thier tickets will show
import React, { useState, useEffect } from 'react'
import { Button } from '@chakra-ui/react'

const Message = ({ message }) => (
    <section>
    <p>{message}</p>
    </section>
);

function BuyTicketPage({end}) {
    const [message, setMessage] = useState("");
    function handleBuy() {
        fetch(`${end}/create-checkout-session`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id: 2})
        })
        .then(res => res.json())
        .then(data => window.location = (data.url))
    }

    useEffect(() => {
      // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
        setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
        setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
        );
    }
    }, []);

    return  (
        <>
        {message ? <Message message={message}/> : null}
    <Button onClick={handleBuy} variant="primary">Buy 1 Ticket</Button>
    </>
    )  
    
}

export default BuyTicketPage