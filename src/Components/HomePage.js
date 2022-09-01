import React, { useEffect, useState } from 'react'
import useFetchAuth from './lib/useFetchAuth'
import ArtistCards from './ArtistCards'

function HomePage({user, end, theme}) {
    const [artists, setArtists] = useState([])
    const fetchArtists = useFetchAuth(`${end}/artists`)
    
    useEffect(() => {
        fetchArtists().then(setArtists)
    },[])

    const renderArtists = artists.map(artist => {
        return <ArtistCards
        key={artist.id}
        artist={artist}
        />
    })

return (
    <div>{renderArtists}</div>
)
}

export default HomePage