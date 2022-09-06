import React from 'react'
import { useRecoilValue } from 'recoil'
import { userState } from './atom'
import {
    Button,
    Center,
    Icon,
    IconButton,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom'
import { FaEdit } from 'react-icons/fa'

function Profile() {
    const user = useRecoilValue(userState)

    function Edit() {
        return <Icon as={FaEdit} />
    }

return (
    <Center py={6}>
    <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '540px' }}
        height={{ sm: '476px', md: '20rem' }}
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        padding={4}>
        <Flex flex={1} bg="blue.200">
        <Image
            objectFit="cover"
            boxSize="100%"
            alt='user default photo'
            src={
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHUAAAB1CAMAAABH2l6OAAAAYFBMVEVNm8L////1+flaosf///1rqchGmcLX5u09lr+Xv9Tz9/k+lcD4+vsvj7s+k79Mmr+ix9ipyNyrzt+yzd2Ft9OQvtVlpMV4sM3j7fKy0d/p8fPR4esHhrYAf7UpjLySudJbWOS+AAAB8ElEQVRoge2Y0XaDIAxARTCiqGhrrdpt/v9frnY7XbVROzHuYbk/cE9ICAmexzAMwzAMwzAMw/wVoNPMs16Wmh2laZCHcez7bVgEKezjNEGoxJ0wyPaQ6vzB2ZMb8nBtdhAjqziSZxdK8UxJHmyLWGNiJ5wQqRAnTWrVIWoNSa1W+qg1kZSZhQqVClGR1lOAOpUI2MrWX4PXsBIVpdQcUatQBWGbgDMuvQZ7pjviiS7cc6KzWryY+mApywnq8Yv+TQ2WzmqaiVgb0kdH4rEq0pvjafzqNLSTkwV0giFM6g0dIdaIfEjUz8G2tFNTD9KfCPvSnewykl72WbEGt0cpSV1LN4bjv6If/L94G2w67/tIR9a3nawfg2LaZ23WVTKwKqnJy8lm3dP+2qXEUsiwt67JSE/ZyBqRKlFXhu6UTYSvdFdxpy1NvFqOe+EjF0nwBoCGIpmRCuHnsPExWyML7DkfZrfNvS29WuZTCR0SH7ytHiAjj/Nn+xOuEknj6Q3KCpbyOSY5gKvWmvK1s33ELx2/FtGvtAWU82fb5LA/j+N8rOcawzQXt46RYn13mdrNiky/r9C65XXiB2+JWLpIoZrYVxdInJZoOKt1Wqd1ALpVTscLC5Hy16Aip3KSa3GRrmaX1YdhGIZhGIZhGOa/8wnAiBTGS0qzhQAAAABJRU5ErkJggg=='
            }
        />
        </Flex>
        <Stack
        flex={1}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p={1}
        pt={2}>
        <Heading fontSize={'2xl'} fontFamily={'body'}>
            {user.username}
        </Heading>
        <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
            {user.email}
        </Text>
        <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            Welcome! you have x tickets for x drawing.
        </Text>

        <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-between'}
            alignItems={'center'}>
            <Link to='/HomePage'>
            <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            variant={'primary'}
            _focus={{
                bg: 'gray.200',
            }}>
            View Prizes Available
            </Button>
            </Link>
            <Link to='/ProfileEdit'><IconButton variant={'primary'} position={'static'} aria-label='Search database' icon={<Edit />} /></Link>
        </Stack>
        </Stack>
    </Stack>
    </Center>
)
}

export default Profile