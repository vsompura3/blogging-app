import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import App from './App'
import About from './pages/About'
import Home from './pages/Home'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Route>,
  ),
)

export default function Router() {
  return <RouterProvider router={router} />
}
