import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Flex, HStack, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

export default function Dashboard() {

  const tasks = useLoaderData()

  // const Style_object = {
  //   textAlign : "center",
  //   filter : 'blur.100',
  //   bg : "red",
  //   maxWidth : "200px",
  //   ':hover' : {
  //     color : "white",
  //     bg : "black"
  //   }
  // }

  return (
    // <Container as={"section"} maxWidth={'4xl'} py={"20px"}>
    //   <Heading my={"30px"} p={"10px"}>Test Chakra UI</Heading>
    //   <Text ml={"30px"} color={"blue.200"} fontWeight={"bold"}>Test chakra in narruto</Text>
    //   <Box sx={Style_object}>
    //     som text
    //   </Box>
    // </Container>


    <SimpleGrid minChildWidth={'300px'} spacing={'10'}>
      {/* <Box bg={'white'} h={'200px'} border={'1px solid'}></Box>
      <Box bg={'white'} h={'200px'} border={'1px solid'}></Box>
      <Box bg={'white'} h={'200px'} border={'1px solid'}></Box>
      <Box bg={'white'} h={'200px'} border={'1px solid'}></Box>

      <Box bg={'white'} h={'200px'} border={'1px solid'}></Box>
      <Box bg={'white'} h={'200px'} border={'1px solid'}></Box>
      <Box bg={'white'} h={'200px'} border={'1px solid'}></Box>
      <Box bg={'white'} h={'200px'} border={'1px solid'}></Box>

      <Box bg={'white'} h={'200px'} border={'1px solid'}></Box>
      <Box bg={'white'} h={'200px'} border={'1px solid'}></Box>
      <Box bg={'white'} h={'200px'} border={'1px solid'}></Box>
      <Box bg={'white'} h={'200px'} border={'1px solid'}></Box> */}


      {tasks && tasks.map(task => (
        <Card key={task.id} borderTop={'8px'} borderColor={"blue.400"} bg={'white'}>
          <CardHeader>
            <Flex gap={5}>
              <Avatar src={task.img} />
              <Box>
                <Heading as={'h3'} size={"sm"}>
                  {task.title}
                </Heading>
                <Text>By {task.author}</Text>
              </Box>
            </Flex>
          </CardHeader>

          <CardBody color={"gray.500"}>
            <Text>
              {task.description}
            </Text>
          </CardBody>

          <Divider borderColor={"grey.200"} />

          <CardFooter>
            <HStack>
              <Button variant={"ghost"} leftIcon={<ViewIcon />}>view</Button>
              <Button variant={"ghost"} leftIcon={<EditIcon />}>comment</Button>
            </HStack>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  )
}

export const tasksLoader = async () =>{
  const res = await fetch('http://localhost:3000/tasks')
  return res.json()
}