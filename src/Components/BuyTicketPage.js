// when a user clicks "purchase tickets" from the Prize Page we navigate here
// on this page we carry the user id and artist id to generate "tickets" for sale
// ticket clusters are $1 for 4 $5 for 50 $10 for 150 $20 for 500
// we will "create" tickets in user portfolio once the purchase is complete
// need to create tickets in database BEFORE going to checkout session?  how could i do this differently?
// after completion patch to update the ticket to belong to user who purchased. now user is connected and thier tickets will show
import React, { useState, useEffect } from 'react'
import { Button } from '@chakra-ui/react'

// on click make a post request to checkout session? and pass product id in params
//var stripe = Stripe()

// add to top level js <script src="https://js.stripe.com/v3/"></script>
//stripe.redirectTocheckout({
    //sesssionId: @session.id
    //.then
//})
const ProductDisplay = () => (
    <section>
    <div className="product">
        <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Stubborn Attachments"
        />
        <div className="description">
        <h3>Stubborn Attachments</h3>
        <h5>$20.00</h5>
        </div>
    </div>
    <form action="http://localhost:9292/create-checkout-session" method="POST" >
        <button type="submit">
        Checkout
        </button>
    </form>
    </section>
);

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
    <ProductDisplay />
    <Button onClick={handleBuy} variant="primary">Buy 1 Ticket</Button>
    </>
    )  
    
}

export default BuyTicketPage