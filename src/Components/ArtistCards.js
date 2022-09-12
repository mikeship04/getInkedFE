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
import { artistState, artistIdState } from './atom';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { FaInstagram, FaTwitter, FaFacebook, FaRegHandPointRight, FaYoutube, FaEdit, FaTrashAlt } from 'react-icons/fa'
import { userState, prizeState } from './atom'

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
function Delete() {
    return <Icon as={FaTrashAlt} />
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

function Artists({artist, end, deleteArtist }) {
    const user = useRecoilValue(userState)
    const setArtistId = useSetRecoilState(artistIdState)
    const setArtist = useSetRecoilState(artistState)
    const setPrize = useSetRecoilState(prizeState)
    let navigate = useNavigate()
    
    function handleNav() {
        setArtistId(artist.id)
        setPrize(artist.Giveaways)
        navigate('/prizes')
    }

    function handleEdit() {
        setArtist(artist)
        setArtistId(artist.id)
        navigate('/EditArtist')
    }

    function handleDelete() {
        fetch(`${end}/artists/${artist.id}`, {
            method: 'DELETE',
        })
        .then(deleteArtist(artist.id))
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
            {artist.instagram ? <Feature icon={
                <Link href={artist.instagram} isExternal>
                    <IconButton position={'static'} aria-label='Search database' icon={<Insta />} />
                </Link>}
                text='Instagram'
                /> :null}
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
            {artist.Giveaways.length > 0 ? <Feature icon={<IconButton position={'static'} onClick={handleNav} aria-label='Search database' icon={<Pointer />} />}
                text='Check out this 🔥 Prize!' /> : null}
            {user.admin ? <Feature icon={<IconButton position={'static'} onClick={handleEdit} aria-label='Search database' icon={<Edit />} />}
                text='Click here to edit artist info!' /> : null}
            {user.admin ? <Feature icon={<IconButton position={'static'} onClick={handleDelete} aria-label='Search database' icon={<Delete />} />}
                text='Click here to remove this Artist!' /> : null}
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