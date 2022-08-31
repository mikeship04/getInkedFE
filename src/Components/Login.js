import React, {useState} from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Container,
} from '@chakra-ui/react'

function Login() {
    const [formObj, setFormObj] = useState ({
        username: "",
        password: ""
    })

    const userObj = {
        user: {...formObj}
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch('http://localhost:9292/login',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userObj)
        })
        .then(res => {
            res.json()
            .then(console.log)
            .then(localStorage.token = res.jwt)
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
    <FormLabel>Password</FormLabel>
    <Input id='password' type='password' value={formObj.password} onChange={handleChange}/>
    <Button mt={4} variant="primary" type='submit'> Submit </Button>
    </FormControl>
    </form>
    </Container>
)
}

export default Login