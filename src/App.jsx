
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import Layout from './Pages/Layout';
import About from './Pages/About';
import Projects from './Pages/Projects';
import ProjectDetails from './Pages/ProjectDetails';
import Contacts from './Pages/Contacts';
export default function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path='/' element={<HomePage />}></Route>
      <Route element={<Layout />}>
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:projectslug' element={<ProjectDetails />} />
        <Route path='/contacts' element={<Contacts />} />
      </Route>
    </>
  ));
  return (
    <RouterProvider router={router} />
  )
}


