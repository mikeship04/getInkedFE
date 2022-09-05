import {
    Box,
    Button,
    Container,
    Flex,
    HStack,
    IconButton,
    useBreakpointValue,
    useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const NavBar = ({user, handleLogout}) => {
    const isDesktop = useBreakpointValue({ base: false, lg: true })
    return (
    <Box as="section" pb={{ base: '12', md: '24' }}>
        <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
        <Container py={{ base: '4', lg: '5' }}>
            <HStack spacing="10" justify="space-between">
            {isDesktop ? (
                <Flex justify="space-between" flex="1">
                    <HStack spacing="8">
                        <Link to='/HomePage'><Button variant="ghost">Home</Button></Link>
                        {/* <Link to='/AuthLogin'><Button variant="ghost">test</Button></Link> */}
                    </HStack>
                <HStack spacing="3">
                <Link to='/Prizes'><Button variant="ghost">Prizes</Button></Link>
                <Link to='/AboutUs'><Button variant="ghost">About us</Button></Link>
                {user ? 
                <Button onClick={handleLogout} variant="primary">Sign out</Button> : 
                <Link to='/Login'><Button variant="ghost">Sign in</Button></Link>}
                <Link to='Signup'><Button variant="primary">Sign up</Button></Link>
                </HStack>
                </Flex> ) : (
                <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
                />
            )}
            </HStack>
        </Container>
        </Box>
    </Box>
    )
}

export default NavBar