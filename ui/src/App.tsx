import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Root from './pages/Root';
import BasePage from "./pages/BasePage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index path="" element={<BasePage comp={<Home />} />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
