import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import HomePage from '../Pages/HomePage/HomePage'
import Login from '../Components/Login/Login'
import SignUp from '../Components/SignUp/SignUp'
import RoomDetails from '../Pages/RoomDetails/RoomDetails'
import PrivateRoute from './PrivateRoute'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
      path: '/',
      element:<HomePage/>
      },
      {
        path: '/login',
        element:<Login/>
      },
      {
        path: '/signUp',
        element:<SignUp/>
      },
      {
        path: '/room/:id',
        element:<PrivateRoute><RoomDetails/></PrivateRoute>
      }
    ]
  },
])


