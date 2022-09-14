import React, {useState} from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Container,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { userState } from './atom'

function ProfileEdit({end}) {
    let navigate = useNavigate()
    const user = useRecoilValue(userState)
    const [formObj, setFormObj] = useState ({
        username: "",
        email: "",
    })

    function handleSubmit(e){
        e.preventDefault()
        fetch(`${end}/users/${user.id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userObj)
        })
        .then((res) => res.json())
        navigate('/HomePage')
    }

    const userObj = {
        user: {...formObj}
    }

    function handleChange(e){
        setFormObj(obj => ({...obj, [e.target.id]: e.target.value}))
    }

return (
    <Container maxW='md'>
    <form  onSubmit={handleSubmit}>
    <FormControl isRequired>
    <FormLabel>Username</FormLabel>
    <Input id='username' type='username' value={formObj.username} onChange={handleChange} />
    <FormLabel>Email address</FormLabel>
    <Input id='email' type='email' value={formObj.email} onChange={handleChange} />
    <Button mt={4} variant="primary" type='submit'> Click to Edit Profile </Button>
    </FormControl>
    </form>
    </Container>
)
}

export default ProfileEdit