import React, {useState} from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Container,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { artistIdState, prizeState } from './atom';
import { useRecoilValue } from 'recoil';

function EditPrizes({end}) {
    let prize = useRecoilValue(prizeState)
    let navigate = useNavigate()
    let artistId = useRecoilValue(artistIdState)
    const [formObj, setFormObj] = useState ({
        header: `${prize[0].header}`,
        img_url: `${prize[0].img_url}`,
        description: `${prize[0].description}`,
        closing_date: `${prize[0].closing_date}`,
        full_details: `${prize[0].full_details}`
    })

    const prizeObj = {
        giveaway: {...formObj}
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch(`${end}/giveaways/${artistId}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(prizeObj)
        })
        .then((res) => res.json())
        navigate('/prizes')
    }

    function handleChange(e){
        setFormObj(obj => ({...obj, [e.target.id]: e.target.value}))
    }

return (
    // t.string "header"
    // t.string "description"
    // t.date "closing_date"
    // t.string "img_url"
    // t.text "full_details"
    <Container maxW='md'>
    <form onSubmit={handleSubmit}>
    <FormControl>
    <FormLabel>Header</FormLabel>
    <Input id='header' type='header' value={formObj.header} onChange={handleChange} />
    <FormLabel>Description</FormLabel>
    <Input id='description' type='description' value={formObj.description} onChange={handleChange} />
    <FormLabel>Image Url</FormLabel>
    <Input id='img_url' type='img_url' value={formObj.img_url} onChange={handleChange} />
    <FormLabel>Closing Date</FormLabel>
    <Input id='closing_date' type='closing_date' value={formObj.closing_date} onChange={handleChange}/>
    <FormLabel>Full Details</FormLabel>
    <Input id='full_details' type='full_details' value={formObj.full_details} onChange={handleChange} />
    <Button mt={4} variant="primary" type='submit'> Edit Giveaway </Button>
    </FormControl>
    </form>
    </Container>
)
}

export default EditPrizes