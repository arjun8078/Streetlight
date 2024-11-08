import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import Mainlayout from './layout/Mainlayout';
import Homepage from './pages/Homepage';


const router=createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Mainlayout/>}>
      <Route index element={<Homepage/>} />
  </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App