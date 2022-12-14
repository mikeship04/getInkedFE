import React, {useState} from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Container,
    Text
} from '@chakra-ui/react'
import {userState} from './atom'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { useNavigate } from 'react-router-dom'

function Login({end}) {
    let navigate = useNavigate()
    const setUserState = useSetRecoilState(userState)
    const user = useRecoilValue(userState)
    const [formObj, setFormObj] = useState ({
        username: "",
        password: ""
    })

    const userObj = {
        user: {...formObj}
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch(`${end}/login`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userObj)
        })
        .then(res => {
            res.json()
            .then(json => {
                setUserState(json.user)
                localStorage.setItem('token', json.jwt)
                navigate('/HomePage')
            })
        })
    }

    function handleChange(e){
        setFormObj(obj => ({...obj, [e.target.id]: e.target.value}))
    }

return (
    <Container maxW='md'>
    {user? <Text fontSize='2xl'>welcome back {user.username}</Text> : <Text fontSize='2xl'>Please log in!</Text>}
    <form onSubmit={handleSubmit}>
    <FormControl isRequired>
    <FormLabel>Username</FormLabel>
    <Input id='username' type='username' value={formObj.username} onChange={handleChange} />
    <FormLabel>Password</FormLabel>
    <Input id='password' type='password' value={formObj.password} onChange={handleChange}/>
    <Button mt={4} variant="primary" type='submit'> Submit </Button>
    </FormControl>
    </form>
    </Container>
)
}

export default Login