import React, {useState} from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Container,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { artistState, artistIdState } from './atom';
import { useRecoilValue } from 'recoil';

function EditArtist({end}) {
    let navigate = useNavigate()
    let artist = useRecoilValue(artistState)
    let artistId = useRecoilValue(artistIdState)
    const [formObj, setFormObj] = useState ({
        bio: `${artist.bio}`,
        name: `${artist.name}`,
        img_url: `${artist.img_url}`,
        instagram: `${artist.instagram}`,
        twitter: `${artist.twitter}`,
        tiktok: `${artist.tiktok}`,
        facebook: `${artist.facebook}`,
        youtube: `${artist.youtube}`
    })

    const artistObj = {
        artist: {...formObj}
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch(`${end}/artists/${artistId}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(artistObj)
        })
        .then((res) => res.json())
        navigate('/HomePage')
    }

    function handleChange(e){
        setFormObj(obj => ({...obj, [e.target.id]: e.target.value}))
    }

return (
    <Container maxW='md'>
    <form onSubmit={handleSubmit}>
    <FormControl>
    <FormLabel>Artist Name</FormLabel>
    <Input id='name' type='name' value={formObj.name} onChange={handleChange} />
    <FormLabel>Bio</FormLabel>
    <Input id='bio' type='bio' value={formObj.bio} onChange={handleChange} />
    <FormLabel>Image url</FormLabel>
    <Input id='img_url' type='img_url' value={formObj.img_url} onChange={handleChange} />
    <FormLabel>Instagram Link</FormLabel>
    <Input id='instagram' type='instagram' value={formObj.instagram} onChange={handleChange}/>
    <FormLabel>Twitter Link</FormLabel>
    <Input id='twitter' type='twitter' value={formObj.twitter} onChange={handleChange} />
    <FormLabel>Tiktok Link</FormLabel>
    <Input id='tiktok' type='tiktok' value={formObj.tiktok} onChange={handleChange} />
    <FormLabel>Facebook Link</FormLabel>
    <Input id='faceboko' type='facebook' value={formObj.facebook} onChange={handleChange} />
    <FormLabel>Youtube Link</FormLabel>
    <Input id='youtube' type='youtube' value={formObj.youtube} onChange={handleChange} />
    <Button mt={4} variant="primary" type='submit'> Edit Artist </Button>
    </FormControl>
    </form>
    </Container>
)
}

export default EditArtist