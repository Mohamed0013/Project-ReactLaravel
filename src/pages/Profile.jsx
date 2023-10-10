import { ChatIcon, CheckCircleIcon, EmailIcon, StarIcon, WarningIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { color } from "framer-motion";

export default function Profile() {
  return (
    <Tabs mt={'40px'} p={'20px'} colorScheme="blue" variant={'enclosed'}>
      <TabList>
      <Tab _selected={{color:'white', bg : "blue.400"}}>Account infos</Tab>
      <Tab _selected={{color:'white', bg : "blue.400"}}>Tasks History</Tab>
      </TabList>
      
      <TabPanels>
        <TabPanel>
          <List spacing={4}>

            <ListItem>
              <ListIcon as={EmailIcon} />
                Email: med12@gmail.com  
            </ListItem>

            <ListItem>
              <ListIcon as={ChatIcon} />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </ListItem>

            <ListItem>
              <ListIcon as={StarIcon} />
                Lorem ipsum dolor sit amet consectetur.
            </ListItem>

          </List>
        </TabPanel>

        <TabPanel>
          <List>

          <ListItem>
              <ListIcon as={CheckCircleIcon} color={'teal.400'} />
                Lorem ipsum dolor, sit amet.
            </ListItem>

            <ListItem>
              <ListIcon as={CheckCircleIcon} color={'teal.400'} />
                Lorem ipsum dolor sit.
            </ListItem>

            <ListItem>
              <ListIcon as={WarningIcon} color={'red.400'} />
                Lorem ipsum dolor, sit amet consectetur.
            </ListItem>

            <ListItem>
              <ListIcon as={CheckCircleIcon} color={'teal.400'} />
                Lorem ipsum dolor sit amet consectetur.
            </ListItem>

            <ListItem>
              <ListIcon as={WarningIcon} color={'red.400'} />
                Lorem ipsum dolor sit amet consectetur.
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
