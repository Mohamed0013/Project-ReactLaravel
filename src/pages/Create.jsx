import { Box, Button, Checkbox, FormControl, FormHelperText, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { Form, redirect } from "react-router-dom";

export default function Create() {

  const submitStyle = {
    color : 'white',
    bg: 'rgb(2,0,36)',
    bg: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)',
    ':hover' : {
      bg: 'rgb(2,0,36)',
      bg: 'linear-gradient(90deg, rgba(0,212,255,1) 100%, rgba(9,9,121,1) 0%,  rgba(2,0,36,1) 0%)'
    }
  }

  return (
    <Box maxW={'450px'}>
        <Form method="post" action='/create'>

          <FormControl isRequired mb={'40px'}>
            <FormLabel>Task name :</FormLabel>
            <Input type="text" name="title" />
            <FormHelperText>Enter a descriptive task name.</FormHelperText>
          </FormControl>

          <FormControl mb={'40px'}>
            <FormLabel>Task description :</FormLabel>
            <Textarea placeholder="enter the description of the task..." name="description"/>
            <FormHelperText>Cut short pliz.</FormHelperText>
          </FormControl>

          <FormControl mb={'40px'} display={'flex'} alignItems={'center'}>
            <Checkbox 
              name="isPriority"
              size={'lg'}
            />
            <FormLabel mb={'0'} ml={'10px'}>
              Make this a priority task.
            </FormLabel>
          </FormControl>

          <Button type="submit" sx={submitStyle}>submit</Button>
        </Form>
    </Box>
  )
}

export const createAction = async ({request}) =>{
  const data = await request.formData()

  const task = {
    title : data.get('title'),
    description : data.get('description'),
    isPriority : data.get('isPriority') === ''
  }

  console.log(task)
  return redirect('/')
}
