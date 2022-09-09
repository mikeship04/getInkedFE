import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    IconButton,
    useColorModeValue,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Link } from '@chakra-ui/react'
import { artistState } from './atom';
import { useSetRecoilState } from 'recoil';
import { FaInstagram, FaTwitter, FaFacebook, FaRegHandPointRight, FaYoutube, FaEdit } from 'react-icons/fa'

function Insta() {
    return <Icon as={FaInstagram} />
}
function Facebook() {
    return <Icon as={FaFacebook} />
}
function Twitter() {
    return <Icon as={FaTwitter} />
}
function Pointer() {
    return <Icon as={FaRegHandPointRight} />
}
function Youtube() {
    return <Icon as={FaYoutube} />
}
function Edit() {
    return <Icon as={FaEdit} />
}

const Feature = ({ text, icon }) => {
    return (
        <Stack direction={'row'} align={'center'}>
        <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}>
        {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
    </Stack>
    );
};

function Artists({artist}) {
    const setArtistId = useSetRecoilState(artistState)
    let navigate = useNavigate()
    
    function handleNav() {
        setArtistId(artist.id)
        navigate('/prizes')
    }

    return (
    <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
            <Heading>{artist.name}</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            {artist.bio}
            </Text>
            <Stack
            spacing={4}
            divider={
                <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')}/>}>
            <Feature icon={
                <Link href={artist.instagram} isExternal>
                    <IconButton position={'static'} aria-label='Search database' icon={<Insta />} />
                </Link>}
                text='Instagram'/>
            {artist.facebook ? <Feature icon={
                <Link href={artist.facebook} isExternal>
            <IconButton position={'static'} aria-label='Search database' icon={<Facebook />} />
            </Link>}
                text='Facebook'
            /> : null}
            {artist.twitter ? <Feature icon={
                <Link href={artist.twitter} isExternal>
            <IconButton position={'static'} aria-label='Search database' icon={<Twitter />} />
            </Link>}
                text='Twitter'
            /> : null}
            {artist.youtube ? <Feature icon={
                <Link href={artist.youtube} isExternal>
            <IconButton position={'static'} aria-label='Search database' icon={<Youtube />} />
            </Link>}
                text='Youtube'
            /> : null}
            <Feature icon={<IconButton position={'static'} onClick={handleNav} aria-label='Search database' icon={<Pointer />} />}
                text='Check out this 🔥 Prize!' />
                <Feature icon={<IconButton position={'static'} aria-label='Search database' icon={<Edit />} />}
                text='Click here to edit artist info!' />
            </Stack>
        </Stack>
        <Flex>
            <Image
            rounded={'md'}
            boxSize='450px'
            alt={'feature image'}
            src={artist.img_url}
            objectFit={'cover'}
            />
        </Flex>
        </SimpleGrid>
    </Container>
    );
}

export default Artists