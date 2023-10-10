import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { Grid, GridItem } from "@chakra-ui/react"
import Sidebar from "../components/Sidebar"

export default function RootLayout() {
  return (
    //side bar
    <Grid templateColumns={"repeat(6, 1fr)"} bg={"gray.50"}>
      <GridItem as={"aside"}
        colSpan={{base : 6, lg : 1, xl : 1}}
        bg={'blue.300'}
        minH={{lg : '100vh'}}
        p={{base : '20px', lg : '30px'}}
      >
        
        <Sidebar />
  
      </GridItem>

    {/* main */}
      <GridItem as={'main'}
        colSpan={{base : 6, lg : 5, xl : 5}}
        p={'40px'}
      >
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  )
}
