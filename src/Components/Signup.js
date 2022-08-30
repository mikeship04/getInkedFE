import React, {useState} from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    FormHelperText,
} from '@chakra-ui/react'

function Signup() {
    const [formObj, setFormObj] = useState ({
        username: "",
        email: "",
        password: "",
    })

    function handleSubmit(e){
        e.preventDefault()
        fetch('http://localhost:3000/users',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formObj)
        })
        .then(res => {
            res.json().then(console.log)
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
    <FormLabel>Email address</FormLabel>
    <Input id='email' type='email' value={formObj.email} onChange={handleChange} />
    <FormHelperText>We'll never share your email.</FormHelperText>
    <FormLabel>Password</FormLabel>
    <Input id='password' type='password' value={formObj.password} onChange={handleChange}/>
    <Button mt={4} colorScheme='teal' type='submit'> Submit </Button>
    </FormControl>
    </form>
)
}

export default Signup