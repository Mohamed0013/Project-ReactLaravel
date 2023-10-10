import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import Dashboard, { tasksLoader } from './pages/Dashboard'
import Create, { createAction } from './pages/Create'
import Profile from './pages/Profile'

import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const colors = {
  brand : {
    900 : "024fc9",
    800 : "146af5",
    700 : "2977f2",
    600 : "337df2",
    500 : "4287f5"
  }
}
const fonts = {
  body : 'Tahoma',
  heading : 'Courier New'
}

const theme = extendTheme({colors, fonts})

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} loader={tasksLoader} />
      <Route path="create" element={<Create />} action={createAction}/>
      <Route path="profile" element={<Profile />} />
    </Route>
  )
)

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App



