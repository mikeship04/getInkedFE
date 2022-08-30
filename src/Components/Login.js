import React, {useState} from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    Button,
} from '@chakra-ui/react'

function Login() {
    const [formObj, setFormObj] = useState ({
        username: "",
        password: ""
    })

    function handleSubmit(e){
        e.preventDefault()
        fetch('http://localhost:3000/login',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formObj)
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
    <form onSubmit={handleSubmit}>
    <FormControl isRequired>
    <FormLabel>Username</FormLabel>
    <Input id='username' type='username' value={formObj.username} onChange={handleChange} />
    <FormLabel>Password</FormLabel>
    <Input id='password' type='password' value={formObj.password} onChange={handleChange}/>
    <Button mt={4} colorScheme='teal' type='submit'> Submit </Button>
    </FormControl>
    </form>
)
}

export default Login