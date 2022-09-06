import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    FormHelperText,
    Container,
} from '@chakra-ui/react'
import { userState } from './atom'
import {useSetRecoilState} from 'recoil'

function Signup({end}) {
    const setUserState = useSetRecoilState(userState)
    const [formObj, setFormObj] = useState ({
        username: "",
        email: "",
        password: "",
    })

    const userObj = {
        user: {...formObj}
    }
    let navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        fetch(`${end}/users`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userObj)
        })
        .then((res) => res.json())
        .then((res) => {
            if ((res.user)) {
                fetch(`${end}/login`, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(userObj)
                })
                .then((res) => res.json())
                .then((res) => {
                    localStorage.setItem('token', res.jwt)
                    setUserState(res.user)
                    navigate('/HomePage')
                })
            }
        })
    }

    function handleChange(e){
        setFormObj(obj => ({...obj, [e.target.id]: e.target.value}))
    }

return (
    <Container maxW='md'>
    <form onSubmit={handleSubmit}>
    <FormControl isRequired>
    <FormLabel>Username</FormLabel>
    <Input id='username' type='username' value={formObj.username} onChange={handleChange} />
    <FormLabel>Email address</FormLabel>
    <Input id='email' type='email' value={formObj.email} onChange={handleChange} />
    <FormHelperText>We'll never share your email.</FormHelperText>
    <FormLabel>Password</FormLabel>
    <Input id='password' type='password' value={formObj.password} onChange={handleChange}/>
    <Button mt={4} variant="primary" type='submit'> Submit </Button>
    </FormControl>
    </form>
    </Container>
)
}

export default Signup