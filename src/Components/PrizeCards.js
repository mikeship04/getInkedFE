import React from 'react'
import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function PrizeCards({prize}) {
    return (
        <>
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
                as={'span'}
                position={'static'}
                _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                zIndex: -1,
                }}>
                {prize.header}
            </Text>
            <br />{' '}
            <Text color={'purple.400'} as={'span'}>
                {prize.description}
            </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            {prize.full_details} ending on : {prize.closing_date}
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                <Link to='/BuyTickets'>
            <Button
                position={'static'}
                rounded={'full'}
                variant='primary'
                // _hover={{
                // bg: 'blue.500',
                // }}
                >
                Purchase tickets
            </Button>
            </Link>
            <Link to='/EditPrizes'>
            <Button rounded={'full'} variant='primary'>Edit Prize</Button>
            </Link>
            </Stack>
        </Stack>
        </Flex>
        <Flex flex={1}>
        <Image
            alt={'Login Image'}
            boxSize='1000px'
            position={'fixed'}
            objectFit={'cover'}
            src={prize.img_url}
        />
        </Flex>
    </Stack>

    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
    <Flex p={8} flex={1} align={'center'} justify={'center'}>
    <Stack spacing={6} w={'full'} maxW={'lg'}>
        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
        <Text
            as={'span'}
            position={'relative'}
            _after={{
            content: "''",
            width: 'full',
            height: useBreakpointValue({ base: '20%', md: '30%' }),
            position: 'absolute',
            bottom: 1,
            left: 0,
            bg: 'purple.400',
            zIndex: -1,
            }}>
            {prize.header}
        </Text>
        <br />{' '}
        <Text color={'purple.400'} as={'span'}>
            {prize.description}
        </Text>{' '}
        </Heading>
        <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
        {prize.full_details} ending on : {prize.closing_date}
        </Text>
        <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            going to insert a bunch of random text to see what it looks like when we run off screen.
            going to insert a bunch of random text to see what it looks like when we run off screen.
        </Text>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
        <Button
            variant='primary'
            rounded={'full'}
            _hover={{
            bg: 'blue.500',
            }}>
            Purchase tickets
        </Button>
        </Stack>
        </Stack>
        </Flex>
        <Flex flex={1}>
        </Flex>
        </Stack>
        </>
    );
}

export default PrizeCards