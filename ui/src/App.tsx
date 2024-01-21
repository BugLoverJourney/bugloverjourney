import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/Root';
import BasePage from "./pages/BasePage";
import Menu from "./pages/Menu";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index path="" element={<BasePage comp={<Menu />} />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
