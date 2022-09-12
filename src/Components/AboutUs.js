import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Image,
  Link,
} from '@chakra-ui/react';

function AboutUs() {
  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Get to know us!{' '}
          <Text as={'span'} color={'purple.400'}>
            Mike Shippy
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          Mike Shippy is a software engineer who recently completed a program with the Flatiron School.  He enjoys solving puzzles,
          staying activie with his fiance, and watching professional sports.  Click below to find out what he's up to!
        </Text>
        <Stack spacing={6} direction={'row'}>
        <Link href={'https://github.com/mikeship04'} isExternal>
          <Button rounded={'full'} px={6} variant='primary'> Other Projects </Button>
          </Link>
          <Link href={'https://www.linkedin.com/in/michael-shippy/'} isExternal>
          <Button rounded={'full'} px={6} variant='primary'> About Me </Button>
          </Link>
        </Stack>
        <Flex w={'full'}>
        </Flex>
        <Flex>
            <Image
            rounded={'md'}
            boxSize='450px'
            alt={'feature image'}
            src={'https://media-exp1.licdn.com/dms/image/D5635AQGcmooNp0H0Ug/profile-framedphoto-shrink_200_200/0/1657760630878?e=1663603200&v=beta&t=zyV-qt9pZlxLPlO-WrOTOqjc214Q3V3SPS0ILJf783M'}
            objectFit={'cover'}
            />
        </Flex>
      </Stack>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Get to know us!{' '}
          <Text as={'span'} color={'purple.400'}>
          Andrew Veilleux
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          Andrew Veilleux is an avid fitness junkie who enjoys living life on the edge and spending time with his friends
          and family. Click below to find out what he's up to!
        </Text>
        <Stack spacing={6} direction={'row'}>
        <Link href={'https://www.instagram.com/andrew_veilleux/'} isExternal>
          <Button rounded={'full'} px={6} variant='primary'> About Me </Button>
          </Link>
        </Stack>
        <Flex w={'full'}>
        </Flex>
        <Flex>
            <Image
            rounded={'md'}
            boxSize='450px'
            alt={'feature image'}
            src={'https://scontent.fphx1-1.fna.fbcdn.net/v/t1.18169-9/18698257_1442513185813545_6316697700975491671_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=MWQTCCDLrgkAX-TjSKs&_nc_ht=scontent.fphx1-1.fna&oh=00_AT-MKlKtIhKJVIDYguFu7ysb2VU92cJh9KdqFMpZgmKX1A&oe=6345BED7'}
            objectFit={'cover'}
            />
        </Flex>
      </Stack>
    </Container>
  );
}

export default AboutUs