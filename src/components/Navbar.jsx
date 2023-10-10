import { UnlockIcon } from "@chakra-ui/icons";
import { Avatar, AvatarBadge, Box, Button, Flex, HStack, Heading, Spacer, Text, useToast } from "@chakra-ui/react";

export default function Navbar() {

  const toast = useToast()
  const showtoast =()=>{
    toast({
      title : 'Logged out',
      description : 'Logged out successfully',
      duration : 4000,
      isClosable : true,
      status : 'success',
      position : 'top',
      icon : <UnlockIcon />
    })
  }
  return (
    <Flex as={"nav"} p={"10px"} alignItems={"center"} mb={'40px'}>
        <Heading as={"h1"}>Test Nav</Heading>
        <Spacer />

        <HStack spacing={"20px"}>
            <Avatar src="/img/mario.png">
              <AvatarBadge width="1.3em" bg={'teal.500'}>
                <Text fontSize="xs" color={'white'}>2</Text>
              </AvatarBadge>
            </Avatar>
            <Text>test12@gmail.com</Text>
            <Button bg={"blue.500"} color={"white"} onClick={showtoast}>Logout</Button>
        </HStack>
    </Flex>
  )
}
