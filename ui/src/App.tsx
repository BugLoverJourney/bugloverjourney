import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from "./pages/Home";
import Root from './pages/Root';
import Projects from './pages/Projects';
import About from "./pages/About";
import BasePage from "./pages/BasePage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index path="Home" element={<BasePage comp={<Home/>}/>} />
        <Route  path="About" element={<BasePage comp={<About/>}/>} />
        <Route  path="Projects" element={<BasePage comp={<Projects/>}/>} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
