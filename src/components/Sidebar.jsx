import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <List color={'white'} fontSize={"1.2em"} spacing={4}>
        <ListItem>
            <Link to={'/'}>
                <ListIcon as={CalendarIcon} />
                Dashboard
            </Link>
        </ListItem>

        <ListItem>
            <Link to={'/create'}>
                <ListIcon as={EditIcon} />
                New task
            </Link>
        </ListItem>

        <ListItem>
            <Link to={'/profile'}>
                <ListIcon as={AtSignIcon} />
                Profile
            </Link>
        </ListItem>
    </List>
  )
}
