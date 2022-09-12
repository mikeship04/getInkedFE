import React, { useEffect, useState } from 'react'
import useFetchAuth from './lib/useFetchAuth'
import ArtistCards from './ArtistCards'

function HomePage({end}) {
    const [artists, setArtists] = useState([])
    const fetchArtists = useFetchAuth(`${end}/artists`)
    
    useEffect(() => {
        fetchArtists().then(setArtists)
        // eslint-disable-next-line
    },[])

    function deleteArtist(id) {
        const deletedArtists = artists.filter((a) => {
            if (a.id === id) {
                return false
            } else {
                return true
            }
        })
        setArtists(deletedArtists)
    }

    const renderArtists = artists.map(artist => {
        return <ArtistCards
        key={artist.id}
        artist={artist}
        deleteArtist={deleteArtist}
        end={end}
        />
    })
    
return (
    <div>{renderArtists}</div>
)
}

export default HomePage